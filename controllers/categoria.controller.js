const { request, response } = require( 'express' );

const { Categoria } = require('../models/categoria.js');

const categorias = {

    obtenerCategorias: async( req = request, res = response )=>{

        const categoria = await Categoria.findAll();

        res.status( 200 ).json({
            categoria
        });
    }
};

module.exports = categorias;
