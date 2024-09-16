const { Reservation, Users, ReservationStatus } = require('../models');
const { Op } = require('sequelize');

const cancelReservation = async (req, res) => {
    try {
        const cancelationReservation = await Reservation.findByPk(req.params.id);
        if (cancelationReservation) {
            await cancelationReservation.update({
                id_reservation_status: 3
            });
            res.status(200).json({ message: "Reserva cancelada correctamente" });
        } else {
            res.status(404).json({ message: "Reserva no encontrada" });
        }
    } catch (error) {
        console.error("Error al cancelar la reserva:", error);  // Mostrar el error en la consola
        res.status(500).json({ message: "Ocurrió un error al cancelar la reserva", error: error.message });
    }
}

const knowReservationStatus = async (req, res) => {
    const { numberReservation, nameUser, date } = req.body;

    try {
        const reservation = await Reservation.findAll({
            attributes: ['reservation_number'],
            where: {
                [Op.or]: [
                    { reservation_number: numberReservation },
                    {
                        [Op.and]: [
                            date ? { reservation_date: date } : null,
                            nameUser ? { '$User.first_name_user$': nameUser } : null 
                        ]
                    }
                ]
            },
            include: [
                {
                    model: ReservationStatus,
                    attributes: ['status_name']
                },
                {
                    model: Users,
                    attributes: [
                        'first_name_user',
                        'first_surname_user',
                        'second_surname_user'
                    ]
                }
            ]
        });

        if(reservation.length === 0){
            res.status(404).json({message: "Not found"});
        }

        res.status(200).json({
            status: 200,
            ok: true,
            reservation
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    cancelReservation,
    knowReservationStatus
}
