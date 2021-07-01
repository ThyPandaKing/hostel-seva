const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const foodWasteSchema = new Schema ({
  waste: {type: Number, required: true},
  date: {type: Date, default: Date.now},
});

const foodWaste = mongoose.model ('foodWaste', foodWasteSchema);

module.exports = foodWaste;
