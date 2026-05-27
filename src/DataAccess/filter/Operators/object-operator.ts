import { ITableSchema } from '@/BusinessLayer/_interface/interface.type.js';
import * as operatorsObject from './operators.js'

export const OperatorsKeysArray = [
    'gt', 
    'gte',
    'lt',
    'lte',
    'not',
    'eq',
    'contains',
    'len',
    'hasKey',
    'ForeignKey',
    'containedBy',
    'overlap',
    'isNull',
    'contained_by',
	'has_key',
	'has_keys',
	'has_any_keys',
	'len',
	'overlap',
	'iexact'
] as const; // TS3.4 syntax
export type OperatorKeys = typeof OperatorsKeysArray[number];

interface payload {
	fieldName: string,
	arg: any,
	row: any,
	fieldPath: string,
	customData: any
	TableSchema: ITableSchema, 
	element: string,
}

export const operator = {
	gt:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.gt.validate({fieldName, arg,  row, fieldPath, customData})
	},
	gte:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.gte.validate({fieldName, arg,  row, fieldPath, customData})
	},
	lt:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.lt.validate({fieldName, arg,  row, fieldPath, customData})
	},
	lte:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.lte.validate({fieldName, arg,  row , fieldPath})
	},
	not:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.not.validate({fieldName, arg,  row , fieldPath})
	},
	eq:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.eq.validate({fieldName, arg,  row, fieldPath, customData})
	},
	contains:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.contains.validate({fieldName, arg,  row, fieldPath, customData})
	},
	len({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.len.validate({fieldName, arg,  row, fieldPath, customData})
	},
	hasKey({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.hasKey.validate({fieldName, arg,  row, fieldPath, customData})
	},
	containedBy({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.containedBy.validate({fieldName, arg,  row, fieldPath, customData})
	},
	overlap({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.overlap.validate({fieldName, arg,  row, fieldPath, customData})
	},
	isNull({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.isNull.validate({fieldName, arg,  row, fieldPath, customData})
	},
	iexact({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.iexact.validate({fieldName, arg,  row, fieldPath, customData})
	}
}


export const ObjOperatorOverwrite = Object.assign({...operator}, {
	isNull({fieldName, arg, row, fieldPath, customData}: payload) {
		return operatorsObject.objectIsnull.validate({fieldName, arg,  row, fieldPath, customData})
	},
	eq:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.objectEq.validate({fieldName, arg,  row, fieldPath, customData})
	},
	contains: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.objectContains.validate({fieldName, arg,  row, fieldPath, customData})
	},
	contained_by: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.objectContains_by.validate({fieldName, arg,  row, fieldPath, customData})
	},
	has_key({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.objectHasKey.validate({fieldName, arg,  row, fieldPath, customData})
	},
	has_keys({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.objectHasKeys.validate({fieldName, arg,  row, fieldPath, customData})
	},
	has_any_keys({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.objectHasnyKeys.validate({fieldName, arg,  row, fieldPath, customData})
	}
})


export const ArrOperatorOverwrite = Object.assign({...operator}, {
	isNull({fieldName, arg,  row, fieldPath, customData}: payload) {
		return operatorsObject.objectIsnull.validate({fieldName, arg,  row, fieldPath, customData})
	},
	eq:({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.ArrayFieldEq.validate({fieldName, arg,  row, fieldPath, customData})
	},
	contains: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.ArrayFieldContains.validate({fieldName, arg,  row, fieldPath, customData})
	},
	contained_by: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.ArrayFieldContains_by.validate({fieldName, arg,  row, fieldPath, customData})
	},
	len: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.ArrayFieldContains_len.validate({fieldName, arg,  row, fieldPath, customData})
	},
	overlap: ({fieldName, arg,  row, fieldPath, customData}: payload) => {
		return operatorsObject.ArrayFieldContains_overlap.validate({fieldName, arg,  row, fieldPath, customData})
	}
})