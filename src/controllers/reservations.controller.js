const { Reservation } = require('../models');

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

module.exports = {
    cancelReservation
}
