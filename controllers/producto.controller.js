const { request, response } = require('express');

const { Producto } = require('../models/producto.js');

const producto = {

    //Necesitamos filtrar los productos por categoria
    obtenerProductosPorCategoria: async( req = request, res = response )=>{
       const producto = await Producto.findAll({
        where: { Prod_categoriaID: 2 }
       });

       res.status(200).json({
        producto
       })
    }
};

module.exports = producto;