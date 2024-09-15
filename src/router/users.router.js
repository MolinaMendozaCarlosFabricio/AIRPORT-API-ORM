const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controllser');

router.post('/register', userController.registerUser);

module.exports = router;