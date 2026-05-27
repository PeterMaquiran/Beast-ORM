import { IndexedDBStrategy } from "../DriverAdapterIndexedDB.js";

let Strategy: IndexedDBStrategy

function sendMessage(data: any) {
  postMessage(data)
}

function generateCallbacks(UUID: any) {
  return  {
    onsuccess:(data: any) => { sendMessage({callbackName: 'onsuccess',UUID, data})  } ,
    onerror:(data: any) => { sendMessage({callbackName: 'onerror',UUID, data}) } ,
    notFound:(data: any) => { sendMessage ({callbackName: 'notFound',UUID, data})},
    done:(data: any) => { sendMessage ({callbackName: 'done',UUID, data}) } ,
    stream:(data: any) => { sendMessage ({callbackName: 'stream',UUID, data}) }
  }
}

let onmessageHandler = (oEvent: any) => {}

function onmessageHandlerFirstMessage(oEvent: any) {

  const { databaseName } = oEvent.data

  Strategy = new IndexedDBStrategy(databaseName)

  onmessageHandler = mainOnmessageHandler
}

function mainOnmessageHandler(oEvent: any) {
  const { UUID, methodName, data } = oEvent.data
  const callbacks = generateCallbacks(UUID) as any

  (Strategy as any)[methodName](data)(callbacks)
}

onmessageHandler = onmessageHandlerFirstMessage

onmessage = async (oEvent) => {
  onmessageHandler(oEvent)
};
