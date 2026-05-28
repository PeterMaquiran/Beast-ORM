import { Model } from "../../../Presentation/Api.js"
import { APIOk, APIResponse } from "../../../Utility/Either/APIResponse.js"
import { getArgIdWithT } from "../../../Utility/Model/utils.js"
import { capitalizeFirstLetter } from "../../../Utility/utils.js"
import { IDatabaseSchema, IMethodWithModels } from "../../_interface/interface.type"
import { IRegister } from "../../beastOrm.type.js"
import { modelRegistration } from "../register/register.js"
import { RuntimeMethods as RM } from "../runtimeMethods/runTimeMethods.js"

export class RelationShip {

  getMiddleTable(modelWithNoGetter: typeof Model<any>, modelWithGetter : typeof Model<any>) {
    const databaseName = modelWithNoGetter.getTableSchema().databaseName
    const database = modelRegistration.getDatabase(databaseName)

    const tableName = modelWithNoGetter.getTableSchema().name + modelWithGetter.getTableSchema().name
    const middleTable = database.getTable(tableName)

    return middleTable.model
  }


  getMiddleTableName(modelWithNoGetter: typeof Model<any>, modelWithGetter : typeof Model<any>) {
    // const databaseName = modelWithNoGetter.getTableSchema().databaseName
    // const database = modelRegistration.getDatabase(databaseName)

    const tableName = modelWithNoGetter.getTableSchema().name + modelWithGetter.getTableSchema().name

    return tableName
    // const middleTable = database.getTable(tableName)

    // return middleTable.model.getTableSchema().name
  }

  addToMiddleTable<T>(currentModel: Model<any>, otherModel : typeof Model<any>, toAdd:  Model<any>, middleTableModel: typeof Model<any>) {
    const otherParameterName = otherModel.getTableSchema().name
    const modelWithGetterTableName = capitalizeFirstLetter(currentModel.getModel().getTableSchema().name)
    const parameters: any = {}

    parameters["iD"+otherParameterName] = getArgIdWithT(otherModel, toAdd)
    parameters["iD"+modelWithGetterTableName] = getArgIdWithT(currentModel, currentModel)

    return middleTableModel.create<T>(parameters)
  }


  async getAll<T>(currentModel: Model<any>, otherModel : typeof Model<any>, middleTableModel: typeof Model<any>): Promise<APIResponse<T[], any>>  {

    const parameters: any = {}
    const currentTableName = currentModel.getModel().getTableSchema().name
    const otherParameterName = otherModel.getTableSchema().name

    parameters["iD"+currentTableName] = getArgIdWithT(currentModel, currentModel)

    const [list] =  await middleTableModel.filter<T>(parameters).execute()

    const asyncOperations: Promise<T>[] = list.map(async (e) => {
      await (e as any)["iD" + otherParameterName].get();
      return (e as any)["iD" + otherParameterName];
    });

    // Use Promise.all to wait for all asynchronous operations to complete
    const resolvedResults = await Promise.all(asyncOperations);

    return APIOk(resolvedResults);
  }


  generateRelationShipMethods(databaseSchema:IDatabaseSchema, entries: IRegister , _MiddleModels: typeof Model<any>[]) {

    const methodWithModels: IMethodWithModels[] = []


    for (let index = 0; index < databaseSchema.table.length; index++) {

      const currentModel: typeof Model<any> = entries.models[index]

      const currentModelName = currentModel.getTableSchema().name
      const middleTablePK = databaseSchema.table[index].middleTablePK
      const foreignKeyLength = Object.keys(middleTablePK).length

      if(foreignKeyLength>=1) {
        for (const [fieldName, info] of  Object.entries(middleTablePK)) {

          let index = methodWithModels.push({
            Model: currentModel as any,
            func: []
          })



          const middleTableModel: any = _MiddleModels.find(e => {
            if (e.getTableSchema().name == info.tableName) {
              return true
            }
          })

          const otherModel:typeof Model<any> = (currentModel as any).getModelSchema()[fieldName as string].model
          const otherParameterName = otherModel.getTableSchema().name

          const currentTableName = capitalizeFirstLetter(currentModelName)

          const funcAdd = function(Model: Model<any>) {

            const parameters: any = {}

            parameters["iD"+otherParameterName] = getArgIdWithT(otherModel, Model)
            parameters["iD"+currentTableName] = getArgIdWithT(currentModel, RelationShip.prototype)

            // console.log({parameters,currentTableName, otherParameterName })

            return (middleTableModel as any).create(parameters)

          }

          methodWithModels[index - 1].func.push({
            name: fieldName+"Add",
            function: funcAdd
          })

          const funcGetAll = async function() {

            const parameters: any = {}

            parameters["iD"+currentTableName] = getArgIdWithT(currentModel, RelationShip.prototype);  

            const [result] =  await (middleTableModel as any).filter(parameters as any).execute()

            const asyncOperations = result.map(async (e: any) => {
              await e["iD" + otherParameterName].get();
              return e["iD" + otherParameterName] as Model<any>
            });

            // Use Promise.all to wait for all asynchronous operations to complete
            const resolvedResults = await Promise.all(asyncOperations);

            return APIOk(resolvedResults);
          }

          methodWithModels[index - 1].func.push({
            name:  fieldName+RM.All,
            function: funcGetAll
          })

        }
      }

    }


    return methodWithModels

  }

}

export const relationShip = new RelationShip()
