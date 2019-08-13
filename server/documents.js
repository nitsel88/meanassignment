var router = express.Router()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


router.post('/uploadfile', upload.single('fname'), function (req, res, next) {
  // req.file is the `fname` file
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


module.exports = router