const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');


// Index
router.get('/', homeController.getIndex);

router.get('/stuffToDo', homeController.stuffToDo);

router.get('/add/:firstNum/:secondNum', homeController.addNums);


module.exports = router;