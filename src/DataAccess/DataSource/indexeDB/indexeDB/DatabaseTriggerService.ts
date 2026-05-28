import { uniqueGenerator } from "../../../../Utility/utils.js"
import { IReturnObject, IReturnTriggerObject } from "../../../DriverAdapters/DriverAdapter.type"

interface Trigger {
  callback: Function
}

export class DatabaseTriggerService {

  preCreate: {[eventName:string]: {[tableName:string]: {[key:string]: Trigger[]} }} = {}
  postCreate: {[eventName:string]: {[tableName:string]: {[key:string]: Trigger[]} }} = {}
  onCompleteReadTransaction: {[eventName:string]: {[tableName:string]: {[key:string]: Trigger[]} }} = {}

  subscribe(eventName: string, ModelName: string, callback: IReturnTriggerObject ) {
    if(!(this as any)[eventName]) {
      (this as any)[eventName] = {}
    }
    if(!(this as any)[eventName][ModelName]) {
      (this as any)[eventName][ModelName] = []
    }

    const subscriptionId = uniqueGenerator() as string
    (this as any)[eventName][ModelName][subscriptionId] = {...callback}
    callback.onsuccess({subscriptionId})
  }

  unsubscribe(eventName: string, ModelName: string,subscriptionId: any, callback: IReturnTriggerObject ) {
    delete (this as any)[eventName][ModelName][subscriptionId]
  }


  executeTriggers(eventName: string, ModelName: string) {
    if ((this as any)[eventName][ModelName]) {
      for (const [subscriptionId, value] of Object.entries( (this as any)[eventName][ModelName]|| {})) {
        (value as any).stream({subscriptionId})
      }
    }
  }
}
