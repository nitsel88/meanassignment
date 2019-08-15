var doc = require('./documents')
var users = require('./users')
const dbObj = require('./database')
var express = require('express')
var app = express()

//port
const port = 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routing
app.use("/document", doc);
//app.use("/users", users);

//initializing DB and start listening to port
dbObj.initDb(() => {
        app.listen(port, function (err) {
        if (err) {
            throw err; //
        }
        console.log("API Up and running on port: " + port);
    });
});
