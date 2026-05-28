import { IQuery  } from "../_interface/Apresentation/queryBuilder"
export class ItemNotFound {

  //queryId: string
  type: string
  table: string
  where: any[]
  limit: number

  constructor(IQuery: IQuery) {
    this.type = IQuery.type
    this.table = IQuery.table
    this.where = IQuery.where
    this.limit = IQuery.limit
    //this.queryId = IQuery.id
  }

}

export class UniqueField {

  message = "Unique field are not nullable in indexedDB"
  //queryId: string
  data: string = ''
  table: string
  where: any[]
  limit: number

  constructor(IQuery: IQuery) {
    this.table = IQuery.table
    this.where = IQuery.where
    this.limit = IQuery.limit
    //this.queryId = IQuery.id
  }

}


export class BulkDataUniqueFieldError {

  table = ""
  rows = []
  data = []
  index: number = 0
  message = ""

  constructor({table, rows, data, index}: {table: string, rows: any[], data: any[], index: number}) {
    this.table = table
    this.rows = rows as never[]
    this.data = data as never[]
    this.index = index
  }

  printMessage() {
    this.message = "No unique value passed"
  }

}