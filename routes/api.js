const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');


// Index
router.get('/api', apiController.getApiIndex);

module.exports = router;