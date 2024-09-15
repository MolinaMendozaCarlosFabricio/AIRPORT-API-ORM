const { Reservations } = require('../models');

const cancelReservation = async (req, res) => {
    try{
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}