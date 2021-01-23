const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/daikenja.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the daikenja database.');
});

module.exports = {
    db,
    sqlite3
};