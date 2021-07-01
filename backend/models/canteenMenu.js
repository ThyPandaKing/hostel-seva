const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const canteenItemSchema = new Schema ({
  name: {type: String, require: true},
  price: {type: Number, required: true},
});

const CanteenItem = mongoose.model ('canteenItem', canteenItemSchema);

module.exports = CanteenItem;
