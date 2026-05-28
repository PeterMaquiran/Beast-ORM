import { QueryBuilder } from '../../Presentation/queryBuilder/queryBuilder.js'
import { IDatabaseStrategy } from "../../DataAccess/DriverAdapters/DriverAdapter.type.js"
import { Either, error, ok} from '../../Utility/Either/index.js'
import { ITableSchema } from '../_interface/interface.type.js'
import { RuntimeMethods as RM } from '../modelManager/runtimeMethods/runTimeMethods.js';
import { ConstraintError, TransactionAbortion } from '../../DataAccess/_interface/interface.type.js';

class QueryBuilderInsertHandler {
  async INSERTOne<T>(DatabaseStrategy: IDatabaseStrategy, QueryBuilder: QueryBuilder, arrayOfDataBackup: Object[]): Promise<Either<T,TransactionAbortion>> {

    const dataToInsert = QueryBuilder.query.values
    const tableName = QueryBuilder.query.table
    const model = QueryBuilder.model
    const schema: ITableSchema = model[RM.getTableSchema]()
    const idFieldName = schema.id.keyPath;


    return await new Promise((resolve, reject) => {
      DatabaseStrategy.insert({table:tableName, rows:dataToInsert})({
        onsuccess:(data: any) => {
          const id = data.data;
          const index: number = data.index;

          (arrayOfDataBackup[index as any] as any)[idFieldName as string] =  id

          const newInstanceOfModel = new model()

          Object.assign(newInstanceOfModel, arrayOfDataBackup[index])

          resolve(ok(newInstanceOfModel as any))
        },
        onerror:(_error: any) => {
          const errorCause = new ConstraintError({message: _error})
          const errorFamily = new TransactionAbortion()

          errorFamily.setCause(errorCause)
          resolve(error(errorFamily))
        },
        done:() => {
          // console.log("done")
        }
      })
    })

  }


  async INSERTMany<T>(DatabaseStrategy: IDatabaseStrategy, QueryBuilder: QueryBuilder,  arrayOfDataBackup: Object[]): Promise<Either<T,TransactionAbortion>> {

    const dataToInsert = QueryBuilder.query.values
    const result: any[] = []
    const tableName = QueryBuilder.query.table
    const model = QueryBuilder.model
    const schema: ITableSchema = model[RM.getTableSchema]()
    const idFieldName = schema.id.keyPath;

    return await new Promise((resolve, reject) => {
      DatabaseStrategy.insertMany({table:tableName, rows:dataToInsert})({
        onsuccess:(data: any) => {
          const id = data.data;
          const index: number = data.index;
          (arrayOfDataBackup[index as any] as any)[idFieldName as string] =  id

          const newInstanceOfModel = new model()
          Object.assign(newInstanceOfModel, arrayOfDataBackup[index])
          result.push(newInstanceOfModel)
        },
        onerror:(_error: any) => {
          const errorCause = new ConstraintError({message: _error})
          const errorFamily = new TransactionAbortion()

          errorFamily.setCause(errorCause)
          resolve(error(errorFamily))
        },
        done:() => {
          resolve(ok(result as any))
        }
      })
    })

  }

}

export const queryBuilderInsertHandler = new QueryBuilderInsertHandler()
