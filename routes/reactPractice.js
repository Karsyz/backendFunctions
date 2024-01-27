const express = require('express');
const router = express.Router();
const reactPracticeController = require('../controllers/reactPractice');


// Index
router.get('/faqs', reactPracticeController.getFaqs);

module.exports = router;