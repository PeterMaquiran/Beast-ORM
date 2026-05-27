import { ITableSchema } from "../../../BusinessLayer/_interface/interface.type.js";
import { AttributesMap, FieldAttributesKeys, FieldKeys, FieldsMap } from "../../../BusinessLayer/fields/fields.type.js";
import { FieldSchema } from "../../DataSource/indexeDB/indexeDB/resource/type.js";
import { OperatorKeys, OperatorsKeysArray, operator, ObjOperatorOverwrite, ArrOperatorOverwrite } from "./object-operator.js";
import { info } from "./operators.js";

export interface Field {
    fieldName: string,
    fieldPath: string,
    operation: OperatorKeys,
    operationArg?: string
    operator: Function
    fieldClassName: FieldKeys,
    customData?: Function
}

export interface value  {
    fieldName: string,
    fieldPath: string,
    operation: any,
    operationArg: any,
    operator: Function,
    fieldClassName: any,
    customData?: Function
}

export class argsAttributes {

    value: Array<FieldsMap<string, Field>>  = []
    schemeFields: AttributesMap<string, FieldSchema> = {} = {}

    constructor(args: any, private TableSchema:ITableSchema) {

        for( const field of this.TableSchema.fields) {
			this.schemeFields[field.name] = field
		}

		this.schemeFields[this.TableSchema.id.keyPath] = {
			keyPath: this.TableSchema.id.keyPath,
			name: this.TableSchema.id.keyPath,
			className: 'IntegerField',
		}

        if(args.constructor.name != 'Array') {
            args = [ args ]
        }

        const conditions = this.argsPrettyTransform(args)
        this.value = this.analyzeArgs(conditions)

    }


    private analyzeArgs(conditions: any[]): Array<FieldsMap<string, Field>> {

        return conditions.map((condition:object) => {

            const newObject: AttributesMap<FieldAttributesKeys, string[]> = {}

            const keys = Object.keys(condition)
            for(let field of keys) {
                let fieldName;
                let fieldPath;
                let arg;

                const element = field.split('__')


                if(element.length == 1) {
                    element.push('eq')
                }

                let  operation: any = element[element.length - 1]


                if(OperatorsKeysArray.includes(operation)) {
                  operation = element.pop()
                } else {
                  operation = 'eq'
                }



                fieldName = element[0]
                fieldPath = element.join('.')

                if(OperatorsKeysArray.includes(operation)) {
                    arg = (condition as any)[field];
                } else {
                    throw('operator')
                }

                const fieldClassName = this.detectClassName(fieldName) as FieldKeys

                (newObject as any)[field] = {
                    fieldName: fieldName,
                    fieldPath: fieldPath,
                    operation: operation,
                    operationArg: arg,
                    operator: this.detectOperator(fieldClassName, operation, fieldName),
                    fieldClassName: fieldClassName,
                }

                if(fieldClassName == 'indexedDBArrayField' || fieldClassName == 'indexedDBJsonField') {
                    (newObject as any)[field]['customData']  = info.run
                } else {
                    (newObject as any)[field]['customData']  = () => {}
                }

            }

            return newObject

        }) as any
    }

    private detectClassName(fieldName: string) {
        return this.schemeFields[fieldName]?.className
    }

    private detectOperator(fieldClassName: FieldKeys, operation: OperatorKeys, fieldName: string) {
        try {
            if(fieldClassName == 'indexedDBJsonField') {
                return (ObjOperatorOverwrite as any)[operation]
            }
            else if(fieldClassName == 'indexedDBArrayField') {
                return (ArrOperatorOverwrite as any)[operation]
            }
            else {
                return (operator as any)[operation]
            }
        } catch (err) {
            throw('Field '+ fieldName +' does not exit on the table'+ err)
        }
    }

    private argsPrettyTransform(args: any) {
        const conditions: any[] = []

        const loop =  (o: any) => {
            // https://stackoverflow.com/a/38597076/14115342
            const condition: any = {}

            for( const k of Object.keys(o)) {
                if ( o[k].constructor.name === 'Array') {
                    loop(o[k]);
                } else {
                    if ( o.constructor.name === 'Array') {
                        for( const j of Object.keys(o[k])) {
                            condition[j] = o[k][j]
                        }

                    } else {
                        condition[k] = o[k]
                    }

                }
            }

            if(JSON.stringify(condition) !== '{}') {
                conditions.push(condition)
            }

        }
        loop(args)

        return conditions;
    }
}
