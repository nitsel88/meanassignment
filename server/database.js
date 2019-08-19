// Retrieve
const assert = require("assert");
var MongoClient = require('mongodb').MongoClient

let dbInstance

//initialize DB connec  tion
function initDb(callback) {
   if (dbInstance) {
        console.warn("Trying to init DB again!")
        return callback()
   }

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true,  useUnifiedTopology: true },  function(err, client) {
    if (err) throw err;
    
    db = client.db("meandb");
    console.log("We are connected")
    dbInstance = db;
    return callback();

  })
}


//Get DB instance
function getDb() {
    assert.ok(dbInstance, "Db has not been initialized. Please called init first.");
    return dbInstance;
}

//insert uploaded document meta data to mydocs collection
function insertDocDetails (docDtl, callback) {
  db = getDb()
  db.collection(" ").insertOne(docDtl, function(err, res) {
  return callback(err)
 });
}

//get list of documents uploaded already
function getDocList () {
  return new Promise((resolve, reject)=> {
  db = getDb()
  db.collection("mydocs").find({}).toArray(function(err, docs) {
    if (err) { 
      reject (err)
    }
     console.log("Found the following records");
     console.log(docs)
     resolve(docs)
    })
  })
}

function getDocDtlForName (docName) {
    return new Promise((resolve, reject)=> {
  db = getDb()
  db.collection("mydocs").find({filename: docName}).toArray(function(err, docs) {
    if (err) { 
      reject (err)
    }
     console.log("Found the record:");
     console.log(docs)
     resolve(docs)
    })
  })
}

function deleteDoc(docname) {
  return new Promise((resolve, reject)=> {
    db = getDb()
    db.collection("mydocs").deleteOne({filename:docname}, (err) => {
        if (err) { 
          reject (err)
        }
        resolve({deleted: docname})
      })
  }) 
}


//insert user details
function insertUser (user) {
  db = getDb()
  db.collection("users").insertOne(user, function(err, res) {
    if (err) { 
      return err
    }
    console.log("user inserted: " + user);
 });
}

//get list of users
function getUsers () {
  return new Promise((resolve, reject)=> {
  db = getDb()
  db.collection("users").find({}).toArray(function(err, users) {
    if (err) { 
      reject (err)
    }
  console.log("Found the following users");
  console.log(users)

  resolve(users);
  });
 })
}

module.exports = {
    getDb,
    initDb,
    insertDocDetails,
    getDocList,
    deleteDoc,
    getDocDtlForName,
    insertUser,
    getUsers 
};