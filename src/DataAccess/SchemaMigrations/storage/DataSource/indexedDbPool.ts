
class indexedDBFIFO {
  dbName
  db: IDBDatabase = null as any
  transactionQueue = []
  isTransactionInProgress = false
  txInstance: IDBTransaction = null as any


  constructor(dbName: string) {
    this.dbName = dbName
  }

  async openDatabase() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
      } else {

        let request = indexedDB.open(this.dbName, 2);

        request.onsuccess = () => {
          this.db = request.result;
          this.txInstance =  this.db.transaction(["database"], "readwrite")
          resolve(this.db);
        };
        request.onupgradeneeded =  (event: any)  => {

          let db = event.target.result;

          db.createObjectStore("database", { keyPath: "MyID", autoIncrement: true });
          db.close()
          resolve(this.openDatabase());
        };

        request.onerror = (error) => {
          reject(error);
        };

      }
    });
  }

  pending = 0
  async processTransactionQueue() {

    if (this.isTransactionInProgress) {
      return;
    }

    this.db = await this.openDatabase() as IDBDatabase


    let loop = () => {
      if (this.transactionQueue.length > 0) {
        this.isTransactionInProgress = true;
        let nextTransaction = this.transactionQueue.shift();
        // console.log({nextTransaction})
        this.pending++
        this.executeTransaction(nextTransaction)
          .then(() => {})
          .catch((error) => {
            console.log(error)
          }).finally(()=> {
            this.pending--
            loop()
          })

      } else {
        this.isTransactionInProgress = false;
        // console.log("end processTransactionQueue")
       // console.log({transactionQueue: this.transactionQueue})

        if(this.db) {
          if(this.pending == 0) {

            (this.txInstance )?.commit();
            this.db.close()
            this.db = null as any
            this.txInstance = null as any
          }
        }
      }
    }

    loop()

  }

  async executeTransaction(transaction: any) {
    return new Promise((resolve, reject) => {
      let objectStore = transaction.storeName;
      let mode = transaction.mode;
      let operation = transaction.operation;

      let request = (this.txInstance.objectStore("database") as any)[operation](transaction.data);

      // console.log({operation, transaction:transaction.data})

      request.onsuccess = () => {
        resolve(request.result);
        transaction.callback(request.result)
        // console.log({request: request.result})
      };

      request.onerror = (error: any) => {
        reject(error);
      };
    });
  }

  async enqueueTransaction({storeName, mode, operation, data, callback}: {storeName: string, mode: string, operation: string, data: any, callback: any}) {
    let transaction: any = { storeName, mode, operation, data, callback };

    this.transactionQueue.push(transaction as never);

    if (!this.isTransactionInProgress) {
      this.processTransactionQueue();
      // console.log("start processTransactionQueue", data)
    }
  }

  async insert(storeName: string, data: any, callback: any) {
    // console.log("this.enqueueTransaction")
    return this.enqueueTransaction({storeName, mode:'readwrite', operation:'add', data:data, callback});
  }

  async get(storeName: string, key: any, callback: any) {
    return this.enqueueTransaction({storeName, mode:'readwrite', operation:'get', data:key, callback});
  }

  async getAll(storeName: string, callback: any) {
    return this.enqueueTransaction({storeName, mode:'readonly', operation:'getAll', callback, data:null});
  }
}


const db = new indexedDBFIFO("Migrations")
export class MigrationsModel {

  databaseName: string = ''
  databaseVersion: number = 0
  migrations: any[] = []

  constructor(data = {}){
    Object.assign(this, data)
  }

  DB() { return MigrationsModel.DB() }
  static DB() { return db }

  static async insert(data: any) {
    return new Promise((resolve)=> {
      // console.log(" this.DB().insert")
      this.DB().insert("objectStore", data, (data: any) => {
        resolve(data)
      })
    })
  }


  async save() {
    return new Promise((resolve)=> {
      this.DB().insert("objectStore", this, (data: any) => {
        resolve(data)
      })
    })
  }

  static async get(key: any) {
    return new Promise((resolve) => {
      this.DB().get("objectStore", key, (data: any) => {
        resolve(data)
      })
    })
  }

  static getAll(): Promise<any[]> {
    return new Promise((resolve)=> {
      this.DB().getAll("objectStore", (data: any) => {
        resolve(data)
      })
    })
  }
}
