const express = require('express');
const router = express.Router();
const grammasterController = require('../controllers/grammaster');
const upload = require("../middleware/multer");



// Index
router.get('/recipes', grammasterController.getRecipes);

router.get('/recipe/:id', grammasterController.getRecipe);

router.post('/recipe/createRecipe', grammasterController.createRecipe);

router.put('/recipe/update/:id', upload.any(), grammasterController.updateRecipe);

router.delete('/recipe/delete/:id', grammasterController.deleteRecipe);


module.exports = router;




