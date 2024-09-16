const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flights.controller');

// Ruta para obtener vuelor por origen y destino
router.post('/registrerFlight', flightController.registerFly);
router.get('/getFlightsByOriginDestination', flightController.getFlightsByOriginAndDestination);

module.exports = router;
