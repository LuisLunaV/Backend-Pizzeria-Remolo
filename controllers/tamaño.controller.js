const { request, response } = require('express');

const { Tamaño } = require('../models/tamaño.js');

const tamaño = {
    obtenerTamañosDelProducto: async( req = request, res = response )=>{
        const tamaño = await Tamaño.findAll();
        
        return res.status(200).json({
            tamaño
        });
    }
};

module.exports = tamaño;