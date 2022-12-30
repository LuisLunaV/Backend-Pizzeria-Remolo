const { request, response } = require('express');

const { Pedido } = require('../models/pedido.js');

const pedidos = {

    pedidoPost: async(req = request, res = response )=>{
        const body = req.body;
        
        const { PD_PedidosID, PD_ProdID, PD_Cantidad, PD_PrecioUnitario, PD_Costo } = body;
       
        const pedido = new Pedido( { PD_PedidosID, PD_ProdID, PD_Cantidad, PD_PrecioUnitario, PD_Costo } );

        await pedido.save();
        return res.status(201).json({
            pedido
        })
    }

};

module.exports = pedidos;