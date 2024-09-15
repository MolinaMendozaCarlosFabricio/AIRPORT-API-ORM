const { Users } = require('../models');

const registerUser = async (req, res) => {
    try{
        const newUser = await Users.create(req.body);
        res.status(201).json({message: "Usuario registrado correctamente"})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    registerUser
}