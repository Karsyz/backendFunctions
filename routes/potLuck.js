const express = require('express');
const router = express.Router();
const potLuckController = require('../controllers/potLuck');
const upload = require("../middleware/multer");


// Index
router.get('/:id', potLuckController.getPotLuckList);
router.post('/create', potLuckController.createPotLuckList);
router.put('/addItem', upload.any(), potLuckController.addPotLuckListItem);
router.put('/removeItem', potLuckController.removePotLuckListItem);

module.exports = router;