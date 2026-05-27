import { KeyValueModel } from "../Presentation/Api.js";
import { IRegisterKeyValueStore } from "./beastOrm.type.js";
import { addRunTimeMethod } from "./modelManager/runtimeMethods/addRuntimeMethod.js";
import { schemaGenerator } from "./modelManager/schemaGenerator/schemaGenerator.js";

interface HiddenMethods{
  GET(KeyValue: Model): Object
  DELETE (KeyValue:  Model): void
  UPDATE (dataToSave: any, KeyValue: Model): void
}

type Model = typeof  KeyValueModel & HiddenMethods;


function executeUpdate(dataToSave: any, KeyValue:  Model): void {
  const key = KeyValue.getTableSchema().name
  localStorage.setItem(key, JSON.stringify(dataToSave))
}

function executeSelect(KeyValue: Model) {
  const key = KeyValue.getTableSchema().name
  return  JSON.parse(localStorage.getItem(key) as string)
}

function executeDelete(KeyValue: Model) {
  const key = KeyValue.getTableSchema().name
  localStorage.removeItem(key)
}


class BeastORMKeyValueStore{

  registerKeyValueStore = (register:IRegisterKeyValueStore) => {
    // generate schema
    const schema = schemaGenerator.generate(register as any)
    addRunTimeMethod.addGeneratedTableSchemaToModel(schema, register as any);

    for(const model of  register.models) {

      (model as any)["GET"] = (a: Model) => executeSelect(a)
      (model as any)["DELETE"] = (a: Model) => { executeDelete(a) }
      (model as any)["UPDATE"] = (a: any, b: Model) => executeUpdate(a, b)

      model.clearComponent();
    }
  }

  executeUpdate(dataToSave: any, model: Model) {
    model.UPDATE(dataToSave, model)
  }

  executeSelect(model:Model) {
    return model.GET(model)
  }

  executeDelete(model: Model) {
    model.DELETE(model)
  }

}

export const beastORMKeyValueStore = new BeastORMKeyValueStore()
