var express = require('express')
var router = express.Router()
let Complaint = require("../models/complaints")

router.get('/', (req,res) => {   
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    Complaint.find()
    .then(complaint => res.json(complaint))
    .catch(err => console.log("from complaint.js "+err))
})


module.exports = router
