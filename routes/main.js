const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');


// Index
router.get('/', homeController.getIndex);

router.get('/stuffToDo', homeController.stuffToDo);

router.get('/add/:firstNum/:secondNum', homeController.getAddNums);
router.post('/add', homeController.postAddNums);

router.post('/echoValue', homeController.postEchoValue);
router.get('/echoValue/:value', homeController.getEchoValue);

router.post('/makeTitleCase', homeController.postMakeTitleCase);
router.get('/makeTitleCase/:string', homeController.getMakeTitleCase);

module.exports = router;