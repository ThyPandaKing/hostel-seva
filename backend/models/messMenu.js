const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const messMenuSchema = new Schema ({
  day: {type: String, required: true},
  BreakFast: {type: String, required: true},
  Lunch: {type: String, required: true},
  Snack: {type: String, required: true},
  Dinner: {type: String, required: true},
  priority: {type: Number, require: true},
});

const MessMenu = mongoose.model ('messMenu', messMenuSchema);

module.exports = MessMenu;
