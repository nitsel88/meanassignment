// Retrieve
var MongoClient = require('mongodb').MongoClient

let dbInstance

//initialize DB connection
function initDb(callback) {
   if (dbInstance) {
        console.warn("Trying to init DB again!")
        return callback()
   }

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if(!err) {
    console.log("We are connected")
    dbInstance = db;
    return callback();
    }
  })
}


//Get DB instance
function getDb() {
    assert.ok(_db, "Db has not been initialized. Please called init first.");
    return _db;
}

module.exports = {
    getDb,
    initDb   
};