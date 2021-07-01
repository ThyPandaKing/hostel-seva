const mongoose = require("mongoose");

const Schema = mongoose.Schema

const messItemSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number 
})

const MessItem = mongoose.model("messItem", messItemSchema)

module.exports = MessItem;