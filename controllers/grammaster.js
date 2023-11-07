const bcrypt = require("bcrypt");
const Cryptr = require('cryptr');
const Recipe = require("../models/Recipe");
const generator = require('generate-password');

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200)
    res.send({
    msg: "Here's all your recipes bud.  Have a good one eh!",
    data: recipes,
  })
  } catch (error) {
    console.error(error)
  }
}

exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({_id: req.params.id})
    res.status(200)
    res.send({
      msg: "Here's your recipe bud.  Have a good one eh!",
      data: recipe,
    })
  } catch (error) {
    console.error(error)
  }
}

exports.deleteRecipe = async (req, res) => {
  try {
    const deleted = await Recipe.findOneAndDelete({_id: req.params.id})
    res.status(200)
    res.send({
      msg: "*Poof* All gone.  Have a good one eh!",
      data: deleted,
    })
  } catch (error) {
    console.error(error)
  }
}

exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      name: req.body.name || 'Untitled', 
      totalMass: 0,
      totalRecipeMass: 0,
      recipeQuantity: 1,
      totalQuantity: 1,
      imageUrl: 'https://placehold.co/500x300',
      imgAlt: 'placeholder',
      ingredients: [],
      instructions: [],
      previousVersions: [],
    })

    const newSave = await recipe.save()

    res.status(200)
    res.send({
      msg: "Here's your shiny new recipe bud.  Have a good one eh!",
      data: newSave,
    })
  } catch (error) {
    console.error(error)
  }
}

exports.updateRecipe = async (req, res) => {
  try {
    let recipe = await Recipe.findOne({_id: req.body.id})

    // recipe.previousVersions.push(JSON.stringify(recipe))

    recipe.name = req.body.name
    recipe.totalMass = req.body.totalMass
    recipe.totalRecipeMass = req.body.totalRecipeMass
    recipe.recipeQuantity = req.body.recipeQuantity
    recipe.totalQuantity = req.body.totalQuantity
    recipe.imageUrl = req.body.imageUrl
    recipe.imgAlt = req.body.imgAlt
    recipe.ingredients = JSON.parse(req.body.ingredients)
    recipe.instructions = JSON.parse(req.body.instructions)
    
    const newSave = await recipe.save()

    res.status(200)
    res.send({
      msg: "Hey, thanks for updatin' the recipe bud.  Have a good one eh!",
      data: newSave,
    })
  } catch (error) {
    console.error(error)
  }
}

