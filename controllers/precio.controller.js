const { request, response } = require('express');

const { Precio } = require('../models/precio.js');
/**
 * Obtenemos la informacion de la tabala precio.
 */
const precio = {

    obtenerTodosLosPrecios: async( req = request, res = response )=>{

        const precio = await Precio.findAll();

        return res.status(200).json({
            precio
        })
    }
};

module.exports = precio;