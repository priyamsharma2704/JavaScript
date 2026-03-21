class inMemDb {
    constructor() {
        this.table = new Map();
        this.backupTable = new Map();
    }

    //create table
    createTable(tableName) {
        if (this.table.get(tableName)) {
            console.log("table already exists");
            return;
        }
        this.table.set(tableName, new Map());
    }

    //insert table
    insert(tableName, id, data, ttl = null) {
        if (!this.table.get(tableName)) {
            console.log("table does not exists");
            return;
        }

        var expiry = ttl ? ttl + Date.now() : null;

        this.table.get(tableName).set(id, { expiry, data });
    }

    //update data
    update(tableName, id, updatedData, ttl = null) {
        if (!this.table.get(tableName)) {
            console.log("table does not exists");
            return;
        }
        var oldData = this.table.get(tableName).get(id);
        var data = {
            expiry: oldData.expiry,
            data: updatedData,
        };
        this.table.get(tableName).set(id, data);
    }

    delete(tableName, id) {
        if (!this.table.get(tableName)) {
            console.log("table does not exists");
            return;
        }

        this.table.get(tableName).delete(id);
    }

    getAll(tableName) {
        var tableData = this.table.entries(tableName);
        var result = new Map();
        for (var [key, value] of tableData) {
            if (!this.isExpired(value)) result.set(key, value);
        }
        return result;
    }

    snapshot() {
        this.backupTable = new Map();
        for (var [key, value] of this.table) {
            this.backupTable.set(key, new Map(value));
        }
    }

    restore() {
        this.table = new Map(this.backupTable);
    }

    //---helpers---//
    isExpired(data) {
        return data.ttl !== null && data.ttl < Date.now();
    }
}

var db = new inMemDb();
db.createTable("books");
db.insert("books", 1, "aaa", 3000);
db.insert("books", 2, "bbb", 3000);
db.insert("books", 3, "ccc", 3000);
db.insert("books", 4, "ddd", 3000);

db.update("books", 4, "dddddd");
console.log(db.getAll());
db.snapshot();
db.delete("books", 2);
console.log(db.getAll());
db.restore();
console.log(db.getAll());
