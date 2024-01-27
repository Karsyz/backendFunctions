const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.register);

// router.post('/isAuth', authController.isAuth);

module.exports = router;