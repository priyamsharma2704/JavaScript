class inMemDb {
    constructor() {
        this.db = new Map();
        this.id = 0;
        this.backup = new Map();
        this.ttl = new Map();
        this.expiration = 5000;
    }

    insert(id, data) {
        if (!this.db) {
            console.log("db does not exists");
            return;
        }
        this.db.set(id, data);
        this.ttl.set(id, Date.now() + this.expiration);
    }

    getData() {
        return this.db;
    }

    getRecordById(id) {
        if (this.ttl.get(id) !== null && this.ttl.get(id) < Date.now()) {
            this.ttl.delete(id);
            this.db.delete(id);
            return null;
        }
        return this.db.get(id);
    }

    updateData(id, newData) {
        if (!this.db || !this.db.has(id)) {
            console.log("data does not exists");
            return;
        }
        this.db.set(id, newData);
    }

    delete(id) {
        return this.db.delete(id);
    }

    snapshot() {
        this.backup = new Map(this.db);
    }

    restore() {
        this.db = this.backup;
    }
}

var db = new inMemDb();
db.updateData(0, "priyam");
console.log(db.getData());
db.insert(1, "priyam");
console.log(db.getData());
db.updateData(1, "Priyam Sharma");
db.insert(2, "Doremon");
db.insert(3, "Pokemon");
console.log(db.getData());
console.log(db.ttl);
setTimeout(() => {
    console.log(db.getRecordById(1));
}, 6000);
