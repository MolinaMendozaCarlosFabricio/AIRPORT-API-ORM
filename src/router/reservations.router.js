const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations.controller');

router.put('/cancelReservation/:id', reservationsController.cancelReservation);

module.exports = router;