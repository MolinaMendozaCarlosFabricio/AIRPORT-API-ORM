const { Flights, Ubications, Municipalitys } = require('../models');

const registerFly = async (req, res) => {
  try{
    const newFligth = await Flights.create(req.body);
    res.status(201).json({message: "Vuelo registrado correctamente"})
  }catch(error){
    res.status(500).json(error)
  }
}
// Controlador para buscar vuelos por origen y destino
const getFlightsByOriginAndDestination =  async (req, res) => {
    try{
        const { origin, destination } = req.body;
        console.log(origin, destination)
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
                model: Ubications,
                as: 'origin',
                attributes: ['airport_name_ubication'],
                include: {
                  model: Municipalitys,
                  as: 'municipality',
                  attributes: ['municipalitys_name'],
                  where: { municipalitys_name: origin }
                }
              },
              {
                model: Ubications,
                as: 'destination',
                attributes: ['airport_name_ubication'],
                include: {
                  model: Municipalitys,
                  as: 'municipality',
                  attributes: ['municipalitys_name'],
                  where: { municipalitys_name: destination }
                }
              }
            ]});

        res.status(200).json({
            ok: true,
            flights
        })
            
    }catch(error){
      console.log(error)
      res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getFlightsByOriginAndDestination,
    registerFly
}
