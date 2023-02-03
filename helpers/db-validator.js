// Validamos las existencias de los registros en la base de datos, (si es que existen, o no existen)

const { User, Pedido, Producto } = require('../models/index.js');

const existeClientePorID = async( id ) => {

const existeCliente = await User.findByPk( id );

if( !existeCliente ){
    throw new Error(`El cliente con el id ${ id }, no existe en la base de datos`);
}

};


//Validamos la existencia de los producto en la tabla Productos
//por el campo Prod_categoriaID.

const existeProductoPorCategoria = async( id ) => {

    const existeProductoPorCategoria = await Producto.findAll({ where:{
        Prod_categoriaID: id
    }});

    //Validamos si no existe el producto, o si la matriz que acumula los productos
    //es igual que cero.

    if( !existeProductoPorCategoria || existeProductoPorCategoria.length === 0 ){
        throw new Error(`Los productos con la categoria ${ id }, no existe en la base de datos`)
    }
};

//Validamos la existencia de los pedidos en la tabla Pedidos_detalle
//por el campo PD_PedidosID.

const existePedidoPorID = async( id ) => {

    const existePedidoPorID = await Pedido.findAll({ where:{
        PD_PedidosID: id
    }});

    //Validamos si no existe el pedido, o si la matriz que acumula los pedidos
    //es igual que cero.

    if( !existePedidoPorID || existePedidoPorID.length === 0 ){
        throw new Error(`El pedido con el id ${ id }, no existe en la base de datos`)
    }
}

module.exports = {
    existeClientePorID,
    existeProductoPorCategoria,
    existePedidoPorID
}