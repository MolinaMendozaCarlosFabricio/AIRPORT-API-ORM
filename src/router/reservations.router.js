const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations.controller');

router.put('/cancelReservation/:id', reservationsController.cancelReservation);
router.post('reseverFlight/:id', reservationsController.reserveFlight);
router.get('/getStatusReservation/:id', reservationsController.getStatusReservation);
router.post('/selectSeat', reservationsController.selectSeat);
module.exports = router;