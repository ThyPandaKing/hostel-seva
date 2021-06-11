var express = require('express')
var router = express.Router()
let Complaint = require("../models/complaints")

router.use(express.json())

router.get('/', (req,res) => {   
    Complaint.find()
    .then(complaint => res.json(complaint))
    .catch(err => console.log("from complaint.js "+err))
})

router.post("/addComplaint", (req,res) => {
    const {complaint} = req.body;
    // console.log(complaint)
    const newComplaint = new Complaint({
        title: complaint.title,
        content: complaint.content,
        from: complaint.from,
        to: complaint.to,
        likes: complaint.likes,
        dislikes: complaint.dislikes
    })

    newComplaint.save()
    .then(complaint => res.json(complaint))
    .catch(err => console.log(err))
})

module.exports = router
