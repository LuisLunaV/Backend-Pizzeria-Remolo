const { request, response } = require('express');
const { Op } = require('sequelize');

const { Pedido } = require('../models/pedido.js');

const pedidos = {

    //Ver pedido del cliente
    obtenerPedidoId: async( req = request, res = response )=>{

        const { id } = req.params; 

        const {count, rows} = await Pedido.findAndCountAll({where: {
            PD_PedidosID: id
        }});

        return res.status( 200 ).json({
            count,
            rows
        })
    },

    //Creamos el pedido del cliente
    crearPedido: async( req = request, res = response ) => {
        
        const body = req.body;
        
        const { PD_PedidosID, PD_ProdID, PD_Cantidad, PD_PrecioUnitario, PD_Costo } = body;
       
        const pedido = new Pedido( { PD_PedidosID, PD_ProdID, PD_Cantidad, PD_PrecioUnitario, PD_Costo } );

        await pedido.save();

        return res.status(201).json({
            pedido
        })
    },

    //Actualizamos el pedido del cleinte
    actualizarPedido: async( req = request, res = response ) => {

        const { id } = req.params;
        const { body } = req;
        
        const pedido = await Pedido.findByPk( id );

        await pedido.update( body, { new: true });

        return res.status( 200 ).json({
            pedido
        })
    }

};

module.exports = pedidos;