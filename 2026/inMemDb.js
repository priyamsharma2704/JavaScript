class Db
{
    constructor()
    {
        this.table = new Map();
    }

    createTable(tableName)
    {
        if (this.table.has(tableName))
        {
            console.log("table already exists")
            return;
        }
        this.table.set(tableName, new Map());
    }

    insert(table, id, data)
    {
        if (this.table.has(table))
            this.table.get(table).set(id, data)
        else
            console.log("table does not exists")
    }
    getData()
    {
        return (this.table)
    }
}

var db1 = new Db();
db1.createTable('names')
db1.insert('names', 1, 'aaa')
db1.insert('names', 3, 'cc')
db1.insert('names', 2, 'bbb')



db1.createTable('products')
db1.insert('products', 1, 'qqq')
db1.insert('products', 3, 'www')
db1.insert('products', 2, 'eee')
console.log(db1.getData())

