const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const messItemSchema = new Schema ({
  name: {type: String, require: true},
  price: {type: Number, required: true},
});

const MessItem = mongoose.model ('messItem', messItemSchema);

module.exports = MessItem;
