const { request, response } = require('express');

const { Producto } = require('../models/producto.js');

const producto = {

    //Necesitamos filtrar los productos por categoria
    obtenerProductosPorCategoria: async( req = request, res = response )=>{
       
       const { id } = req.params;

       const producto = await Producto.findAll({
        where: { Prod_categoriaID: id }
       });

       res.status(200).json({
        producto
       })
    }
};

module.exports = producto;