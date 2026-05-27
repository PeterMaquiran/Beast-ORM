var qe = Object.defineProperty;
var Ee = (r, e, t) => e in r ? qe(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => Ee(r, typeof e != "symbol" ? e + "" : e, t);
var B = /* @__PURE__ */ ((r) => (r[r.AUTO = 0] = "AUTO", r[r.INT = 1] = "INT", r[r.BIGINT = 2] = "BIGINT", r[r.TEXT = 3] = "TEXT", r[r.VARCHAR = 4] = "VARCHAR", r[r.DATE = 5] = "DATE", r[r.BOOL = 6] = "BOOL", r[r.CHAR = 7] = "CHAR", r[r.JSON = 8] = "JSON", r[r.ARRAY = 9] = "ARRAY", r))(B || {});
function f(r) {
  return { isOk: !0, isError: !1, value: r };
}
function D(r) {
  return { isOk: !1, isError: !0, value: null, error: r };
}
class Fe {
}
class Me {
}
class Re extends Error {
}
class Ke extends Error {
}
class Ve extends Error {
}
class me extends Error {
}
class A {
  constructor() {
    o(this, "fieldName", null);
    o(this, "primaryKey");
    o(this, "maxLength");
    o(this, "minLength");
    o(this, "choices");
    o(this, "type", 0);
    o(this, "blank", !1);
    o(this, "default");
    o(this, "unique", !1);
    o(this, "foreignKey");
    o(this, "model");
    this.unique == !1 && (this.unique = void 0);
  }
  isNull(e) {
    return e == null || e == null ? !0 : e == "" && !Array.isArray(e);
  }
  rules(e, t) {
    return t == null || t == null ? D(new Re()) : e != null && e.maxLength && t.toString().length > e.maxLength ? D(new Ke()) : e != null && e.minLength && t.toString().length < e.minLength ? D(new Ve()) : (e != null && e.foreignKey, f(!0));
  }
  valid(e) {
    return " ";
  }
}
function Y(r, e) {
  return typeof e != "string" ? D(new Fe()) : f(!0);
}
function oe(r, e) {
  return typeof e == "bigint" || typeof e == "number" ? f(!0) : D(new Fe());
}
class Le extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = oe(this, e);
    return t.isError ? t : f(!0);
  }
}
class Ue extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = oe(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class _e extends A {
  constructor() {
    super();
  }
  valid(e) {
    return typeof e != "boolean" ? D(new Me()) : f(!0);
  }
}
class Je extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = Y(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class Ge extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = Y(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class He extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = Y(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class Qe extends A {
  constructor() {
    super();
    o(this, "size");
    o(this, "field", null);
  }
  valid(t) {
    if (!Array.isArray(t) && this.blank && this.isNull(t) == !0)
      return f(!0);
    if (this.size && t.length != this.size)
      return D(new me());
    for (const a of t)
      if (!this.field.valid(a))
        return D(new me());
    return f(!0);
  }
}
class We extends A {
  constructor() {
    super();
  }
  valid(e) {
    return !(typeof e == "object" && Array.isArray(e) == !1) && this.blank && e != null ? D(new Me()) : f(!0);
  }
}
class ze extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = Y(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class $e extends A {
  constructor() {
    super();
  }
  valid(e) {
    if (this.blank && (e == null || e == null))
      return f(!0);
    const t = oe(this, e);
    if (t.isError)
      return t;
    const a = this.rules(this, e);
    return a.isError ? a : f(!0);
  }
}
class Xe extends A {
  constructor() {
    super();
  }
  valid(e) {
    const t = this.rules(this, e);
    return t.isError ? t : f(!0);
  }
}
class Ye extends A {
  constructor() {
    super();
  }
  valid(e) {
    const t = this.rules(this, e);
    return t.isError ? t : f(!0);
  }
}
class Ze extends A {
  constructor() {
    super();
  }
  valid(e) {
    const t = this.rules(this, e);
    return t.isError ? t : f(!0);
  }
}
let et = class extends Le {
  constructor(t) {
    super();
    o(this, "fieldName", "AutoField");
    o(this, "unique", !0);
    o(this, "autoIncrement", !0);
    o(this, "blank", !0);
    Object.assign(this, t);
  }
}, tt = class extends Ue {
  constructor(t) {
    super();
    o(this, "fieldName", "BigIntegerField");
    o(this, "type", B.BIGINT);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, at = class extends _e {
  constructor(t) {
    super();
    o(this, "fieldName", "BooleanField");
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, st = class extends Je {
  constructor(t) {
    super();
    o(this, "fieldName", "CharField");
    o(this, "type", B.DATE);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, rt = class extends Ge {
  constructor(t) {
    super();
    o(this, "fieldName", "DateField");
    o(this, "type", B.DATE);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, nt = class extends He {
  constructor(t) {
    super();
    o(this, "fieldName", "DateTimeField");
    o(this, "type", B.DATE);
    Object.assign(this, t);
  }
};
class it extends Qe {
  constructor(t) {
    super();
    o(this, "fieldName", "indexedDBArrayField");
    o(this, "type", B.ARRAY);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}
class ot extends We {
  constructor(t) {
    super();
    o(this, "fieldName", "indexedDBJsonField");
    o(this, "type", B.JSON);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}
let ct = class extends ze {
  constructor(t) {
    super();
    o(this, "fieldName", "TextField");
    o(this, "type", B.TEXT);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, lt = class extends $e {
  constructor(t) {
    super();
    o(this, "fieldName", "IntegerField");
    o(this, "type", B.INT);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
}, ut = class extends Xe {
  constructor(t) {
    super();
    o(this, "fieldName", "ForeignKey");
    o(this, "model", null);
    o(this, "foreignKey", !0);
    o(this, "blank", !1);
    o(this, "I", null);
    Object.assign(this, t);
  }
}, dt = class extends Ye {
  constructor(t) {
    super();
    o(this, "fieldName", "OneToOneField");
    o(this, "foreignKey", !0);
    o(this, "blank", !1);
    o(this, "model", null);
    Object.assign(this, t);
  }
}, ve = class extends Ze {
  constructor(t) {
    super();
    o(this, "fieldName", "ManyToManyField");
    o(this, "model", null);
    o(this, "I", null);
    o(this, "foreignKey", !0);
    o(this, "blank", !1);
    Object.assign(this, t);
  }
};
function R(r, e) {
  const s = r.getModel().getTableSchema().id.keyPath;
  return e[s];
}
function ht(r, e) {
  const s = r.getModel().getTableSchema().id.keyPath, i = {};
  return i[s] = e[s], i;
}
function ge(r, e) {
  return r.getTableSchema().name == e.getTableSchema().name;
}
var T = /* @__PURE__ */ ((r) => (r.getModel = "getModel", r.getTableSchema = "getTableSchema", r.getModelSchema = "getModelSchema", r.validator = "validator", r.Add = "Add", r.All = "All", r))(T || {});
function I(r) {
  const e = () => [r, { isOk: !0, isError: !1, value: r, pass: e }];
  return [
    r,
    {
      isOk: !0,
      isError: !1,
      value: r,
      pass: e
    }
  ];
}
function M(r) {
  const e = () => [null, { isOk: !1, isError: !0, value: null, error: r, pass: e }];
  return [
    null,
    {
      isOk: !1,
      isError: !0,
      value: null,
      error: r,
      pass: e
    }
  ];
}
function ce() {
  return (Math.random() + "uuid" + (/* @__PURE__ */ new Date()).getTime()).slice(2);
}
function J(r) {
  for (var e = 0, t = 0; t < r.length; t++) {
    var a = r.charCodeAt(t);
    e = (e << 5) - e + a, e = e & e;
  }
  return e;
}
function p(r, e) {
  try {
    for (var t = 0, a = e.split("."), s = a.length; t < s; t++)
      r = r[e[t]];
    return r;
  } catch {
    return;
  }
}
function U(r) {
  return r.charAt(0).toUpperCase() + r.substring(1);
}
var K = /* @__PURE__ */ ((r) => (r.onCompleteReadTransaction = "onCompleteReadTransaction", r.onCompleteWrite = "onCompleteWrite", r))(K || {});
class ft {
  constructor() {
    o(this, "subscription", {});
    o(this, "callbacks", {});
  }
  createShareSubscription(e, t) {
    this.subscription[e][t] || (this.subscription[e][t] = {});
  }
  registerTrigger(e) {
    this.subscription[e] || (this.subscription[e] = {});
  }
  associateDispatchUIDToTrigger(e, t, a) {
    this.subscription[e][a][t] = !0;
  }
  hasSubscription(e) {
    var t, a;
    return ((a = Object.keys(((t = this.subscription) == null ? void 0 : t[e]) || {})) == null ? void 0 : a.length) >= 1;
  }
  findTriggerToShared(e) {
    return Object.keys(this.subscription[e])[0];
  }
  findDispatchUID(e, t) {
    for (const [a, s] of Object.entries(this.subscription[e]))
      if (s[t])
        return { subscriptionIdFromDataLayer: a, dispatchUID: t };
  }
  listeningToSubscription(e, t, a) {
    const s = ce();
    return this.callbacks[s] = t, {
      dispatchUID: s,
      disconnect: () => {
        var n, c, l;
        const { subscriptionIdFromDataLayer: i } = this.findDispatchUID(e, s);
        delete this.subscription[e][i][s], ((l = Object.keys(((c = (n = this == null ? void 0 : this.subscription) == null ? void 0 : n[e]) == null ? void 0 : c[i]) || {})) == null ? void 0 : l.length) == 0 && (delete this.subscription[e][i], a(), Object.keys(this.subscription[e] || {}).length == 0 && delete this.subscription[e]);
      }
    };
  }
  executeTriggers(e, t) {
    try {
      for (const a of Object.keys(this.subscription[e][t]))
        this.callbacks[a]();
    } catch (a) {
      console.log(a);
    }
  }
}
class mt {
  constructor(e, t) {
    o(this, "config");
    o(this, "model");
    o(this, "trigger", new ft());
    this.config = e, this.model = t;
  }
  registerTriggerOnCommit() {
    this.trigger.registerTrigger(K.onCompleteReadTransaction);
  }
}
var xe = /* @__PURE__ */ ((r) => (r.IndexedDB = "indexedDB", r.LocalStorage = "localStorage", r))(xe || {});
class gt {
  /**
   * Checks if an object store with the given name already exists in the database.
   * @param db - The IndexedDB database instance.
   * @param name - The name of the object store.
   * @returns `true` if the object store exists, `false` otherwise.
   */
  storeExist(e, t) {
    return e.objectStoreNames.contains(t);
  }
  /**
   * Creates an object store in the database.
   * @param db - The IndexedDB database instance.
   * @param idObject - The ID object for the object store.
   * @param tableName - The name of the object store.
   * @returns The created IDBObjectStore instance.
   */
  createObjectStore(e, t, a) {
    return e.createObjectStore(a, t);
  }
  /**
   * Creates an index (column) in the specified object store.
   * @param objectStore - The IDBObjectStore in which to create the index.
   * @param fieldSchema - The field schema containing index information.
   */
  createColumn(e, t) {
    e.createIndex(t.name, t.keyPath, t.options);
  }
}
const ae = new gt();
class bt {
  openDatabase(e) {
    return new Promise((t, a) => {
      const s = indexedDB || self.indexedDB || self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
      if (s) {
        const i = s.open(e.databaseName, e.version);
        i.onsuccess = () => {
          t(i.result);
        }, i.onerror = (n) => {
          a(n.target.error.name);
        }, i.onupgradeneeded = async (n) => {
          const c = n.target.result;
          await this.runMigrations(c, e), c.onclose = async () => {
            t(await this.openDatabase(e));
          };
        }, i.onblocked = async (n) => {
          a(n.target.error.name);
        };
      } else
        a("IDBDatabase not supported inside webworker");
    });
  }
  migrate(e) {
    return new Promise((t, a) => {
      const s = indexedDB || self.indexedDB || self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
      if (s) {
        const i = s.open(e.databaseName, e.version);
        i.onsuccess = () => {
          t(!1);
        }, i.onerror = (n) => {
          a(n.target.error.name);
        }, i.onupgradeneeded = async (n) => {
          const c = n.target.result;
          await this.runMigrations(c, e), c.close(), t(!0);
        };
      } else
        a("Failed to connect");
    });
  }
  async runMigrations(e, t) {
    for (const a of t.table.concat(t.middleTables))
      if (!ae.storeExist(e, a.name)) {
        const s = ae.createObjectStore(e, a.id, a.name);
        for (const i of a.fields)
          ae.createColumn(s, i);
      }
  }
  closeDatabase(e) {
    e.close();
  }
}
class yt {
  constructor() {
    o(this, "preCreate", {});
    o(this, "postCreate", {});
    o(this, "onCompleteReadTransaction", {});
  }
  subscribe(e, t, a) {
    this[e] || (this[e] = {}), this[e][t] || (this[e][t] = []);
    const s = ce();
    this[e][t][s] = { ...a }, a.onsuccess({ subscriptionId: s });
  }
  unsubscribe(e, t, a, s) {
    delete this[e][t][a];
  }
  executeTriggers(e, t) {
    if (this[e][t])
      for (const [a, s] of Object.entries(this[e][t] || {}))
        s.stream({ subscriptionId: a });
  }
}
var le = /* @__PURE__ */ ((r) => (r[r.Transaction = 0] = "Transaction", r[r.UniquenessField = 1] = "UniquenessField", r))(le || {});
class Tt {
  constructor() {
    o(this, "hasChangeDb", !1);
    o(this, "operationNum", 0);
  }
}
class re extends Error {
  constructor() {
    super();
    o(this, "errorCode", le.Transaction);
    o(this, "cause", null);
  }
  setCause(t) {
    this.cause = t;
  }
}
class ne {
  constructor(e) {
    o(this, "code", le.UniquenessField);
    o(this, "message", "");
    o(this, "name", "");
    Object.assign(this, e);
  }
  tips() {
  }
}
class be {
  constructor(e, t, a) {
    o(this, "schema");
    o(this, "operationQueue", []);
    o(this, "isTransactionInProgress", !1);
    o(this, "db", null);
    o(this, "errorPassive", !1);
    o(this, "finishTransactionCallback", []);
    o(this, "IDBTransaction");
    o(this, "IDBTransactionMode");
    o(this, "dead", !1);
    o(this, "hasWriteTransaction", !1);
    o(this, "dedicateTransaction", !1);
    o(this, "transactionInto");
    this.schema = e, this.dedicateTransaction = t, this.errorPassive = a;
  }
  onDone(e) {
    this.isTransactionInProgress ? this.finishTransactionCallback.push(e) : this.finishTransactionCallback.push(e);
  }
  startExecution() {
    this.createTransaction(), this.processOperationQueue();
  }
  waitToFinish() {
    return new Promise((e, t) => {
      this.isTransactionInProgress == !1 ? e(this.transactionInto) : this.onDone((a) => {
        e(a);
      });
    });
  }
  async enqueueOperation(e) {
    return new Promise((t, a) => {
      e.onDone((s) => {
        t(s);
      }), this.operationQueue.push(e);
    });
  }
  async processOperationQueue() {
    if (this.isTransactionInProgress)
      return;
    this.isTransactionInProgress = !0;
    const e = async () => {
      const t = this.operationQueue.shift();
      if (t)
        try {
          await this.executeOperation(t);
        } catch (a) {
          this.errorPassive ? (this.commitTransaction(), this.createTransaction()) : (console.log(a), this.abortTransaction(new ne(a)), this.runDoneCallBack());
        } finally {
          await e();
        }
    };
    await e(), this.finishWithSuccess();
  }
  finishWithSuccess() {
    this.isTransactionInProgress = !1, this.commitTransaction(), this.closeTransaction(), this.clearVariables(), !this.isTransactionInProgress && this.operationQueue.length >= 1 ? this.processOperationQueue() : this.runDoneCallBack(), this.dead = !0;
  }
  runDoneCallBack() {
    for (const e of this.finishTransactionCallback)
      e(this.transactionInto);
  }
  executeOperation(e) {
    var n;
    const { operation: t, data: a } = e, s = (n = this.IDBTransaction) == null ? void 0 : n.objectStore(this.schema.name);
    let i = null;
    try {
      i = s[t](a);
    } catch (c) {
      console.log(a, "retry", c);
    }
    return e.execute(i);
  }
  abortTransaction(e) {
    var a;
    const t = new re();
    t.cause = e, this.transactionInto = D(t), (a = this.IDBTransaction) == null || a.abort();
  }
  commitTransaction() {
    var t;
    let e = new Tt();
    try {
      (t = this.IDBTransaction) == null || t.commit(), e.hasChangeDb = !0, this.executeTrigger();
    } catch {
      e.hasChangeDb = !1;
    }
    return this.setTransactionInfo(e), e;
  }
  async executeTrigger() {
    O.getDb(this.schema.databaseName).runTrigger(this.schema.name, !0);
  }
  setTransactionInfo(e) {
    this.transactionInto = f(e);
  }
  setTransactionErrorInfo(e) {
    this.transactionInto = D(e);
  }
  clearVariables() {
    this.hasWriteTransaction = !1;
  }
  writeTransactionFlag() {
    this.hasWriteTransaction = !0;
  }
  createTransaction() {
    this.IDBTransaction = this.db.transaction(this.schema.name, "readwrite");
  }
  closeTransaction() {
    delete this.IDBTransaction;
  }
}
class pt {
  constructor(e) {
    o(this, "schema");
    o(this, "isTransactionInProgress", !1);
    o(this, "db", null);
    o(this, "transactions", []);
    o(this, "transactionFinish", (e, t) => {
    });
    o(this, "currentTransaction");
    o(this, "count", 0);
    this.schema = e;
  }
  setDbInstance(e) {
    this.db = e;
  }
  createDedicatedTransaction() {
    this.count++;
    const e = new be(this.schema, !0, !1);
    return e.db = this.db, e;
  }
  addTransaction(e) {
    this.transactions.push(e), this.processTransactionQueue();
  }
  findOrCreateNotDedicatedTransaction() {
    var e;
    if (this.currentTransaction && ((e = this.currentTransaction) == null ? void 0 : e.dedicateTransaction) === !1 && this.currentTransaction.isTransactionInProgress)
      return this.currentTransaction;
    {
      const t = this.transactions.find((a) => a.dedicateTransaction === !1);
      if (t)
        return t;
      {
        this.count++;
        const a = new be(this.schema, !1, !0);
        return a.db = this.db, this.transactions.push(a), a;
      }
    }
  }
  async processTransactionQueue() {
    if (this.isTransactionInProgress)
      return;
    const e = async () => {
      this.isTransactionInProgress = !0;
      const t = this.transactions.shift();
      if (t)
        this.currentTransaction = t, t.startExecution(), await t.waitToFinish(), await e();
      else {
        const a = this.currentTransaction;
        this.currentTransaction = null, this.isTransactionInProgress = !1, this.endProcessTransactionQueue(a);
      }
    };
    await e();
  }
  endProcessTransactionQueue(e) {
    const t = e.transactionInto;
    let a = !1;
    t.isOk && (a = t.value.hasChangeDb), this.transactionFinish(this.schema.name, a);
  }
  hasActiveTransaction() {
    return this.isTransactionInProgress;
  }
}
class wt {
  constructor(e) {
    o(this, "db", null);
    o(this, "transactionQueue", []);
    o(this, "isTransactionInProgress", !1);
    o(this, "connector");
    o(this, "schema");
    o(this, "objectStore", {});
    o(this, "executingTransaction", {});
    o(this, "tigers", new yt());
    o(this, "connect", async () => {
      this.db = await this.connector.openDatabase(this.schema), this.isSchemaHeathy() == !1 && (this.db.close(), this.db.onclose = async () => {
        let e = this.db.version;
        e++;
        const t = this.schema;
        t.version = e, this.db = await this.connector.openDatabase(t);
      });
    });
    o(this, "transactionFinish", (e) => {
      delete this.executingTransaction[e], Object.keys(this.executingTransaction).length == 0 && (this.db = null);
    });
    this.schema = e, this.connector = new bt();
    for (let t of e.table.concat(e.middleTables))
      this.objectStore[t.name] = new pt(t), this.objectStore[t.name].transactionFinish = this.transactionFinish;
  }
  isSchemaHeathy() {
    for (const e of this.schema.table)
      if (!this.db.objectStoreNames.contains(e.name))
        return !1;
    return !0;
  }
  async migrate() {
    await this.connector.migrate(this.schema);
  }
  hasConnectionToDatabase() {
    return this.db != null;
  }
  async executeOnObjectStore(e) {
    this.hasConnectionToDatabase() || await this.connect();
    const t = this.objectStore[e];
    return t.hasActiveTransaction() || t.setDbInstance(this.db), this.executingTransaction[e] = !0, t;
  }
  runTrigger(e, t) {
    this.tigers.executeTriggers(K.onCompleteReadTransaction, e);
  }
  registerTrigger(e, t, a) {
    this.tigers.subscribe(K.onCompleteReadTransaction, e, a);
  }
  UnRegisterTrigger(e, t, a) {
    this.tigers.unsubscribe(K.onCompleteReadTransaction, e, t, a);
  }
}
class Dt {
  constructor() {
    o(this, "databases", {});
  }
  async migrate(e) {
    await this.databases[e.databaseName].migrate();
  }
  async prepare(e) {
    this.databases[e.databaseName] = new wt(e);
  }
  getDb(e) {
    return this.databases[e];
  }
  getTableSchema(e, t) {
    return this.databases[e].objectStore[t].schema;
  }
}
const O = new Dt();
class St {
  constructor(e) {
    o(this, "id", "");
    o(this, "type", "");
    o(this, "table", "");
    o(this, "values", []);
    o(this, "updateValues", {});
    o(this, "where", []);
    o(this, "limit", 0);
    o(this, "hasIndex", !1);
    o(this, "isParamsArray", !1);
    Object.assign(this, e);
  }
  get hasNoCondition() {
    return this.where.length == 0;
  }
  get isInsertOne() {
    return !0;
  }
  get hasLimit() {
    return this.limit >= 1;
  }
}
function G(r) {
  return new St(r);
}
class Nt {
  constructor(e, t) {
    o(this, "row");
    this.TableSchema = e, this.args = t;
  }
  run(e) {
    this.row = e;
    for (const t of this.args.value)
      if (this.execute(t))
        return !0;
    return !1;
  }
  execute(e) {
    var t;
    for (let a in e) {
      const s = e[a], i = s.fieldName, n = s.fieldPath;
      s.operation;
      const c = s.operationArg;
      s.fieldClassName;
      const l = s.operator, u = (t = s.customData) == null ? void 0 : t.call(s, { row: this.row, fieldPath: n });
      if (!l({ fieldName: i, arg: c, row: this.row, TableSchema: this.TableSchema, element: i, fieldPath: n, customData: u }))
        return !1;
    }
    return !0;
  }
}
class Ot {
  constructor(e, t) {
    o(this, "rows", []);
    o(this, "operator");
    this.arg = e, this.TableSchema = t, this.operator = new Nt(this.TableSchema, this.arg);
  }
  async cursor(e) {
    for (const t of e)
      await this.operator.run(t) == !0 && this.rows.push(t);
    return this.rows;
  }
  async cursorWithLimit(e, t) {
    for (const a of e)
      if (await this.operator.run(a) == !0 && (this.rows.push(a), this.rows.length == t))
        return this.rows;
  }
  async run(e) {
    const t = [];
    for (let a of e)
      await this.operator.run(a) == !0 && t.push(a);
    return t;
  }
}
const Ft = {
  filter: Ot
};
class Mt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n > t;
  }
}
class vt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n === t;
  }
}
class xt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n >= t;
  }
}
class It {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n < t;
  }
}
class kt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s }) {
    let i;
    try {
      return i = p(a, s), i <= t;
    } catch {
      return !1;
    }
  }
}
class At {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s }) {
    let i;
    try {
      if (i = p(a, s), i === void 0)
        return !1;
    } catch {
      return !1;
    }
    return i != t;
  }
}
class Pt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n == t;
  }
}
class Bt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n.some((c) => t.includes(c));
  }
}
class Ct {
  static run({ row: e, fieldPath: t }) {
    let a;
    try {
      if (a = p(e, t), a === void 0)
        return {
          present: !1,
          value: void 0
        };
    } catch {
      return {
        present: !1,
        value: void 0
      };
    }
    return {
      present: !0,
      value: void 0
    };
  }
}
class jt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    for (let c of n)
      if (!t.includes(c))
        return !1;
    return !0;
  }
}
class qt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n.some((c) => t.includes(c));
  }
}
class Et {
  static validate({ fieldName: e, arg: t, rowFieldValue: a = [], row: s, fieldPath: i, customData: n }) {
    let c;
    try {
      if (c = p(s, i), c === void 0)
        return !1;
    } catch {
      return !1;
    }
    return c.length == t;
  }
}
class Rt {
  static validate({ fieldName: e, arg: t, rowFieldValue: a = [], row: s, fieldPath: i, customData: n }) {
    let c;
    try {
      if (c = p(s, i), c === void 0)
        return !1;
    } catch {
      return !1;
    }
    const l = Object.keys(t);
    for (let u of l)
      if (!c[u])
        return !1;
  }
}
class Kt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n == null == t;
  }
}
class Ie {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0 && t == !0)
        return !0;
    } catch {
      return t == !0;
    }
    return JSON.stringify(n) == "{}" && t == !1 || n == null && t == !0 ? !0 : n == null;
  }
}
class Vt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return JSON.stringify(
      n = p(a, s)
    ) == "{}" && JSON.stringify(t) == "{}" || t == null && JSON.stringify(n) == "{}" ? !0 : !!(s && t == n);
  }
}
class Lt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    for (const c of Object.keys(t))
      if (n[c]) {
        if (n[c] != t[c])
          return !1;
      } else
        return !1;
    return !0;
  }
}
class Ut {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    const c = Object.keys(t).length;
    let l = 0;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
      for (const u of Object.keys(t))
        n[u] && n[u] == t[u] && l++;
    } catch {
      return !1;
    }
    return l == 0 ? !0 : l == c;
  }
}
class _t {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return !!n[t];
  }
}
class Jt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    const c = Object.keys(n);
    for (const l of t)
      if (!c.includes(l))
        return !1;
    return !0;
  }
}
class Gt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    const c = Object.keys(n);
    for (const l of t)
      if (c.includes(l))
        return !0;
    return !1;
  }
}
class Ht {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return JSON.stringify(n) == "[]" && JSON.stringify(t) == "[]" || t == null && JSON.stringify(n) == "[]" ? !0 : !!(s && t == n);
  }
}
class Qt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    try {
      for (const c of t)
        if (!n.includes(c))
          return !1;
    } catch {
      return !1;
    }
    return !0;
  }
}
class Wt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    try {
      for (const c of n)
        if (!t.includes(c))
          return !1;
    } catch {
      return !1;
    }
    return !0;
  }
}
class zt {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    try {
      for (const c of t)
        if (n.includes(c))
          return !0;
    } catch {
      return !1;
    }
    return !1;
  }
}
class $t {
  static validate({ fieldName: e, arg: t, row: a, fieldPath: s, customData: i }) {
    let n;
    try {
      if (n = p(a, s), n === void 0)
        return !1;
    } catch {
      return !1;
    }
    return n.length == t;
  }
}
const ye = [
  "gt",
  "gte",
  "lt",
  "lte",
  "not",
  "eq",
  "contains",
  "len",
  "hasKey",
  "ForeignKey",
  "containedBy",
  "overlap",
  "isNull",
  "contained_by",
  "has_key",
  "has_keys",
  "has_any_keys",
  "len",
  "overlap",
  "iexact"
], ue = {
  gt: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Mt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  gte: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => xt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  lt: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => It.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  lte: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => kt.validate({ fieldName: r, arg: e, row: t, fieldPath: a }),
  not: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => At.validate({ fieldName: r, arg: e, row: t, fieldPath: a }),
  eq: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Pt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  contains: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Bt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  len({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Et.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  hasKey({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Rt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  containedBy({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return jt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  overlap({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return qt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  isNull({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Kt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  iexact({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return vt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  }
}, Xt = Object.assign({ ...ue }, {
  isNull({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Ie.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  eq: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Vt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  contains: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Lt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  contained_by: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Ut.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  has_key({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return _t.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  has_keys({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Jt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  has_any_keys({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Gt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  }
}), Yt = Object.assign({ ...ue }, {
  isNull({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) {
    return Ie.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s });
  },
  eq: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Ht.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  contains: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Qt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  contained_by: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => Wt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  len: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => $t.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }),
  overlap: ({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s }) => zt.validate({ fieldName: r, arg: e, row: t, fieldPath: a, customData: s })
});
class Zt {
  constructor(e, t) {
    o(this, "value", []);
    o(this, "schemeFields", {});
    this.TableSchema = t;
    for (const s of this.TableSchema.fields)
      this.schemeFields[s.name] = s;
    this.schemeFields[this.TableSchema.id.keyPath] = {
      keyPath: this.TableSchema.id.keyPath,
      name: this.TableSchema.id.keyPath,
      className: "IntegerField"
    }, e.constructor.name != "Array" && (e = [e]);
    const a = this.argsPrettyTransform(e);
    this.value = this.analyzeArgs(a);
  }
  analyzeArgs(e) {
    return e.map((t) => {
      const a = {}, s = Object.keys(t);
      for (let i of s) {
        let n, c, l;
        const u = i.split("__");
        u.length == 1 && u.push("eq");
        let d = u[u.length - 1];
        if (ye.includes(d) ? d = u.pop() : d = "eq", n = u[0], c = u.join("."), ye.includes(d))
          l = t[i];
        else
          throw "operator";
        const h = this.detectClassName(n);
        a[i] = {
          fieldName: n,
          fieldPath: c,
          operation: d,
          operationArg: l,
          operator: this.detectOperator(h, d, n),
          fieldClassName: h
        }, h == "indexedDBArrayField" || h == "indexedDBJsonField" ? a[i].customData = Ct.run : a[i].customData = () => {
        };
      }
      return a;
    });
  }
  detectClassName(e) {
    var t;
    return (t = this.schemeFields[e]) == null ? void 0 : t.className;
  }
  detectOperator(e, t, a) {
    try {
      return e == "indexedDBJsonField" ? Xt[t] : e == "indexedDBArrayField" ? Yt[t] : ue[t];
    } catch (s) {
      throw "Field " + a + " does not exit on the table" + s;
    }
  }
  argsPrettyTransform(e) {
    const t = [], a = (s) => {
      const i = {};
      for (const n of Object.keys(s))
        if (s[n].constructor.name === "Array")
          a(s[n]);
        else if (s.constructor.name === "Array")
          for (const c of Object.keys(s[n]))
            i[c] = s[n][c];
        else
          i[n] = s[n];
      JSON.stringify(i) !== "{}" && t.push(i);
    };
    return a(e), t;
  }
}
class H {
  constructor(e, t) {
    o(this, "limit", 0);
    o(this, "rows", []);
    o(this, "firstMethod");
    o(this, "params", []);
    o(this, "argsAttributes");
    o(this, "QueryReaderSelect");
    this.TableSchema = e;
    const a = t.where, s = "filter";
    this.QueryReaderSelect = t, this.argsAttributes = new Zt(a, e), this.firstMethod = new Ft[s](this.argsAttributes, this.TableSchema);
  }
  async run(e) {
    return this.QueryReaderSelect.hasLimit ? this.firstMethod.cursorWithLimit(e, this.QueryReaderSelect.limit) : this.firstMethod.cursor(e, this.QueryReaderSelect.limit);
  }
}
var V = /* @__PURE__ */ ((r) => (r.getAll = "getAll", r.add = "add", r.put = "put", r.delete = "delete", r.clear = "clear", r))(V || {});
class _ {
  constructor() {
    o(this, "finishOperationCallback", []);
    o(this, "_result");
  }
  onDone(e) {
    this._result ? e(this._result) : this.finishOperationCallback.push(e);
  }
  runDoneCallBack(e) {
    this._result = e;
    for (const t of this.finishOperationCallback)
      t(this._result);
  }
}
class Te extends _ {
  constructor(t) {
    super();
    o(this, "isProcessing", !1);
    o(this, "result", null);
    o(this, "data");
    o(this, "callBacks");
    o(this, "operation", V.add);
    o(this, "index");
    this.data = t.data, this.callBacks = t.callBacks, this.index = t.index, this.proceedData(t);
  }
  proceedData(t) {
    const s = t.ObjectStore.schema.id.keyPath;
    this.data.hasOwnProperty(s) && (this.data[s] == null || this.data[s] == null) && delete this.data[s];
  }
  async execute(t) {
    return this.isProcessing = !0, new Promise(async (a, s) => {
      t.onsuccess = async () => {
        this.isProcessing = !1, this.result = { data: t.result, index: 0 }, a(this.result), this.callBacks.onsuccess(this.result), this.runDoneCallBack(f(this.result));
      }, t.onerror = (i) => {
        this.isProcessing = !1, s(i), this.callBacks.onerror && this.callBacks.onerror(JSON.stringify(i)), this.runDoneCallBack(D(!1));
      };
    });
  }
}
class pe extends _ {
  constructor(t) {
    super();
    o(this, "isProcessing", !1);
    o(this, "result", null);
    o(this, "data");
    o(this, "callBacks");
    o(this, "operation", V.put);
    this.data = t.data, this.callBacks = t.callBacks;
  }
  async execute(t) {
    return this.isProcessing = !0, new Promise(async (a, s) => {
      t.onsuccess = async () => {
        this.isProcessing = !1, this.result = { data: t.result, index: 0 }, a(this.result), this.callBacks.onsuccess(this.result), this.runDoneCallBack(f(this.result));
      }, t.onerror = (i) => {
        this.isProcessing = !1, s(i), this.callBacks.onerror && this.callBacks.onerror(i.target.error), this.runDoneCallBack(D(!1));
      };
    });
  }
}
class we extends _ {
  constructor(t) {
    super();
    o(this, "isProcessing", !1);
    o(this, "result", null);
    o(this, "data");
    o(this, "pk", null);
    o(this, "callBacks");
    o(this, "operation", V.delete);
    this.data = t.pk, this.callBacks = t.callBacks;
  }
  async execute(t) {
    return this.isProcessing = !0, new Promise(async (a, s) => {
      t.onsuccess = async () => {
        this.isProcessing = !1, this.result = { data: t.result, index: 0 }, a(this.result), this.callBacks.onsuccess(this.result), this.runDoneCallBack(f(this.result));
      }, t.onerror = (i) => {
        this.isProcessing = !1, s(i), this.callBacks.onerror && this.callBacks.onerror(i.target.error), this.runDoneCallBack(D(!1));
      };
    });
  }
}
class ea extends _ {
  constructor(t) {
    super();
    o(this, "isProcessing", !1);
    o(this, "result", null);
    o(this, "callBacks");
    o(this, "operation", V.clear);
    o(this, "data");
    this.callBacks = t.callBacks;
  }
  async execute(t) {
    return this.isProcessing = !0, new Promise(async (a, s) => {
      t.onsuccess = async () => {
        this.isProcessing = !1, this.result = { data: t.result, index: 0 }, a(this.result), this.callBacks.onsuccess(this.result), this.runDoneCallBack(f(this.result));
      }, t.onerror = (i) => {
        this.isProcessing = !1, s(i), this.callBacks.onerror && this.callBacks.onerror(i.target.error), this.runDoneCallBack(D(!1));
      };
    });
  }
}
class L extends _ {
  constructor(t) {
    super();
    o(this, "isProcessing", !1);
    o(this, "result", null);
    o(this, "data");
    o(this, "callBacks");
    o(this, "operation", V.getAll);
    this.callBacks = t.callBacks;
  }
  async execute(t) {
    return this.isProcessing = !0, new Promise(async (a, s) => {
      t.onsuccess = async () => {
        this.isProcessing = !1, this.result = { data: t.result, index: 0 }, a(this.result), this.runDoneCallBack(f(this.result));
      }, t.onerror = (i) => {
        this.isProcessing = !1, s(i), this.callBacks.onerror && this.callBacks.onerror(i.target.error), this.runDoneCallBack(D(!1));
      };
    });
  }
}
const De = {
  onsuccess: () => {
  },
  onerror: () => {
  },
  done: () => {
  }
};
class ta {
  constructor(e) {
    o(this, "databaseName");
    o(this, "tableName", "");
    this.databaseName = e;
  }
  addTrigger({ table: e, data: t }) {
    return async (a) => {
      (await O.getDb(this.databaseName)).registerTrigger(e, t, a);
    };
  }
  RemoveTrigger({ table: e, data: t }) {
    return async (a) => {
      (await O.getDb(this.databaseName)).UnRegisterTrigger(e, t, a), a.done();
    };
  }
  openDatabase() {
    return async (e) => {
    };
  }
  delete({ table: e, query: t }) {
    return async (a) => {
      const s = await O.getDb(this.databaseName).executeOnObjectStore(e), i = t.where.shift(), n = Object.values(i)[0], c = s.findOrCreateNotDedicatedTransaction(), l = new we({ callBacks: a, pk: n });
      l.onDone(() => {
        a.done();
      }), c.enqueueOperation(l), c.writeTransactionFlag(), s.processTransactionQueue();
    };
  }
  deleteMany({ table: e, query: t }) {
    return async (a) => {
      const s = await O.getDb(this.databaseName).executeOnObjectStore(e), i = s.findOrCreateNotDedicatedTransaction();
      if (t.where.length == 0) {
        const n = new ea({ callBacks: a });
        i.enqueueOperation(n).finally(() => {
          a.done();
        });
      } else {
        const n = O.getTableSchema(this.databaseName, e), c = new L({ callBacks: De });
        i.enqueueOperation(c).then(async (l) => {
          const u = G(t);
          let d = [];
          if (l.isOk) {
            const h = l.value.data;
            d = await new H(n, u).run(h);
            const b = s.findOrCreateNotDedicatedTransaction();
            for (const m of d) {
              const g = n.id.keyPath, w = m[g], S = new we({ callBacks: De, pk: w });
              b.enqueueOperation(S);
            }
          }
          a.done(d);
        });
      }
      i.writeTransactionFlag(), s.processTransactionQueue();
    };
  }
  insert({ table: e, rows: t }) {
    return async (a) => {
      const s = await O.getDb(this.databaseName).executeOnObjectStore(e), i = s.findOrCreateNotDedicatedTransaction();
      i.writeTransactionFlag();
      let n = 0;
      for (const c of t) {
        const l = new Te({ callBacks: a, data: c, index: n, ObjectStore: s });
        i.enqueueOperation(l);
      }
      s.processTransactionQueue(), i.onDone(() => {
        a.done();
      });
    };
  }
  insertMany({ table: e, rows: t }) {
    return async (a) => {
      const s = await O.getDb(this.databaseName).executeOnObjectStore(e), i = s.createDedicatedTransaction();
      i.writeTransactionFlag();
      let n = 0;
      for (const c of t) {
        const l = new Te({ callBacks: a, data: c, index: n, ObjectStore: s });
        i.enqueueOperation(l);
      }
      i.onDone(() => {
        a.done();
      }), s.addTransaction(i);
    };
  }
  update({ table: e, query: t }) {
    return async (a) => {
      const s = await O.getDb(this.databaseName).executeOnObjectStore(e);
      if (t.hasIndex && t.isParamsArray == !1) {
        const i = t.updateValues, n = new pe({ callBacks: a, data: i });
        n.onDone(() => {
          a.done();
        });
        const c = s.findOrCreateNotDedicatedTransaction();
        c.writeTransactionFlag(), c.enqueueOperation(n), s.processTransactionQueue();
      }
    };
  }
  updateMany({ table: e, query: t }) {
    return async (a) => {
      const s = G(t), i = await O.getDb(this.databaseName).executeOnObjectStore(e), n = i.findOrCreateNotDedicatedTransaction(), c = O.getTableSchema(this.databaseName, e), l = t.updateValues, u = new L({ callBacks: a });
      u.onDone(async (d) => {
        let h = [];
        if (d.isOk) {
          const y = d.value.data;
          h = await new H(c, s).run(y);
          const m = i.findOrCreateNotDedicatedTransaction();
          m.writeTransactionFlag();
          const g = h.map(
            (S) => m.enqueueOperation(
              new pe({ callBacks: a, data: Object.assign(S, l) })
            )
          );
          let w = Promise.all(g);
          i.processTransactionQueue(), await w;
        }
        a.done(h);
      }), n.enqueueOperation(u), i.processTransactionQueue();
    };
  }
  select({ table: e, query: t }) {
    return async (a) => {
      const s = G(t), i = await O.getDb(this.databaseName).executeOnObjectStore(e), n = O.getTableSchema(this.databaseName, e), c = new L({ callBacks: a });
      c.onDone(async (u) => {
        var d;
        if (u.isOk) {
          const h = u.value.data, b = await new H(n, s).run(h);
          b ? a.done(b) : (d = a.notFound) == null || d.call(a);
          return;
        }
      }), i.findOrCreateNotDedicatedTransaction().enqueueOperation(c), i.processTransactionQueue();
    };
  }
  selectMany({ table: e, query: t }) {
    return async (a) => {
      const s = G(t), i = await O.getDb(this.databaseName).executeOnObjectStore(e), n = O.getTableSchema(this.databaseName, e), c = i.findOrCreateNotDedicatedTransaction();
      if (s.hasNoCondition) {
        const l = new L({ callBacks: a });
        l.onDone((u) => {
          u.isOk && a.onsuccess(u.value.data), a.done();
        }), c.enqueueOperation(l);
      } else {
        const l = new L({ callBacks: a });
        l.onDone(async (u) => {
          let d = [];
          if (u.isOk) {
            const h = u.value.data;
            d = await new H(n, s).run(h), a.onsuccess(d), a.done();
          }
        }), c.enqueueOperation(l);
      }
      i.processTransactionQueue();
    };
  }
  migrate(e) {
    return async ({ onerror: t, onsuccess: a }) => {
      O.getDb(e.databaseName).migrate();
    };
  }
  prepare(e) {
    return async ({ onerror: t, onsuccess: a, done: s }) => {
      await O.prepare(e), s();
    };
  }
}
class aa {
  constructor(e) {
    o(this, "strategy");
    this.strategy = e;
  }
  addTrigger(e) {
    throw new Error("Method not implemented.");
  }
  RemoveTrigger(e) {
    throw new Error("Method not implemented.");
  }
  insertMany(e) {
    return this.strategy.insertMany(e);
  }
  deleteMany(e) {
    return this.strategy.deleteMany(e);
  }
  selectMany(e) {
    return this.strategy.selectMany(e);
  }
  updateMany(e) {
    return this.strategy.updateMany(e);
  }
  update(e) {
    return this.strategy.update(e);
  }
  delete(e) {
    return this.strategy.delete(e);
  }
  prepare(e) {
    return this.strategy.prepare(e);
  }
  migrate(e) {
    return this.strategy.migrate(e);
  }
  insert(e) {
    return this.strategy.insert(e);
  }
  select(e) {
    return this.strategy.select(e);
  }
}
let sa = ta;
function ra(r) {
  return new sa(r);
}
class na {
  constructor(e) {
    o(this, "driverAdapter");
    const t = ra(e.databaseName);
    this.driverAdapter = new aa(t);
  }
}
class ia {
  createDBconnectionManager(e) {
    return new na(e);
  }
}
const oa = new ia();
class ca {
  constructor(e, t) {
    o(this, "databaseName");
    o(this, "version");
    o(this, "type", xe.IndexedDB);
    o(this, "tables", {});
    o(this, "DBConnectionManager");
    this.databaseName = e.databaseName, this.version = e.version;
    const a = e.table.concat(e.middleTables);
    for (const s of a) {
      const i = t.find((c) => c.getTableSchema().name == s.name), n = new mt(s, i);
      this.tables[s.name] = n;
    }
    this.establishConnection(e);
  }
  getTable(e) {
    return this.tables[e];
  }
  establishConnection(e) {
    this.DBConnectionManager = oa.createDBconnectionManager(e);
  }
}
class la {
  constructor() {
    o(this, "databases", {});
  }
  register(e, t) {
    const a = new ca(e, t), s = e.databaseName;
    this.databases[s] = a;
  }
  getDatabase(e) {
    return this.databases[e];
  }
}
const C = new la();
class $ {
  getMiddleTable(e, t) {
    const a = e.getTableSchema().databaseName, s = C.getDatabase(a), i = e.getTableSchema().name + t.getTableSchema().name;
    return s.getTable(i).model;
  }
  getMiddleTableName(e, t) {
    return e.getTableSchema().name + t.getTableSchema().name;
  }
  addToMiddleTable(e, t, a, s) {
    const i = t.getTableSchema().name, n = U(e.getModel().getTableSchema().name), c = {};
    return c["iD" + i] = R(t, a), c["iD" + n] = R(e, e), s.create(c);
  }
  async getAll(e, t, a) {
    const s = {}, i = e.getModel().getTableSchema().name, n = t.getTableSchema().name;
    s["iD" + i] = R(e, e);
    const [c] = await a.filter(s).execute(), l = c.map(async (d) => (await d["iD" + n].get(), d["iD" + n])), u = await Promise.all(l);
    return I(u);
  }
  generateRelationShipMethods(e, t, a) {
    const s = [];
    for (let i = 0; i < e.table.length; i++) {
      const n = t.models[i], c = n.getTableSchema().name, l = e.table[i].middleTablePK;
      if (Object.keys(l).length >= 1)
        for (const [d, h] of Object.entries(l)) {
          let y = s.push({
            Model: n,
            func: []
          });
          const b = a.find((k) => {
            if (k.getTableSchema().name == h.tableName)
              return !0;
          }), m = n.getModelSchema()[d].model, g = m.getTableSchema().name, w = U(c), S = function(k) {
            const E = {};
            return E["iD" + g] = R(m, k), E["iD" + w] = R(n, $.prototype), b.create(E);
          };
          s[y - 1].func.push({
            name: d + "Add",
            function: S
          });
          const N = async function() {
            const k = {};
            k["iD" + w] = R(n, $.prototype);
            const [E] = await b.filter(k).execute(), te = E.map(async (fe) => (await fe["iD" + g].get(), fe["iD" + g])), je = await Promise.all(te);
            return I(je);
          };
          s[y - 1].func.push({
            name: d + T.All,
            function: N
          });
        }
    }
    return s;
  }
}
const j = new $(), ua = {
  CharField(r) {
    return null;
  },
  BooleanField(r) {
    return null;
  },
  TextField(r) {
    return null;
  },
  IntegerField(r) {
    return null;
  },
  DateField(r) {
    return null;
  },
  DateTimeField(r) {
    return null;
  },
  BigIntegerField(r) {
    return null;
  },
  AutoField(r) {
    return null;
  },
  indexedDB: {
    fields: {
      JsonField: (r) => null,
      ArrayField: (r) => null
    }
  },
  OneToOneField: (r) => new r.model(),
  ForeignKey(r) {
    return new r.model();
  },
  ManyToManyField(r) {
    let e = [];
    const t = r.model;
    return {
      async add(a) {
        const s = r.I.getModel(), i = j.getMiddleTableName(s, t), { fieldName: n } = s.getTableSchema().middleTableRelatedFields[i];
        return r.I[n + T.Add](a);
      },
      async all() {
        const a = r.I.getModel(), s = j.getMiddleTable(a, t);
        let [i, n] = await j.getAll(r.I, t, s);
        return n.isOk && (e = i), n.pass();
      },
      get list() {
        return e;
      }
    };
  }
}, Z = {
  CharField(r) {
    return new st(r);
  },
  BooleanField(r) {
    return new at(r);
  },
  TextField(r) {
    return new ct(r);
  },
  IntegerField(r) {
    return new lt(r);
  },
  DateField(r) {
    return new rt(r);
  },
  DateTimeField(r) {
    return new nt(r);
  },
  BigIntegerField(r) {
    return new tt(r);
  },
  AutoField(r) {
    return new et(r);
  },
  indexedDB: {
    fields: {
      JsonField: (r) => new ot(r),
      ArrayField: (r) => new it(r)
    }
  },
  OneToOneField: (r) => new dt(r),
  ForeignKey: (r) => new ut(r),
  ManyToManyField: (r) => new ve(r)
};
let v = Z;
function de() {
  v = ua;
}
function he() {
  v = Z;
}
function da(r) {
  return v.CharField(r);
}
function ha(r) {
  return v.BooleanField(r);
}
function fa(r) {
  return v.TextField(r);
}
function ma(r) {
  return v.IntegerField(r);
}
function ga(r) {
  return v.DateField(r);
}
function ba(r) {
  return v.DateTimeField(r);
}
function ya(r) {
  return v.BigIntegerField(r);
}
function Ta(r) {
  return v.AutoField(r);
}
const pa = {
  fields: {
    JsonField: (r) => v.indexedDB.fields.JsonField(r),
    ArrayField: (r) => v.indexedDB.fields.ArrayField(r)
  }
};
function wa(r) {
  return v.OneToOneField(r);
}
function ke(r) {
  return v.ForeignKey(r);
}
function Da(r) {
  return v.ManyToManyField(r);
}
const Ae = {
  ForeignKeyGetter(r) {
    let e = [];
    const t = r.model, a = {
      async add(s) {
        const i = r.I.getModel(), n = t.getModelSchema(), c = t.getTableSchema();
        for (const l of c.fieldTypes.ForeignKey) {
          const u = n[l];
          if (ge(u.model, i)) {
            const d = {};
            return d[l] = r.I, await t.create({ ...s, ...d });
          }
        }
      },
      async all() {
        const s = r.I.getModel(), i = t.getModelSchema(), n = t.getTableSchema();
        for (const c of n.fieldTypes.ForeignKey) {
          const l = i[c];
          if (ge(l.model, s)) {
            const u = ht(r.I, r.I), [d, h] = await l.model.filter(u).execute();
            if (h.isOk)
              return e = d, !0;
            h.pass();
          }
        }
      },
      get list() {
        return e;
      }
    };
    return function() {
      return a;
    };
  },
  ManyToManyGetter(r) {
    let e = [];
    const t = r.model, a = {
      add(s) {
        const i = r.I.getModel(), n = j.getMiddleTable(t, i);
        return j.addToMiddleTable(r.I, t, s, n);
      },
      async all() {
        const s = r.I.getModel(), i = j.getMiddleTable(t, s);
        let [n, c] = await j.getAll(r.I, t, i);
        return c.isOk && (e = n), c.pass();
      },
      get list() {
        return e;
      }
    };
    return function() {
      return a;
    };
  }
}, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoField: Ta,
  BigIntegerField: ya,
  BooleanField: ha,
  CharField: da,
  DateField: ga,
  DateTimeField: ba,
  ForeignKey: ke,
  GustPrototype: de,
  IntegerField: ma,
  ManyToManyField: Da,
  OneToOneField: wa,
  RealPrototype: he,
  TextField: fa,
  _RealPrototype: Z,
  getter: Ae,
  indexedDB: pa
}, Symbol.toStringTag, { value: "Module" }));
var Pe = /* @__PURE__ */ ((r) => (r[r.AUTO = 0] = "AUTO", r[r.INT = 1] = "INT", r[r.BIGINT = 2] = "BIGINT", r[r.TEXT = 3] = "TEXT", r[r.VARCHAR = 4] = "VARCHAR", r[r.DATE = 5] = "DATE", r[r.BOOL = 6] = "BOOL", r[r.CHAR = 7] = "CHAR", r[r.JSON = 8] = "JSON", r[r.ARRAY = 9] = "ARRAY", r))(Pe || {});
const Na = [
  "CharField",
  "JsonField",
  "AutoField",
  "BigIntegerField",
  "DateField",
  "IntegerField",
  "TextField",
  "BooleanField",
  "OneToOneField",
  "ForeignKey",
  "indexedDBJsonField",
  "indexedDBArrayField",
  "DateTimeField",
  "DateField",
  "Unknown"
];
class Se {
  /**
   * Reads the model class representation and extracts information about its fields, field types, attributes, and field names.
   *
   * @param {typeof models.Model} modelClassRepresentation - The class representation of the model.
   * @returns {{
   *   modelName: string,
   *   fields: { [key: string]: any },
   *   fieldTypes: FieldsMap<FieldKeys, string[]>,
   *   attributes: AttributesMap<FieldAttributesKeys, string[]>,
   *   fieldNames: string[],
   * }} - An object containing extracted model information.
   */
  static read(e) {
    he();
    const t = new e();
    de();
    let {
      modelName: a,
      fields: s,
      fieldTypes: i,
      attributes: n,
      fieldNames: c,
      falseField: l
    } = this.initializeDataStructures();
    a = this.getModelName(e);
    for (const [u, d] of Object.entries(t))
      this.processField(t, u, d, i, n, c, s, l);
    if (c.length == 0)
      for (const [u, d] of Object.entries(e))
        this.processField(t, u, d, i, n, c, s, l);
    return {
      modelName: a,
      fields: s,
      fieldTypes: i,
      attributes: n,
      fieldNames: c,
      falseField: l
    };
  }
  /**
   * Reads the model class representation and extracts information about class model name
   *
   * @param {typeof models.Model} modelClassRepresentation - The class representation of the model.
   * @returns {String}  - Model class name
  */
  static getModelName(e) {
    return e.toString().split("(")[0].split(" ")[1];
  }
  /**
   * Initializes data structures for storing model information.
   *
   * @returns {{
   *   modelName: string,
   *   fields: { [key: string]: any },
   *   fieldTypes: FieldsMap<FieldKeys, string[]>,
   *   attributes: AttributesMap<FieldAttributesKeys, string[]>,
   *   fieldNames: string[],
   * }} - An object containing initialized data structures.
   */
  static initializeDataStructures() {
    return {
      modelName: "",
      fields: {},
      fieldTypes: {},
      attributes: {},
      fieldNames: [],
      falseField: []
    };
  }
  /**
   * Processes a field within the model and updates the data structures accordingly.
   *
   * @param {Object} classInstance - An instance of the model class.
   * @param {string} fieldName - The name of the field.
   * @param {any} Field - The field itself.
   * @param {FieldsMap<FieldKeys, string[]>} fieldTypes - A map of field types.
   * @param {AttributesMap<FieldAttributesKeys, string[]>} attributes - A map of attributes.
   * @param {string[]} fieldNames - An array of field names.
   * @param {Object} fields - An object containing field information.
   */
  static processField(e, t, a, s, i, n, c, l) {
    const u = a == null ? void 0 : a.fieldName;
    this.isKnownFieldType(u) ? (n.push(t), c[t] = a, this.addFieldToType(s, u, t), this.processFieldAttributes(a, i, t)) : c[t] = a;
  }
  /**
   * Checks if a field type is known (e.g., part of FieldKeysArray).
   *
   * @param {string} type - The field type to check.
   * @returns {boolean} - True if the field type is known; false otherwise.
   */
  static isKnownFieldType(e) {
    return Na.includes(e);
  }
  /**
   * Adds a field to the specified type in the fieldTypes map.
   *
   * @param {FieldsMap<FieldKeys, string[]>} fieldTypes - A map of field types.
   * @param {string} type - The type to which the field belongs.
   * @param {string} fieldName - The name of the field.
   */
  static addFieldToType(e, t, a) {
    e[t] || (e[t] = []), e[t].push(a);
  }
  /**
   * Processes field attributes and adds the field to the appropriate attribute map.
   *
   * @param {any} Field - The field to process.
   * @param {AttributesMap<FieldAttributesKeys, string[]>} attributes - A map of attributes.
   * @param {string} fieldName - The name of the field.
   */
  static processFieldAttributes(e, t, a) {
    for (const [s, i] of Object.entries(e))
      typeof i != "function" && this.addFieldToAttribute(t, s, a);
  }
  /**
   * Adds a field to the specified attribute in the attributes map.
   *
   * @param {AttributesMap<FieldAttributesKeys, string[]>} attributes - A map of attributes.
   * @param {FieldAttributesKeys} FieldProperty - The attribute to which the field belongs.
   * @param {string} fieldName - The name of the field.
   */
  static addFieldToAttribute(e, t, a) {
    e[t] || (e[t] = []), e[t].push(a);
  }
}
class P {
  constructor({ isParamsArray: e }) {
    /**
     * Create a new QueryBuilder instance.
     */
    o(this, "query", {
      id: ce(),
      type: "",
      table: "",
      values: [],
      updateValues: {},
      where: [],
      limit: 0,
      hasIndex: !1,
      isParamsArray: !1
    });
    o(this, "model", null);
    this.query.isParamsArray = e;
  }
  /**
   * Start building an INSERT query.
   * @param {string} table - The name of the table to insert data into.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  insertInto(e) {
    return this.model = e, this.query.type = "INSERT", this.query.table = this.model.getTableSchema().name, this;
  }
  /**
   * Start building an INSERT query.
   * @param {string} table - The name of the table to insert data into.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  select(e) {
    return this.model = e, this.query.type = "SELECT", this.query.table = this.model.getTableSchema().name, this;
  }
  /**
   * Start building an UPDATE query.
   * @param {string} table - The name of the table to update data in.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  update(e) {
    return this.model = e, this.query.type = "UPDATE", this.query.table = this.model.getTableSchema().name, this;
  }
  /**
   * Start building a DELETE query.
   * @param {string} table - The name of the table to delete data from.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  deleteFrom(e) {
    return this.model = e, this.query.type = "DELETE", this.query.table = this.model.getTableSchema().name, this;
  }
  /**
   * Insert data into the specified table.
   * @param {Array} values - An array of objects to insert into the table.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  insert(e) {
    return this.query.type === "INSERT" && (this.query.values = this.query.values.concat(e)), this;
  }
  /**
   * Set values for an UPDATE query.
   * @param {Object} values - An object representing key-value pairs to update in the table.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  set(e) {
    return this.query.type === "UPDATE" && (this.query.updateValues = { ...this.query.updateValues, ...e }), this;
  }
  /**
   * Add a WHERE condition to the query.
   * @param {string} condition - The WHERE condition to add to the query.
   * @returns {QueryBuilder} The QueryBuilder instance.
   */
  where(e) {
    return this.query.where.push(e), this;
  }
  limit(e) {
    return this.query.limit = e, this;
  }
  hasIndex(e) {
    this.query.hasIndex = e;
  }
  /**
   * Build and return the SQL query string.
   * @returns {string} The SQL query string.
   */
  // build() {
  //   let query = '';
  //   switch (this.query.type) {
  //     case 'INSERT':
  //       if (this.query.values.length > 0) {
  //         const columns = Object.keys(this.query.values[0]);
  //         const valueSets = this.query.values.map(obj => `(${columns.map(col => `'${obj[col]}'`).join(', ')})`);
  //         query = `INSERT INTO ${this.query.table} (${columns.join(', ')}) VALUES ${valueSets.join(', ')}`;
  //       }
  //       break;
  //     case 'UPDATE':
  //       query = `UPDATE ${this.query.table} SET ${Object.entries(this.query.updateValues).map(([key, value]) => `${key} = '${value}'`).join(', ')}`;
  //       if (this.query.where.length > 0) {
  //         query += ` WHERE ${this.query.where.join(' AND ')}`;
  //       }
  //       break;
  //     case 'DELETE':
  //       query = `DELETE FROM ${this.query.table}`;
  //       if (this.query.where.length > 0) {
  //         query += ` WHERE ${this.query.where.join(' AND ')}`;
  //       }
  //       break;
  //     default:
  //       throw new Error('Invalid query type');
  //   }
  //   return query;
  // }
  setCleanData(e) {
    this.query.values = e;
  }
  get hasNoCondition() {
    return this.query.where.length == 0;
  }
}
class Oa {
  getFilteredData(e, t) {
    const a = {};
    for (const s of e.fieldNames)
      s in t ? a[s] = t[s] : a[s] = void 0;
    if (e.fieldTypes.OneToOneField)
      for (const s of e.fieldTypes.OneToOneField) {
        const n = t[s].getPrimaryKeyValue();
        a[s] = n;
      }
    if (e.fieldTypes.ForeignKey)
      for (const s of e.fieldTypes.ForeignKey) {
        const n = t[s].getPrimaryKeyValue();
        a[s] = n;
      }
    if (e.fieldTypes.ManyToManyField)
      for (const s of e.fieldTypes.ManyToManyField) {
        const n = t[s].getPrimaryKeyValue();
        a[s] = n;
      }
    return a;
  }
  getUniqueData(e, t) {
    const a = e.attributes.unique || [];
    a.push(e.id.keyPath);
    const s = {};
    for (const i of a)
      i in t && (s[i] = t[i]);
    if (e.fieldTypes.OneToOneField)
      for (const i of e.fieldTypes.OneToOneField) {
        const c = t[i].getPrimaryKeyValue();
        s[i] = c;
      }
    return s;
  }
  hasField(e) {
    return Object.keys(e).length >= 1;
  }
  getFilteredDataWithId(e, t) {
    const a = {};
    e.fieldNames.push(e.id.keyPath);
    for (const s of e.fieldNames)
      a[s] = t[s];
    for (const s of e.fieldTypes.OneToOneField) {
      const n = t[s].getPrimaryKeyValue();
      a[s] = n;
    }
    for (const s of e.fieldTypes.ForeignKey) {
      const n = t[s].getPrimaryKeyValue();
      a[s] = n;
    }
    return a;
  }
  getFilteredDataOverlay(e, t) {
    const a = {};
    for (const [s, i] of Object.entries(t))
      e.fieldNames.find((c) => c == s) && (a[i] = s);
    return a;
  }
  setDataToInstance() {
  }
}
const x = new Oa();
class Be {
}
/**
 * Static method for creating a database object for advanced queries.
 * @param param0 - An object with query-related configuration.
 * @returns An object with query-related methods.
 */
o(Be, "object", (e, t) => ({
  execute: async () => {
    e.select(t);
    const a = await F.executeSelectQuery(e, t).many();
    return a.isError && console.error(a.error), a.isError ? M(a.error) : I(a.value);
  },
  update: async (a) => {
    let s;
    if (a) {
      const n = t.getTableSchema();
      s = x.getFilteredData(n, a);
    }
    e.update(t).set(s);
    const i = await F.executeUpdateQuery(e, t);
    return i.isError && console.error(i.error), i.isError ? M(i.error) : I(i.value);
  },
  delete: async () => {
    e.deleteFrom(t);
    const a = await F.deleteQueryNoFormValidation(e, t);
    return a.isError ? M(a.error) : I(a.value);
  }
}));
class Fa {
  constructor(e) {
    //queryId: string
    o(this, "type");
    o(this, "table");
    o(this, "where");
    o(this, "limit");
    this.type = e.type, this.table = e.table, this.where = e.where, this.limit = e.limit;
  }
}
class Ne {
  constructor({ table: e, rows: t, data: a, index: s }) {
    o(this, "table", "");
    o(this, "rows", []);
    o(this, "data", []);
    o(this, "index", 0);
    o(this, "message", "");
    this.table = e, this.rows = t, this.data = a, this.index = s;
  }
  printMessage() {
    this.message = "No unique value passed";
  }
}
class Ma {
  same(e, t) {
    return JSON.stringify(e) == JSON.stringify(t);
  }
}
const va = new Ma();
class xa {
  addModelSchema(e) {
    for (const t of e.models) {
      he();
      const a = new t();
      de(), t.getModelSchema = () => a;
    }
  }
  /**
   * Attaches generated table schema to model classes.
   * @param {DatabaseSchema} databaseSchema - The database schema to extract table information from.
   * @param {Object} entries - An object containing model classes.
   */
  addGeneratedTableSchemaToModel(e, t) {
    for (let a = 0; a < t.models.length; a++) {
      const s = e.table[a];
      t.models[a][T.getTableSchema] = () => s, t.models[a].prototype[T.getTableSchema] = () => s;
    }
  }
  attachRelationShipMethods(e) {
    for (const t of e) {
      const a = t.Model;
      for (const s of t.func) {
        const i = s.function, n = s.name;
        a.prototype[n] = i;
      }
    }
  }
  addStaticFunctionFWrap(e, t, a) {
    e[t] = function() {
      return a;
    };
  }
  addFunctionFWrap(e, t, a) {
    e.prototype[t] = function() {
      return a;
    };
  }
  addStaticFunction(e, t, a) {
    ee[t] = a;
  }
}
const q = new xa();
function Ia(r, e) {
  const t = e.getTableSchema().name;
  localStorage.setItem(t, JSON.stringify(r));
}
function ka(r) {
  const e = r.getTableSchema().name;
  return JSON.parse(localStorage.getItem(e));
}
function Aa(r) {
  const e = r.getTableSchema().name;
  localStorage.removeItem(e);
}
class Pa {
  constructor() {
    o(this, "registerKeyValueStore", (e) => {
      const t = Ce.generate(e);
      q.addGeneratedTableSchemaToModel(t, e);
      for (const a of e.models)
        a.GET = (s) => ka(s)(a).DELETE = (i) => {
          Aa(i);
        }, a.UPDATE = (s, i) => Ia(s, i), a.clearComponent();
    });
  }
  executeUpdate(e, t) {
    t.UPDATE(e, t);
  }
  executeSelect(e) {
    return e.GET(e);
  }
  executeDelete(e) {
    e.DELETE(e);
  }
}
const ie = new Pa();
class ee {
  getModel() {
    throw "Register your Model before using the API";
  }
  async save(e) {
    const t = new P({ isParamsArray: !1 }), a = this.getModel(), s = a.getTableSchema();
    if (e) {
      const l = a.getTableSchema(), u = x.getFilteredData(l, e);
      Object.assign(this, u);
    }
    const i = {}, n = s.id.keyPath;
    i[n] = this[n], t.update(a).set(this).where(i).limit(1).hasIndex(!0);
    const c = await F.executeUpdateQuery(t, a);
    return c.isError ? M(c.error) : I(c.value);
  }
  getPrimaryKeyValue() {
    const a = this.getModel().getTableSchema().id.keyPath;
    return this[a];
  }
  setPrimaryKey(e) {
    const s = this.getModel().getTableSchema().id.keyPath;
    this[s] = e;
  }
  // delete one
  async delete() {
    const e = new P({ isParamsArray: !1 }), t = this.getModel(), a = t.getTableSchema(), s = {}, i = a.id.keyPath;
    s[i] = this[i], e.deleteFrom(t).where(s).limit(1).hasIndex(!0);
    const n = await F.deleteQueryNoFormValidation(e, t);
    return n.isError ? M(n.error) : I(n.value);
  }
  async get() {
    const e = new P({ isParamsArray: !1 }), t = this.getModel(), a = t.getTableSchema(), s = x.getUniqueData(a, this);
    e.select(t).where(s).limit(1).hasIndex(!0);
    const i = await F.executeSelectQuery(e, this).one();
    return i.isError ? M(i.error) : (Object.assign(this, i.value), I(i.value));
  }
  static getTableSchema() {
    throw "Register your Model before using the API";
  }
  static getModel() {
    throw "Register your Model before using the API";
  }
  static getModelSchema() {
    throw "Register your Model before using the API";
  }
  static async get(e) {
    const t = new P({ isParamsArray: !1 }), a = this.getModel(), s = a.getTableSchema(), i = x.getUniqueData(s, e);
    t.select(a).where(i).limit(1).hasIndex(!0);
    const n = await F.executeSelectQuery(t, this).one();
    return n.isError ? M(n.error) : I(n.value);
  }
  static async all() {
    const e = this.getModel(), t = new P({ isParamsArray: !1 });
    t.select(e);
    const a = await F.executeSelectQuery(t, this).many();
    return a.isError ? M(a.error) : I(a.value);
  }
  static async deleteAll() {
    const e = new P({ isParamsArray: !0 }), t = this.getModel();
    e.deleteFrom(t);
    const a = await F.deleteQueryNoFormValidation(e, t);
    return a.isError ? M(a.error) : I(a.value);
  }
  static async create(e) {
    const t = !!Array.isArray(e), a = this.getModel(), s = new P({ isParamsArray: t });
    s.insertInto(a).insert(e);
    const i = await F.executeInsertionQuery(s, this);
    return i.isError ? M(i.error) : I(i.value);
  }
  static filter(e) {
    const t = new P({ isParamsArray: !0 }), a = this.getModel();
    return t.where(e), Be.object(t, a);
  }
  static transactionOnCommit(e) {
    return F.registerTrigger(this, e);
  }
  static ReactiveList(e) {
    return F.ReactiveList(this, e);
  }
  static async getOrCreate(e) {
    var b;
    const t = !!Array.isArray(e), a = ((b = e == null ? void 0 : e.constructor) == null ? void 0 : b.name) != "Array" ? [e] : e, s = this.getModel(), i = s.getTableSchema();
    for (const m in a) {
      const g = x.getUniqueData(i, a[m]);
      if (!x.hasField(g))
        return M(new Ne({ data: g, index: m, rows: a, table: i.name }));
    }
    const n = a.map((m) => {
      const g = new P({ isParamsArray: !1 });
      return g.select(s).where(m).limit(1).hasIndex(!0), F.executeSelectQuery(g, this).one();
    }), c = await Promise.all(n);
    let l = [], u = [];
    const d = [];
    for (let m = 0; m < c.length; m++) {
      const g = c[m];
      g.isError ? d.push({ ItemNotFound: g.error, index: m }) : u.push(g.value);
    }
    const h = new P({ isParamsArray: !0 });
    h.insertInto(s);
    for (const { ItemNotFound: m, index: g } of d) {
      const w = a[g], N = x.getFilteredData(i, w);
      h.insert(N);
    }
    const y = await F.executeInsertionQuery(h, this);
    return y.isOk && (l = y.value), y.isError ? M(y.error) : I({
      created: t ? l : l[0],
      found: t ? u : u[0]
    });
  }
  static async updateOrCreate(e) {
    var w;
    const t = !!Array.isArray(e), a = ((w = e == null ? void 0 : e.constructor) == null ? void 0 : w.name) != "Array" ? [e] : e, s = [], i = this.getModel(), n = i.getTableSchema(), c = i[T.validator];
    for (const S in e) {
      e[S] = x.getFilteredData(n, e[S]);
      const N = c(e[S]);
      if (N.isError)
        return M(N);
    }
    for (const S in a) {
      const N = x.getUniqueData(n, a[S]);
      if (s[S] = N, !x.hasField(N))
        return M(new Ne({ data: N, index: S, rows: a, table: n.name }));
    }
    const l = s.map((S) => {
      const N = new P({ isParamsArray: !1 });
      return N.select(i).where(S).limit(1).hasIndex(!0), F.executeSelectQuery(N, this).one();
    }), u = await Promise.all(l);
    let d = [], h = [];
    const y = [];
    let b = 0;
    for (const S of u) {
      if (S.isError)
        y.push({ ItemNotFound: S.error, index: b });
      else {
        const N = S.value;
        va.same(u[b].value, e[b]) || (Object.assign(N, e[b]), await N.save()), h.push(N);
      }
      b++;
    }
    const m = new P({ isParamsArray: !0 });
    m.insertInto(i);
    for (const { ItemNotFound: S, index: N } of y) {
      const k = a[N], te = x.getFilteredData(n, k);
      m.insert(te);
    }
    const g = await F.executeInsertionManyQuery(m, this);
    return g.isOk && (d = g.value), g.isError ? M(g.error) : I({
      created: t ? d : d[0],
      updated: t ? h : h[0]
    });
  }
}
const Ba = function(r) {
  return {
    get(e) {
      return r.get(e);
    },
    all() {
      return r.all();
    },
    deleteAll() {
      return r.deleteAll();
    },
    create(e) {
      return r.create(e);
    },
    filter(e) {
      return r.filter(e);
    },
    transactionOnCommit(e) {
      return r.transactionOnCommit(e);
    },
    ReactiveList(e) {
      return r.ReactiveList(e);
    },
    getOrCreate(e) {
      return r.getOrCreate(e);
    },
    updateOrCreate(e) {
      return r.updateOrCreate(e);
    }
  };
};
class Ca {
  constructor() {
  }
  static save(e = {}) {
    const t = this.getTableSchema(), a = x.getFilteredData(t, this);
    Object.assign(this, a), ie.executeUpdate(a, this);
  }
  static get() {
    const e = ie.executeSelect(this);
    return Object.assign(this, { ...e }), e;
  }
  static getTableSchema() {
    throw "Register your Model before using the API";
  }
  static clear() {
    this.clearStorage();
  }
  static clearComponent() {
    const e = this.getTableSchema().fieldNames;
    for (const t of e)
      this[t] = null;
  }
  static clearStorage() {
    const e = this.getTableSchema().id;
    localStorage.removeItem(e.keyPath);
  }
  static key() {
    return this.getTableSchema().databaseName + "/" + this.getTableSchema().name;
  }
}
class ja {
  addMiddleTable(e, t, a, s) {
    const i = U(t), n = U(a), c = U(n) + i, l = {
      databaseName: s,
      name: c,
      id: { keyPath: "id", autoIncrement: !0, type: B.INT },
      fields: [
        {
          name: "iD" + i,
          keyPath: "iD" + i,
          blank: !1,
          fieldAttributes: {},
          options: {
            unique: !1,
            type: B.INT
          },
          className: "ForeignKey"
        },
        {
          name: "iD" + n,
          keyPath: "iD" + n,
          blank: !1,
          fieldAttributes: {},
          options: {
            unique: !1,
            type: B.INT
          },
          className: "ForeignKey"
        }
      ],
      attributes: {},
      foreignKey: {},
      fieldTypes: {
        IntegerField: ["iD" + i, "iD" + n]
      },
      fieldNames: ["iD" + i, "iD" + n],
      middleTablePK: {},
      middleTableRelatedFields: {},
      falseField: []
    };
    return l.foreignKey["iD" + n] = { tableName: n }, l.foreignKey["iD" + i] = { tableName: i }, l;
  }
  generateGenericModel({ ModelName: e, middleTableSchema: t }) {
    class a extends ee {
    }
    const s = a;
    return a[T.getModel] = () => s, a[T.getTableSchema] = () => t, a;
  }
}
const qa = new ja();
class Ea {
  constructor() {
    o(this, "databases", {});
  }
  processingDatabase(e) {
    this.databases[e] = { tablesNames: [], tableHash: {} };
  }
  hasBeenProcessedDb(e) {
    return !(this.databases[e] == null || this.databases[e] == null);
  }
  generate(e) {
    const t = {
      databaseName: e.databaseName,
      type: e.type,
      version: e.version,
      table: [],
      middleTables: []
    };
    if (this.hasBeenProcessedDb(e.databaseName))
      return t;
    this.processingDatabase(e.databaseName);
    for (const a of e.models) {
      const { tablesSchemas: s, middleTablesSchemas: i } = this.generateTableSchema(a, e.databaseName);
      t.table = t.table.concat(s), t.middleTables = t.middleTables.concat(i);
    }
    return t;
  }
  generateTableSchema(e, t) {
    const a = [], s = [], { fields: i, attributes: n, fieldTypes: c, modelName: l, fieldNames: u, falseField: d } = Se.read(e), h = this.getModalName(l, t, e), y = this.makePrimary(i, n), b = {
      databaseName: t,
      name: h,
      id: y,
      attributes: n,
      fields: [],
      fieldTypes: c,
      fieldNames: u,
      falseField: d,
      foreignKey: {},
      middleTablePK: {},
      middleTableRelatedFields: {}
    }, m = Object.entries(i).filter(([g, w]) => w.fieldName != "ManyToManyField");
    for (let [g, w] of m)
      w == null || delete w.model, b.fields.push({
        name: g,
        keyPath: g,
        options: {
          unique: w.unique,
          type: null
        },
        className: w.fieldName,
        fieldAttributes: Object.assign({}, w),
        blank: !1
      });
    a.push(b);
    for (let [g, w] of Object.entries(i))
      if (w instanceof ve) {
        const S = Se.getModelName(w.model), N = this.getModalName(S, t, w.model), k = qa.addMiddleTable(g, N, h, t);
        s.push(k), b.middleTablePK[g] = { tableName: k.name }, b.middleTableRelatedFields[k.name] = { fieldName: g };
      }
    return { tablesSchemas: a, middleTablesSchemas: s };
  }
  getModalName(e, t, a) {
    if (this.hasRegisterModelName(t, a))
      return this.getModelName(t, a);
    if (this.isModelNameAvailable(t, e))
      return this.registerModelName(t, a, e), e;
    {
      const s = J(a.toString());
      return this.registerModelName(t, a, s), s;
    }
  }
  getModelName(e, t) {
    const a = J(t.toString());
    return this.databases[e].tableHash[a];
  }
  registerModelName(e, t, a) {
    const s = J(t.toString());
    return this.databases[e].tableHash[s] = a, this.databases[e].tablesNames.push(a);
  }
  isModelNameAvailable(e, t) {
    return !this.databases[e].tablesNames.includes(t);
  }
  hasRegisterModelName(e, t) {
    const a = J(t.toString());
    return this.databases[e].tableHash[a];
  }
  makePrimary(e, t) {
    var s, i;
    const a = (s = t == null ? void 0 : t.primaryKey) == null ? void 0 : s.shift();
    return {
      keyPath: a || "id",
      //by default primary key is id
      autoIncrement: e[a] ? ((i = e[a]) == null ? void 0 : i.primaryKey) == !0 : !0,
      type: Pe.INT
    };
  }
}
const Ce = new Ea();
class Ra {
  constructor() {
    o(this, "callbackQueue", []);
    // A queue to store the callbacks.
    o(this, "running", !1);
  }
  // Tracks whether the scheduler is running.
  /**
   * Enqueues a callback function to be executed in the queue.
   * @param callback - The callback function to be executed.
   * @returns A function to rerun the callback
   */
  enqueueCallback(e) {
    const t = () => {
      this.callbackQueue.push(e);
    };
    return t(), t;
  }
  /**
   * Adds a callback function to the queue or run immediately depending on `this.running` state
   * @param callback - The callback function to be added to the queue.
   * @returns A function to remove the callback from the queue.
   */
  function(e) {
    return async (...t) => new Promise(async (a) => {
      this.running ? a(await e(...t)) : this.callbackQueue.push(async () => {
        a(await e(...t));
      });
    });
  }
  /**
   * Starts the execution of callbacks in the queue.
   */
  start() {
    this.running || (this.running = !0, this.executeNextCallback());
  }
  /**
   * Pauses the execution of callbacks.
   */
  pause() {
    this.running = !1;
  }
  /**
   * Resumes the execution of callbacks.
   */
  resume() {
    this.running || (this.running = !0, this.executeNextCallback());
  }
  /**
   * Executes the next callback in the queue, removing it after execution.
   */
  executeNextCallback() {
    if (this.running && this.callbackQueue.length > 0) {
      const e = this.callbackQueue.shift();
      e == null || e(), this.executeNextCallback();
    }
  }
}
class Ka {
  constructor(e) {
    o(this, "dbName");
    o(this, "db", null);
    o(this, "transactionQueue", []);
    o(this, "isTransactionInProgress", !1);
    o(this, "txInstance", null);
    o(this, "pending", 0);
    this.dbName = e;
  }
  async openDatabase() {
    return new Promise((e, t) => {
      if (this.db)
        e(this.db);
      else {
        let a = indexedDB.open(this.dbName, 2);
        a.onsuccess = () => {
          this.db = a.result, this.txInstance = this.db.transaction(["database"], "readwrite"), e(this.db);
        }, a.onupgradeneeded = (s) => {
          let i = s.target.result;
          i.createObjectStore("database", { keyPath: "MyID", autoIncrement: !0 }), i.close(), e(this.openDatabase());
        }, a.onerror = (s) => {
          t(s);
        };
      }
    });
  }
  async processTransactionQueue() {
    if (this.isTransactionInProgress)
      return;
    this.db = await this.openDatabase();
    let e = () => {
      var t;
      if (this.transactionQueue.length > 0) {
        this.isTransactionInProgress = !0;
        let a = this.transactionQueue.shift();
        this.pending++, this.executeTransaction(a).then(() => {
        }).catch((s) => {
          console.log(s);
        }).finally(() => {
          this.pending--, e();
        });
      } else
        this.isTransactionInProgress = !1, this.db && this.pending == 0 && ((t = this.txInstance) == null || t.commit(), this.db.close(), this.db = null, this.txInstance = null);
    };
    e();
  }
  async executeTransaction(e) {
    return new Promise((t, a) => {
      e.storeName, e.mode;
      let s = e.operation, i = this.txInstance.objectStore("database")[s](e.data);
      i.onsuccess = () => {
        t(i.result), e.callback(i.result);
      }, i.onerror = (n) => {
        a(n);
      };
    });
  }
  async enqueueTransaction({ storeName: e, mode: t, operation: a, data: s, callback: i }) {
    let n = { storeName: e, mode: t, operation: a, data: s, callback: i };
    this.transactionQueue.push(n), this.isTransactionInProgress || this.processTransactionQueue();
  }
  async insert(e, t, a) {
    return this.enqueueTransaction({ storeName: e, mode: "readwrite", operation: "add", data: t, callback: a });
  }
  async get(e, t, a) {
    return this.enqueueTransaction({ storeName: e, mode: "readwrite", operation: "get", data: t, callback: a });
  }
  async getAll(e, t) {
    return this.enqueueTransaction({ storeName: e, mode: "readonly", operation: "getAll", callback: t, data: null });
  }
}
const Va = new Ka("Migrations");
class X {
  constructor(e = {}) {
    o(this, "databaseName", "");
    o(this, "databaseVersion", 0);
    o(this, "migrations", []);
    Object.assign(this, e);
  }
  DB() {
    return X.DB();
  }
  static DB() {
    return Va;
  }
  static async insert(e) {
    return new Promise((t) => {
      this.DB().insert("objectStore", e, (a) => {
        t(a);
      });
    });
  }
  async save() {
    return new Promise((e) => {
      this.DB().insert("objectStore", this, (t) => {
        e(t);
      });
    });
  }
  static async get(e) {
    return new Promise((t) => {
      this.DB().get("objectStore", e, (a) => {
        t(a);
      });
    });
  }
  static getAll() {
    return new Promise((e) => {
      this.DB().getAll("objectStore", (t) => {
        e(t);
      });
    });
  }
}
class La {
  constructor() {
    o(this, "MigrationsModel", X);
    o(this, "allMigrations", []);
    /**
     * @description wait until `MigrationsStorageManager.getRegisteredMigrations()` has finish executing
     */
    o(this, "waitMigrationsList", new Ra());
    o(this, "getAllMigrations", this.waitMigrationsList.function(() => this.allMigrations));
    o(this, "hasMigration", this.waitMigrationsList.function((e) => this.allMigrations.find((t) => t.databaseName == e)));
    o(this, "getMigrations", this.waitMigrationsList.function((e) => this.allMigrations.find((t) => t.databaseName == e)));
    this.getRegisteredMigrations();
  }
  async getRegisteredMigrations() {
    this.allMigrations = await this.MigrationsModel.getAll(), this.waitMigrationsList.start();
  }
  async createMigrationFirstTime(e) {
    const t = {
      databaseName: e.databaseName,
      databaseVersion: e.version,
      migrations: {
        table: e.table,
        middleTables: e.middleTables
      }
    };
    await this.MigrationsModel.insert(t);
  }
  async createMigrationUpdate(e) {
    const t = e.databaseName, a = await this.getMigrations(t);
    a.databaseVersion = e.version, a.migrations.push(e.table), await new X(a).save();
  }
}
const Q = new La();
class Ua {
  constructor() {
    o(this, "needToMigrate", !1);
  }
  async migrationIsUpToDate(e) {
    const t = e.databaseName;
    return (await Q.getMigrations(t)).databaseVersion == e.version;
  }
  async make(e) {
    const t = e.databaseName;
    await Q.hasMigration(t) ? await this.migrationIsUpToDate(e) || (this.needToMigrate = !0, await Q.createMigrationUpdate(e)) : (this.needToMigrate = !0, await Q.createMigrationFirstTime(e));
  }
}
class _a extends Error {
}
class Ja {
  validateFromSchema(e, t) {
    const a = this.requiredFields(e);
    for (const s of a)
      if (t.hasOwnProperty(s) == !1)
        return D(new _a());
    return f(!0);
  }
  requiredFields(e) {
    const t = [];
    for (const a of e.fields)
      a.blank || t.push(a.name);
    return t;
  }
  ModelValidator(e, t) {
    const a = e[T.getModelSchema](), s = t.fieldTypes.OneToOneField || [], i = t.fieldNames.filter((n) => !s.find((c) => c == n));
    return (n) => {
      for (const c of i) {
        const l = a[c], u = n[c], d = l.valid(u);
        if (d.isError)
          return d;
      }
      return f(!0);
    };
  }
}
const Ga = new Ja();
class Ha {
  async INSERTOne(e, t, a) {
    const s = t.query.values, i = t.query.table, n = t.model, l = n[T.getTableSchema]().id.keyPath;
    return await new Promise((u, d) => {
      e.insert({ table: i, rows: s })({
        onsuccess: (h) => {
          const y = h.data, b = h.index;
          a[b][l] = y;
          const m = new n();
          Object.assign(m, a[b]), u(f(m));
        },
        onerror: (h) => {
          const y = new ne({ message: h }), b = new re();
          b.setCause(y), u(D(b));
        },
        done: () => {
        }
      });
    });
  }
  async INSERTMany(e, t, a) {
    const s = t.query.values, i = [], n = t.query.table, c = t.model, u = c[T.getTableSchema]().id.keyPath;
    return await new Promise((d, h) => {
      e.insertMany({ table: n, rows: s })({
        onsuccess: (y) => {
          const b = y.data, m = y.index;
          a[m][u] = b;
          const g = new c();
          Object.assign(g, a[m]), i.push(g);
        },
        onerror: (y) => {
          const b = new ne({ message: y }), m = new re();
          m.setCause(b), d(D(m));
        },
        done: () => {
          d(f(i));
        }
      });
    });
  }
}
const se = new Ha();
class Qa {
  async DELETEOne(e, t) {
    const a = t.query.table;
    return await new Promise((s, i) => {
      e.delete({ table: a, query: t.query })({
        onsuccess: () => {
        },
        onerror: () => {
          s(D(!1));
        },
        done: () => {
          s(f(1));
        }
      });
    });
  }
  async DELETEMany(e, t) {
    const a = t.query.table;
    return await new Promise((s, i) => {
      e.deleteMany({ table: a, query: t.query })({
        onsuccess: () => {
        },
        onerror: () => {
        },
        done: (n) => {
          s(f(n));
        }
      });
    });
  }
}
const W = new Qa();
class Wa {
  async UPDATEOne(e, t) {
    const a = t.query.table;
    return await new Promise((s, i) => {
      e.update({ table: a, query: t.query })({
        onsuccess: (n) => {
        },
        onerror: () => {
          s(D(!1));
        },
        done: () => {
          s(f(1));
        }
      });
    });
  }
  async UPDATEMany(e, t) {
    const a = t.query.table;
    return await new Promise((s, i) => {
      e.updateMany({ table: a, query: t.query })({
        onsuccess: (n) => {
        },
        onerror: () => {
        },
        done: () => {
          s(f(1));
        }
      });
    });
  }
}
const Oe = new Wa();
class za {
  async SELECTOne(e, t) {
    const a = t.query.table, s = t.model;
    return await new Promise((i, n) => {
      e.select({ table: a, query: t.query })({
        onsuccess: (c) => {
        },
        onerror: () => {
          i(D(!1));
        },
        notFound: () => {
          i(D(new Fa(t.query)));
        },
        done: (c) => {
          const l = new s();
          Object.assign(l, c[0]), i(f(l));
        }
      });
    });
  }
  async SELECTMany(e, t) {
    const a = t.query.table, s = t.model, i = [];
    return await new Promise((n, c) => {
      e.selectMany({ table: a, query: t.query })({
        onsuccess: (l) => {
          const u = l.map((d) => Object.assign(new s(), d));
          for (const d of u)
            i.push(d);
        },
        onerror: () => {
          n(D(!1));
        },
        done: (l) => {
          n(f(i));
        }
      });
    });
  }
}
const z = new za();
class $a {
  forMiddleTables(e, t) {
    const a = [];
    for (const s of e.middleTables) {
      const i = this.generateGenericModel(s.name, s, t);
      a.push(i);
    }
    return a;
  }
  generateGenericModel(e, t, a) {
    class s extends ee {
    }
    const i = s;
    s.prototype[T.getModel] = () => i, s[T.getModel] = () => i, s[T.getTableSchema] = () => t, s.prototype[T.getTableSchema] = () => t, s[T.validator] = () => f(!0);
    for (const [c, l] of Object.entries(t.foreignKey)) {
      const u = a.models.find((d) => d.getTableSchema().name == l.tableName);
      s.prototype[c + "F"] = () => ke({ model: u });
    }
    const n = {};
    for (const [c, l] of Object.entries(t.foreignKey)) {
      const u = a.models.find((d) => d.getTableSchema().name == l.tableName);
      n[c] = Z.ForeignKey({ model: u }), Object.defineProperty(s.prototype, c, {
        get() {
          return this[c + "F"]();
        },
        set(d) {
          const h = this[c + "F"]();
          h.setPrimaryKey(d), this[c + "F"] = () => h;
        }
      });
    }
    return s.getModelSchema = function() {
      return n;
    }, s;
  }
}
const Xa = new $a();
class Ya {
  subscribe(e, t) {
    let a, s = () => {
    }, i = e.transactionOnCommit(async () => {
      const [n, c] = await t(e);
      c.isOk && (a = n, s && s());
    });
    return t(e).then(([n, c]) => {
      c.isOk && (a = n, s && s());
    }), {
      get value() {
        return a;
      },
      get subscribe() {
        return i;
      },
      unsubscribe: async () => await i.disconnect(),
      setUpdateUi(n) {
        s = n;
      }
    };
  }
}
class Za {
  constructor() {
    o(this, "register", (e) => {
      q.addModelSchema(e);
      const t = Ce.generate(e);
      q.addGeneratedTableSchemaToModel(t, e);
      const a = Xa.forMiddleTables(t, e), s = j.generateRelationShipMethods(t, e, a);
      q.attachRelationShipMethods(s);
      const i = e.models.concat(a);
      C.register(t, i);
      const c = C.getDatabase(t.databaseName).DBConnectionManager.driverAdapter.strategy;
      for (const l of e.models) {
        q.addStaticFunctionFWrap(l, T.getModel, l), q.addFunctionFWrap(l, T.getModel, l);
        const u = Ga.ModelValidator(l, l[T.getTableSchema]());
        q.addStaticFunctionFWrap(l, T.validator, u);
      }
      c.prepare(t)({
        onerror: () => {
        },
        onsuccess: () => {
        },
        done: () => {
        }
      }), this.prepareMigrations(t, c);
    });
  }
  async prepareMigrations(e, t) {
    const a = new Ua();
    await a.make(e), a.needToMigrate;
  }
  async executeInsertionQuery(e, t) {
    const a = t[T.getTableSchema](), s = a.databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy, c = e.query.values, l = [...e.query.values], u = t[T.validator];
    for (const d in c) {
      c[d] = x.getFilteredData(a, c[d]);
      const h = u(c[d]);
      if (h.isError)
        return h;
    }
    return e.setCleanData(c), e.query.isParamsArray ? await se.INSERTMany(n, e, l) : await se.INSERTOne(n, e, l);
  }
  async executeInsertionManyQuery(e, t) {
    const s = t[T.getTableSchema]().databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy, c = e.query.values;
    return await se.INSERTMany(n, e, c);
  }
  executeSelectQuery(e, t) {
    const s = t[T.getTableSchema]().databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy;
    return {
      one: () => z.SELECTOne(n, e),
      many: () => z.SELECTMany(n, e),
      decide: () => e.query.isParamsArray ? z.SELECTMany(n, e) : z.SELECTOne(n, e)
    };
  }
  async executeUpdateQuery(e, t) {
    const s = t[T.getTableSchema]().databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy;
    return e.query.isParamsArray ? await Oe.UPDATEMany(n, e) : await Oe.UPDATEOne(n, e);
  }
  async deleteQuery(e, t) {
    const a = t[T.getTableSchema](), s = a.databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy, c = e.query.values;
    for (const l in c)
      c[l] = x.getFilteredDataOverlay(a, c[l]);
    return e.setCleanData(c), e.query.isParamsArray ? await W.DELETEMany(n, e) : await W.DELETEOne(n, e);
  }
  async deleteQueryNoFormValidation(e, t) {
    const s = t.getTableSchema().databaseName, n = C.getDatabase(s).DBConnectionManager.driverAdapter.strategy;
    return e.query.isParamsArray ? await W.DELETEMany(n, e) : await W.DELETEOne(n, e);
  }
  registerTrigger(e, t) {
    const a = e[T.getTableSchema](), s = a.databaseName, i = a.name, n = C.getDatabase(s), c = n.getTable(i), l = K.onCompleteReadTransaction, u = c.trigger.hasSubscription(l);
    let d;
    const h = n.DBConnectionManager.driverAdapter.strategy, y = () => {
      h.RemoveTrigger({ table: i, data: d })({
        onsuccess: ({ subscriptionId: m }) => {
        },
        onerror: () => {
        },
        done: () => {
        }
      });
    };
    let b = c.trigger.listeningToSubscription(l, t, y);
    return u ? (d = c.trigger.findTriggerToShared(l), c.trigger.associateDispatchUIDToTrigger(l, b.dispatchUID, d)) : (c.trigger.registerTrigger(l), h.addTrigger({ table: i, data: "" })({
      onsuccess: ({ subscriptionId: m }) => {
        d = m, c.trigger.createShareSubscription(l, m), c.trigger.associateDispatchUIDToTrigger(l, b.dispatchUID, d);
      },
      stream: (m) => {
        const g = m.subscriptionId;
        c.trigger.executeTriggers(l, g);
      },
      onerror: () => {
      },
      done: () => {
      }
    })), b;
  }
  ReactiveList(e, t) {
    return new Ya().subscribe(e, t);
  }
}
const F = new Za(), es = {
  $B: Ba,
  Model: ee,
  KeyValueModel: Ca,
  register: F.register,
  registerKeyValueStore: ie.registerKeyValueStore,
  ...Sa,
  ...Ae
};
window.models = es;
export {
  Ba as $B,
  es as models
};
