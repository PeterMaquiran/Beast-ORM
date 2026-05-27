import { ITableSchema } from '@/BusinessLayer/_interface/interface.type.js'
import { ObjectConditionOperator } from '../Operators/Object-condition-operator.js'
import { argsAttributes } from '../Operators/args-attributes.js'

export class filter {
  rows = []
	operator : ObjectConditionOperator

	constructor(private arg: argsAttributes, private TableSchema: ITableSchema) {
		this.operator = new ObjectConditionOperator(this.TableSchema, this.arg)
	}

	async cursor(rows: any[]) {
    for (const row of rows ) {
      const operationsResult = await this.operator.run(row)

      if(operationsResult == true) {
        this.rows.push(row as never)
      }
    }

    return this.rows
	}

  async cursorWithLimit(rows: any[], limit: number) {


    for (const row of rows ) {
      const operationsResult = await this.operator.run(row)
      if(operationsResult == true) {
        this.rows.push(row as never)
        if(this.rows.length == limit) {
          // console.log("done===========", this.rows)
          return this.rows
        }
      }
    }

	}

	async run(rows: any[]) {
		const newRows = []

		for(let row of rows) {

			const operationsResult = await this.operator.run(row)

			if(operationsResult == true) {
				newRows.push(row)
			} else {
      }
		}

		return newRows
	}

}

