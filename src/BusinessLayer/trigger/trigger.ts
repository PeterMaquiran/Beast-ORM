import { uniqueGenerator } from "../../Utility/utils.js";

interface Trigger {
  callback: Function
}

enum DBEvents {
  onCompleteReadTransaction = 1,
  onCompleteWrite = 2,
}

export interface IListeningToSubscriptionReturn {
  dispatchUID: number;
  disconnect: () => void;
}

export class TriggerManager {

  subscription: {[eventName: string]: {[subscriptionId: string]: {[dispatchUID: string]: boolean}}} = {}

  callbacks: {[key: string]: Function} = {}

  constructor() {}

  createShareSubscription(eventName: string, subscriptionIdFromDataLayer: string) {
    if(!this.subscription[eventName][subscriptionIdFromDataLayer]) {
      this.subscription[eventName][subscriptionIdFromDataLayer] = {}
    }
  }

  registerTrigger(eventName: string) {
    if (!this.subscription[eventName]) {
      this.subscription[eventName] = {};
    }
  }

  associateDispatchUIDToTrigger(eventName: string, dispatchUID: string, subscriptionIdFromDataLayer: string) {
    this.subscription[eventName][subscriptionIdFromDataLayer][dispatchUID] = true
  }

  hasSubscription(eventName: string) {
    return Object.keys(this.subscription?.[eventName] || {})?.length >= 1
  }

  findTriggerToShared(eventName: string) {
    const firstSubscription = Object.keys(this.subscription[eventName])[0]

    return firstSubscription
  }

  findDispatchUID(eventName: string, dispatchUID: string) {
    for(const [subscriptionIdFromDataLayer, value] of Object.entries(this.subscription[eventName])) {
      if(value[dispatchUID]) {
        return {subscriptionIdFromDataLayer, dispatchUID}
      }
    }
  }

  listeningToSubscription(eventName: string, callback: Function, triggerRemove: Function) {

    const id = uniqueGenerator()

    this.callbacks[id] = (callback)

    return {
      dispatchUID: id,
      disconnect:() => {

        const { subscriptionIdFromDataLayer } = this.findDispatchUID(eventName, id) as { subscriptionIdFromDataLayer: string }

        delete this.subscription[eventName][subscriptionIdFromDataLayer][id]

        if(Object.keys( this?.subscription?.[eventName]?.[subscriptionIdFromDataLayer]||{})?.length  == 0) {
          delete this.subscription[eventName][subscriptionIdFromDataLayer]
          triggerRemove()

          if(Object.keys(this.subscription[eventName]|| {}).length == 0) {
            delete this.subscription[eventName]
          }
        }
      }
    }
  }

  executeTriggers(eventName: string, subscriptionIdFromDataLayer: string) {

    try {

      for (const trigger of Object.keys(this.subscription[eventName][subscriptionIdFromDataLayer])) {
        this.callbacks[trigger]()
      }
    } catch (err) {
      console.log(err)
    }
  }
}
