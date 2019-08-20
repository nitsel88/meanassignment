const express = require('express')
const router = express.Router()
const dbObj = require('./database')


router.get('/', (req, res) => {
   
   dbObj.getUsers().then((users)=> {
    res.json(users)
   }).catch((err)=> {
    errobj = {errcode: -1, error: err}
    res.json(errobj)
   })
})


router.post('/register', (req, res) => {
   
   dbObj.insertUser(req.body).then((status) => {
       console.log(status)
       res.json(status)
   })
})


module.exports = router