import { IDatabaseStrategy, IMigrations, IReturnObject, IReturnTriggerObject, ITriggerParam } from "./DriverAdapter.type.js";
import { IndexedDBStrategy } from '../DataSource/indexeDB/DriverAdapters/DriverAdapterIndexedDB.js'

 // Context that uses the strategy pattern
export class DriverAdapter implements IDatabaseStrategy{
  strategy: IDatabaseStrategy
  constructor(strategy: IDatabaseStrategy) {
    this.strategy = strategy;
  }
  addTrigger(data: ITriggerParam): (returnObject: IReturnTriggerObject) => void {
    throw new Error("Method not implemented.");
  }
  RemoveTrigger(data: ITriggerParam): (returnObject: IReturnObject) => void {
    throw new Error("Method not implemented.");
  }

  insertMany(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.insertMany(data)
  }
  deleteMany(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.deleteMany(data)
  }
  selectMany(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.selectMany(data)
  }
  updateMany(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.updateMany(data)
  }
  update(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.update(data)
  }
  delete(data: any): (returnObject: IReturnObject) => void {
    return this.strategy.delete(data)
  }
  prepare(migrate: IMigrations) {
    return this.strategy.prepare(migrate)
  }
  migrate(migration: IMigrations) {
    return this.strategy.migrate(migration)
  }

  insert(data: any) {
    return this.strategy.insert(data);
  }

  select(data: any) {
    return this.strategy.select(data);
  }
}




let Strategy = IndexedDBStrategy

export function setStrategy(strategy:any) {
  Strategy = strategy as any
}

export function AdapterFactory (databaseName: string) {
  return new Strategy(databaseName)
}
