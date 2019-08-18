const express = require('express')
const router = express.Router()
const multer = require('multer')
const dbObj = require('./database')
var fs = require('fs');

const uploadpath = './uploads/'

router.get('/list', (req, res) => {
  dbObj.getDocList().then((docs)=> {
     res.json(docs) 
  }).catch((err)=> {
    errobj = {errcode: -1, error: err}
    res.json(errobj)
   })
})

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, uploadpath);
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single('file');

router.post('/uploadfile', function (req, res) {
  upload(req, res, function(err) {
 // req.file is the `fname` file
  // req.body will hold the text fields, if there were any
  if(err) {
    return err
  }
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return err
  }
  req.file.desc = req.body.filedesc 
  dbObj.insertDocDetails(req.file, (err) => {
    if (err) {
      return err
    }
    console.log("File data inserted to DB")
    console.log(req.file)
    res.end('File uploaded')
  }) 
  }) 
})

router.delete('/deletefile',function(req,res){
  console.log("delete: req.body.filename: " + req.body.filename);
  filepath = uploadpath +  req.body.filename
  fs.unlink(filepath, (err) => {
    if (err) throw err;
    console.log(filepath + ' was deleted');
    dbObj.deleteDoc(req.body.filename).then((delres)=> {
       if(delres.deleted == req.body.filename) {
         console.log("DB deleted file: " + delres.deleted)
         res.json({response: "deleted file"+ req.body.filename})
       }
    })
  });
});


module.exports = router