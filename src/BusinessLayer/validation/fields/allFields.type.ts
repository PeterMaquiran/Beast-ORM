
import { Model } from "../../../Presentation/Api.js"
import { Either, error , ok } from "../../../Utility/Either/index.js"
import { InvalidType, InvalidValue } from "../../error/class/validation.js"
import { FieldKeys } from "../../fields/fields.type"


class emptyError extends Error{}
class maxLengthError extends Error{}
class minLengthError extends Error{}
class UniqueField {}
export class sizeError extends Error{}


export class field {
	fieldName: FieldKeys = null as any
	primaryKey?: boolean
	maxLength?:number | undefined
	minLength?:number | undefined
	choices?: any[] | undefined
	type: number = 0
	blank: boolean = false
	default?: any
	unique: boolean = false
	foreignKey?: boolean
	model?: typeof Model<any>

  constructor() {
    if(this.unique == false) {
      (this.unique as any) = undefined
    }
  }


  isNull(value: any) {

		if(value == undefined) {
			return true
		} else if(value == null) {
			return true
		} else if(value == '' && !Array.isArray(value)) {
			return true
		}

		return false
	}

	rules(field: field, value: any): EitherResultRule {


    if(value == null || value == undefined) {
      return error(new emptyError())
    }

		if(field?.maxLength) {
			if(value.toString().length > field.maxLength) {
				return error(new maxLengthError())
			}

		}
		if(field?.minLength) {
			if(value.toString().length < field.minLength) {
				return error(new minLengthError())
			}
		}

		if(field?.foreignKey) {

		}

		return ok(true)
	}

  valid(e:any): Either<true, FormValidationError> {
    return " " as any
  }
}

type EitherResultRule = Either<true, maxLengthError | minLengthError>

export type FormValidationError =  InvalidType | InvalidValue | maxLengthError | minLengthError | UniqueField
export type EitherFormValidationError =  Either<true, FormValidationError>
