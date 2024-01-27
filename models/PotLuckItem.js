const mongoose = require("mongoose");

const PotLuckItemSchema = new mongoose.Schema({
    userId: String,
    name: String, 
    item: String, 
    imageUrl: String,
    cloudinaryId: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

module.exports = mongoose.model("PotLuckItem", PotLuckItemSchema);