const {Ubications, Countrys, States, Municipalitys} = require('../models');

const registerUbications = async (req, res) => {
    try{
        const newUbication = await Ubications.create(req.body);
        res.status(201).json({message: "Ubicación registrada correctamente"});
    }catch(error){
        res.status(500).json(error);
    }
}

const registerCountrys = async (req, res) => {
    try{
        const newCountry = await Countrys.create(req.body);
        res.status(201).json({message:"País registrado correctamente"});
    }catch(error){
        res.status(500).json(error);
    }
}

const registerStates = async (req, res) => {
    try{
        const newState = await States.create(req.body);
        res.status(201).json({message:"Estado registrado correctamente"});
    }catch(error){
        res.status(500).json(error);
    }
}

const registerMunicipalitys = async (req, res) => {
    try{
        const newMunicipalitys = await Municipalitys.create(req.body);
        res.status(201).json({message:"Municipio registrado correctamente"});
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = {
    registerUbications,
    registerCountrys,
    registerStates, 
    registerMunicipalitys
}