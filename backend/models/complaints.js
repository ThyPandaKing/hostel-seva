const mongoose = require("mongoose");


const Schema = mongoose.Schema

const complaintSchema = new Schema({
    title:      {type: String, required: true},
    content:    {type: String, required: true},
    from :      {type: String, required: true},
    to:         {type: String, required: true},
    date:       {type: Date,   default:  Date.now},
    likes:      {type: [String]},
    dislikes:   {type: [String]},
})

const Complaint = mongoose.model("complaint", complaintSchema)

module.exports = Complaint;