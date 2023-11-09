const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String, 
  totalMass: Number,
  totalRecipeMass: Number,
  recipeQuantity: Number,
  totalQuantity: Number,
  imageUrl: String,
  imgAlt: String,
  cloudinaryId: String,
  ingredients: [{
    name: String, 
    massTotal: Number, 
    massRecipe: Number, 
    bakersPercentage: Number,
    bgColorCard: String,
  }],
  instructions: [String],
  previousVersions: [Object],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);