const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const dbObj = require('./database')


router.get('/list', (req, res) => {
  dbObj.getDocList().then((docs)=> {
     res.json(docs) 
  }).catch((err)=> {
    errobj = {errcode: -1, error: err}
    res.json(errobj)
   })
})

router.post('/uploadfile', upload.single('fname'), function (req, res, next) {
  // req.file is the `fname` file
  // req.body will hold the text fields, if there were any
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
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


module.exports = router