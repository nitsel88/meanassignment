var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
 
var app = express()
const port = 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
  console.log('get received')
  res.status(200).send("thanks");
})
app.post('/uploadfile', upload.single('fname'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.status(200).send("file uploaded");
  console.log(req.file)
  console.log(req.body)
})

app.listen(port, function (err) {
    if (err) {
        throw err; 
    }
    console.log("API Up and running on port: " + port);
});