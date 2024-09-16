const express = require('express');
const router = express.Router();
const ubicationsControllers = require('../controllers/ubications.controllers');

router.post('/registerUbications', ubicationsControllers.registerUbications);
router.post('/registerCountry', ubicationsControllers.registerCountrys);
router.post('/registerState', ubicationsControllers.registerStates);
router.post('/registerMunicipality', ubicationsControllers.registerMunicipalitys);

module.exports = router;