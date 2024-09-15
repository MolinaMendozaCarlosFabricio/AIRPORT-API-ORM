const express = require('express');
const router = express.Router();
const ubicationsControllers = require('../controllers/ubications.controllers');

router.post('/registerUbications', ubicationsControllers.registerUbications);
router.post('/registerCountry')

module.exports = router;