const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Pedido = db.define('pedidos_detalle',{
PD_Id:{

    type: DataTypes.INTEGER,
    primaryKey: true
},

PD_PedidosID:{
    type: DataTypes.INTEGER,
    require: [true, 'Se necesita agregar el ID del pedido']
},

PD_ProdID:{

    type: DataTypes.INTEGER,
    require: [true, 'Se necesita agregar el ID del producto']

},

PD_Cantidad:{
    type: DataTypes.SMALLINT,
    require: [true, 'Agregar cantidad']
},

PD_PrecioUnitario:{
    type: DataTypes.DECIMAL,
    require: [true, 'Agregar precio del producto']
}

} ,{    
        tableName: 'pedidos_detalle'
 }
);

module.exports = {
    Pedido
};