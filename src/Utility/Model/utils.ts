import { ITableSchema } from "../../BusinessLayer/_interface/interface.type"
import { Model } from "../../Presentation/Api.js"

export function argHasId(TableSchema: ITableSchema, args:Object): Boolean {
  const idFieldName = TableSchema.id.keyPath
  return (args as any)[idFieldName] as boolean
}


export function getArgId(TableSchema: ITableSchema, args:Object): Boolean {
  const idFieldName = TableSchema.id.keyPath
  return (args as any)[idFieldName] as boolean
}

export function getArgIdWithT(model: typeof Model<any> |  Model<any>, args:Object): string | number {

  const _model = model.getModel()
  const TableSchema: ITableSchema = _model.getTableSchema()
  const idFieldName = TableSchema.id.keyPath


  return (args as any)[idFieldName] as string | number
}


export function getIdObjectWithT(model: typeof Model<any> |  Model<any>, args:Object): Object {
  const _model = model.getModel()
  const TableSchema: ITableSchema = _model.getTableSchema()
  const idFieldName = TableSchema.id.keyPath

  const filter: any = {};
  (filter as any)[idFieldName] = (args as any)[idFieldName]; 

  return filter
}

export function equalModels (a: typeof Model<any>, b: typeof Model<any>) {
  return a.getTableSchema().name == b.getTableSchema().name
}
