const { Flights } = require('../models');

// Controlador para buscar vuelos por origen y destino
const getFlightsByOriginAndDestination =  async (req, res) => {
    try{
        const { origin, destination } = req.body;
        const flights = await Flights.findAll({
            attributes: [
              'price_flight',
              'arrival_date',
              'arrival_time',
              'depature_date',
              'depature_time'
            ],
            include: [
              {
                model: Ubication,
                as: 'origin',
                attributes: ['airport'],
                include: {
                  model: Municipality,
                  as: 'municipality',
                  attributes: ['municipality_name'],
                  where: { municipality_name: origin }
                }
              },
              {
                model: Ubication,
                as: 'destination',
                attributes: ['airport'],
                include: {
                  model: Municipality,
                  as: 'municipality',
                  attributes: ['municipality_name'],
                  where: { municipality_name: destination }
                }
              }
            ]})
    }catch(error){
        res.status(200).send.json({ error: error.message });
    }
}

module.exports = {
    getFlightsByOriginAndDestination
}

// exports.knowReservationStatus = (req,res) => {
//     const{numberReservation,nameUser,date} = req.body;
  
//     db.query('SELECT reser.reservation_number,reserst.status,users.first_name,users.first_surname,users.middle_surname FROM reservations reser INNER JOIN reservationstatus reserst ON reserst.id_reservation_status = reser.id_reservation_status INNER JOIN users users ON reser.id_user = users.id_user WHERE reser.reservation_number = ? OR (users.first_name = ? AND reser.reservation_date = ?)',[numberReservation,nameUser,date],(err,result)=>{
//       if(err){
//         console.log(err)
//         return res.status(500).send("Error al consultar el estado de dicha reserva");
//       }
  
//       res.json(result);
//     })
//   } 