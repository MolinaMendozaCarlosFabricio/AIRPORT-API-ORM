const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations.controller');

router.put('/cancelReservation/:id', reservationsController.cancelReservation);
<<<<<<< HEAD
router.post('reseverFlight/:id', reservationsController.reserveFlight);
router.get('/getStatusReservation/:id', reservationsController.getStatusReservation);
router.post('/selectSeat', reservationsController.selectSeat);
=======

router.get('/knowStatusReservation', reservationsController.knowReservationStatus);

>>>>>>> f07b7b93bf7f6500e5a9becce958725538b205c2
module.exports = router;