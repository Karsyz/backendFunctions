const mongoose = require("mongoose");
const PotLuckItem = require("./PotLuckItem")
const ObjectId = mongoose.SchemaTypes.ObjectId

const PotLuckSchema = new mongoose.Schema({
  name: String,
  description: String,
  eventDateTime: Date,
  items: [{type: ObjectId, ref: PotLuckItem}],
  createdAt: {type: Date, default: Date.now},
  createdBy: String,
});

module.exports = mongoose.model("PotLuck", PotLuckSchema);