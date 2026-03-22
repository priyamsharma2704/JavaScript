class ImMemoryDb {
    constructor({ sweepIntervalMs = 5000 } = {})
    {
        // Main storage:  tableName -> { id -> record }
        this.table = new Map();

        // TTL storage:   tableName -> { id -> expiry timestamp in ms }
        this.ttl = new Map();

        // Auto-increment counter per table so callers don't need to supply IDs
        this.nextId = new Map();

        // Transaction stack — each beginTransaction() pushes a snapshot here
        // commit() discards it, rollback() restores it
        this._txStack = [];

        // Background sweep — cleans up rows that expired but were never read
        this._sweepTimer = setInterval(() => this._sweep(), sweepIntervalMs);
        if (this._sweepTimer.unref) this._sweepTimer.unref(); // don't block Node.js exit
    }

    // ── Schema ────────────────────────────────────────────────────────────────

    createTable(tableName)
    {
        // BUG FIX: was "this.tableName" (always undefined) — must be "tableName"
        if (this.table.has(tableName))
        {
            console.log(`Table "${tableName}" already exists.`);
            return;
        }

        this.table.set(tableName, new Map());
        this.ttl.set(tableName, new Map());
        this.nextId.set(tableName, 0);
        console.log(`Table "${tableName}" created.`);
    }

    // ── Write ────────────────────────────────────────────────────────────────

    // id is now optional — if omitted, an auto-increment id is assigned
    // ttlMs is optional — if omitted, the row lives forever
    insert(tableName, data, ttlMs = null)
    {
        if (!this._assertTable(tableName)) return null;

        const id = this.nextId.get(tableName) + 1;
        this.nextId.set(tableName, id);

        const row = { ...data, id };
        this.table.get(tableName).set(id, row);

        // BUG FIX: only set TTL when explicitly requested — not always
        if (ttlMs !== null)
        {
            // Store absolute deadline (Date.now() + duration) so checking is one comparison
            this.ttl.get(tableName).set(id, Date.now() + ttlMs);
        }

        return row;
    }

    update(tableName, id, changes)
    {
        if (!this._assertTable(tableName)) return null;

        // Expire lazily on update too
        if (this._isExpired(tableName, id))
        {
            this._deleteRow(tableName, id);
            return null;
        }

        const row = this.table.get(tableName).get(id);
        if (!row)
        {
            console.log(`Row ${id} not found in "${tableName}".`);
            return null;
        }

        // Merge existing data with new changes
        const updated = { ...row, ...changes, id };
        this.table.get(tableName).set(id, updated);
        return updated;
    }

    deleteData(tableName, id)
    {
        if (!this._assertTable(tableName)) return false;
        if (!this.table.get(tableName).has(id)) return false;

        this._deleteRow(tableName, id);
        return true;
    }

    // ── Read ──────────────────────────────────────────────────────────────────

    getData(tableName, id)
    {
        if (!this._assertTable(tableName)) return null;

        // Lazy expiry: check right now when someone reads this row
        if (this._isExpired(tableName, id))
        {
            this._deleteRow(tableName, id);
            return null; // act as if it never existed
        }

        return this.table.get(tableName).get(id) ?? null;
    }

    getTables()
    {
        return this.table;
    }

    // How many ms until this row expires? Returns null if no TTL was set.
    getTimeLeft(tableName, id)
    {
        if (!this._assertTable(tableName)) return null;

        const expiresAt = this.ttl.get(tableName).get(id);
        if (expiresAt === undefined) return null; // no TTL set — lives forever

        const remaining = expiresAt - Date.now();
        return remaining > 0 ? remaining : 0;    // never return a negative number
    }

    // ── TTL internals ─────────────────────────────────────────────────────────

    // Returns true only when a TTL exists AND has already passed
    _isExpired(tableName, id)
    {
        const expiresAt = this.ttl.get(tableName)?.get(id);
        if (expiresAt === undefined) return false; // no TTL = never expires
        return Date.now() >= expiresAt;
    }

    // Remove the row from both storage maps atomically
    _deleteRow(tableName, id)
    {
        this.table.get(tableName).delete(id);
        this.ttl.get(tableName).delete(id);
    }

    // Background sweep — catches rows that expired but were never read
    _sweep()
    {
        for (const [tableName, ttlMap] of this.ttl)
        {
            for (const [id] of ttlMap)
            {
                if (this._isExpired(tableName, id))
                {
                    this._deleteRow(tableName, id);
                }
            }
        }
    }

    // ── Transactions ──────────────────────────────────────────────────────────

    // Save the entire current state so we can undo back to it
    beginTransaction()
    {
        this._txStack.push(this._snapshot());
        console.log(`Transaction started. Depth: ${this._txStack.length}`);
    }

    // We're happy with the changes — discard the saved snapshot
    commit()
    {
        if (!this._txStack.length) throw new Error('No active transaction to commit');
        this._txStack.pop();
        console.log(`Transaction committed. Depth: ${this._txStack.length}`);
    }

    // Something went wrong — restore everything back to how it was
    rollback()
    {
        if (!this._txStack.length) throw new Error('No active transaction to rollback');
        this._restore(this._txStack.pop());
        console.log(`Transaction rolled back. Depth: ${this._txStack.length}`);
    }

    // Take a deep copy of tables, ttls, and nextId
    _snapshot()
    {
        const tables = new Map();
        for (const [name, rows] of this.table)
        {
            // Copy each row object so future changes don't affect the snapshot
            const rowsCopy = new Map();
            for (const [id, row] of rows) rowsCopy.set(id, { ...row });
            tables.set(name, rowsCopy);
        }

        const ttls = new Map();
        for (const [name, map] of this.ttl)
            ttls.set(name, new Map(map)); // ttl values are numbers — shallow copy is fine

        return {
            tables,
            ttls,
            nextId: new Map(this.nextId) // numbers — shallow copy is fine
        };
    }

    // Overwrite live state with the saved snapshot
    _restore({ tables, ttls, nextId })
    {
        this.table  = tables;
        this.ttl    = ttls;
        this.nextId = nextId;
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    _assertTable(tableName)
    {
        if (!this.table.has(tableName))
        {
            console.log(`Table "${tableName}" does not exist.`);
            return false;
        }
        return true;
    }

    // Call this when done to stop the background sweep (important in tests)
    destroy()
    {
        clearInterval(this._sweepTimer);
    }
}

// ── Demo ──────────────────────────────────────────────────────────────────────

const db = new ImMemoryDb({ sweepIntervalMs: 5000 });

db.createTable('books');
db.insert('books', { title: 'The Great Gatsby',       author: 'F. Scott Fitzgerald' });
db.insert('books', { title: 'To Kill a Mockingbird',  author: 'Harper Lee' });

db.createTable('sessions');
const session = db.insert('sessions', { userId: 42, token: 'abc123' }, 3000); // expires in 3s

console.log('Book 1:',        db.getData('books', 1));
console.log('Session:',       db.getData('sessions', session.id));
console.log('Time left (ms):', db.getTimeLeft('sessions', session.id));

// Update a row
db.update('books', 1, { title: 'The Great Gatsby (Updated)' });
console.log('After update:', db.getData('books', 1));

// After 3 seconds the session will be gone
setTimeout(() => {
    console.log('Session after 3s:', db.getData('sessions', session.id)); // null
    db.destroy(); // stop background sweep
}, 4000);

// ── Transaction demo ──────────────────────────────────────────────────────────

db.beginTransaction();                                    // snapshot saved
db.insert('books', { title: 'Temporary Book' });
console.log('During tx:', db.getData('books', 3));        // { title: 'Temporary Book', id: 3 }
db.rollback();                                            // undo everything since beginTransaction
console.log('After rollback:', db.getData('books', 3));   // null — row never existed

db.beginTransaction();
db.update('books', 1, { title: 'Changed Title' });
db.commit();                                              // keep the change
console.log('After commit:', db.getData('books', 1));     // { title: 'Changed Title', ... }
