const { Reservation, ReservationStatus } = require('../models');
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

const reserveFlight = async (req, res) => {
    const { id_flight, id_reservation_status, reservation_number, reservation_date } = req.body;
    const userId = req.params.id;

    try {
        await reservation.create({
            id_flight,
            id_reservation_status,
            id_usuario: userId,
            reservation_number,
            reservation_date
        });

        res.status(201).json({ message: 'reservs hecha correctamente', reservation });
    } catch (error) {
        console.error("error realizano la reserva: ", error);
        res.status(500).json({ error: 'error realizando la reserva:' });
    }
};

const getStatusReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const reservation = await Reservation.findOne({
            where: { reservation_number: reservationId },
            include: [{
                model: ReservationStatus,
                attributes: ['status_name'] // obtne el estatus
            }]
        });

        if (reservation === null) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        //lo devuelve 
        res.status(200).json({
            reservationStatus: reservation.ReservationStatus.status_name
        });
    } catch (error) {
        res.status(500).json({ error: 'error al obtener el estado de la reserva' });
    }
};

const selectSeat = async (req, res) => {
    const { seat_number } = req.body; // para enviar en el bidy
    try {
        //buscar asiento 1 es linbre
        const seat = await db.Seating.findOne({
            where: {
                seat_number: seat_number,
                id_seating_status: 1 
            }
        });

        if (seat == null) {
            return res.status(404).json({ message: "el asiento no esta disponible." });
        }

        
        await seat.update({
            id_seating_status: 2 // es reservado
        });

        res.status(200).json({ message: "asiento reservado." });
    } catch (error) {
        res.status(500).json({ message: "error al reservar el asiento: ", error });
    }
};



module.exports = {
    cancelReservation,
    reserveFlight,
    getStatusReservation,
    selectSeat
}
