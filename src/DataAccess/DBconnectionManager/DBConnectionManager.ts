import { IDatabaseSchema } from "../../BusinessLayer/_interface/interface.type.js";
import { DriverAdapter, AdapterFactory } from "../DriverAdapters/DriverAdapter.js";
import { IDatabaseStrategy } from "../DriverAdapters/DriverAdapter.type.js";
export class DBConnectionManager {

  driverAdapter!:DriverAdapter
  constructor(DatabaseSchema: IDatabaseSchema) {

    const strategy = AdapterFactory(DatabaseSchema.databaseName)
    this.driverAdapter = new DriverAdapter(strategy as any)
  }
}
