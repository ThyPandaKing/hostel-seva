var express = require('express')
var router = express.Router()

router.get('/', (req,res) => {
    res.send("canteen");
})

router.get('/add', (req,res) => {
    res.send("canteen add")
})

module.exports = router
