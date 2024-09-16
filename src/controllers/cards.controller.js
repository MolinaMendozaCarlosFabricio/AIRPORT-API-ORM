const { Holders, Cards, Reservation } = require('../models'); 


const addHolder = async (req, res) => {
    try {
        const { firstName, middleName, firstSurname, secondSurname } = req.body;
        
        const holder = await Holders.create({
            first_name_holder: firstName,
            middle_name_holder: middleName,
            first_surname_holder: firstSurname,
            second_surname_holder: secondSurname
        });
        
        res.status(201).json({ message: "titular añadido correctamente" });
    } catch (error) {
        res.status(500).json({ error: "error añadiendo al titular" });
    }
};


const addCard = async (req, res) => {
    try {
        const { card_number, due_date, bank, id_holder, id_user } = req.body;
        
        await Cards.create({
            card_number,
            due_date,
            bank,
            id_holder,
            id_user
        });
        
        res.status(201).json({ message: 'tarjeta añadidad correcatamente' });
    } catch (error) {
        res.status(500).json({ error: "error al añadir una tarjeta" });
    }
};


const searchCard = async (req, res) => {
    try {
        const id = req.params.id;
        
        const card = await Cards.findOne({
            where: { id_card: id }
        });
        
        if (card) {
            res.status(200).json(card);
        } else {
            res.status(404).json({ message: 'tarjeta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: "error buscando la tarjeta" });
    }
};

const updateCard = async (req, res) => {
    try {
        const id = req.params.id;
        const { card_number, due_date, bank, id_holder, id_user } = req.body;
        
        const updated = await Cards.update({
            card_number,
            due_date,
            bank,
            id_holder,
            id_user
        }, {
            where: { id_card: id }
        });
        
        if (updated) {
            res.status(200).json({ message: 'tarjeta actualizad' });
        } else {
            res.status(404).json({ message: 'tarjeta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: "error tartandode actualizar" });
    }
};


const deleteCard = async (req, res) => {
    try {
        const id = req.params.id;
        
        const deleted = await Cards.destroy({
            where: { id_card: id }
        });
        
        if (deleted) {
            res.status(200).json({ message: 'tarjeta borrada' });
        } else {
            res.status(404).json({ message: 'tarjeta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: "errror eliminando la tarjeta" });
    }
};

const processPayment = async (req, res) => {
    const { card_number, due_date, bank, id_holder, id_user, reservation_id } = req.body;

    try {
        
        await Cards.create({
            card_number,
            due_date,
            bank,
            id_holder,
            id_user
        });

        // estado reserva
        const reservation = await Reservation.findByPk(reservation_id);
        if (reservation) {
            await reservation.update({
                id_reservation_status: 1 //1 pagado
            });
            res.status(200).json({ message: 'Pago procesado y reserva actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }
    } catch (error) {
        console.error("Error procesando el pago:", error);
        res.status(500).json({ error: 'Error procesando el pago' });
    }
};

module.exports = {
    addHolder,
    addCard,
    searchCard,
    updateCard,
    deleteCard,
    processPayment
}


// exports.addHolder = (req, res) => {
//     const { firstName, middleName, firstSurname, secondSurname } = req.body;
  
//     const insertHolder = `
//       INSERT INTO holders (first_name, middle_name, first_surnsme, second_surname)
//       VALUES (?, ?, ?, ?)`;
  
//     db.query(insertHolder, [firstName, middleName, firstSurname, secondSurname], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error trying to add the holder" });
//       }
  
//       res.status(201).json({ message: "Holder added successfully", holderId: result.insertId });
//     });
//   };

// //add
// exports.addCard = (req, res) => {
//     const { card_number, due_date, bank, id_holder, id_user } = req.body;

//     const query = 'INSERT INTO cards (card_number, due_date, bank, id_holder, id_user) VALUES (?, ?, ?, ?, ?)';
//     db.query(query, [card_number, due_date, bank, id_holder, id_user], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error trying to add the card" });
//       }
//       res.status(201).json({ message: 'Card added successfully'});
//     });
//   };    

// //search
// exports.searchCard = (req, res) => {
//     const id = req.params.id;

//     const query = 'SELECT * FROM cards WHERE id_card = ?';
//     db.query(query, id, (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error trying to search the card"});
//       }
//       res.status(201).json({ message: 'Find it'});
//     });
//   };

// //update
// exports.updateCard = (req, res) => {
//     const id = req.params.id;
//     const { card_number, due_date, bank, id_holder, id_user } = req.body;

//     const query = 'UPDATE cards SET card_number = ?, due_date = ?, bank = ?, id_holder = ?, id_user = ? WHERE id_card = ?';
//     db.query(query, [card_number, due_date, bank, id_holder, id_user, id], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error trying to update the card" });
//       }
//       res.status(200).json({ message: 'Card updated successfully' });
//     });
//   };

// //delete
// exports.deleteCard = (req, res) => {
//     const id = req.params.id;

//     const query = 'DELETE FROM cards WHERE id_card = ?';
//     db.query(query,id, (err, result) => {
//       if (err) {
//         return res.status(500).json({ error:"Error trying to delete the card" });
//       }
//       res.status(200).json({ message: 'Card deleted successfully' });
//     });
//   };
