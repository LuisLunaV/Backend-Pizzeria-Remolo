const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Precio = db.define('precio' ,{
    Precio_Id: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },

    Precio_ProdID: {
        type: DataTypes.INTEGER
    },

    Precio_Unitario: {
        type: DataTypes.DECIMAL
    }
},{
    tableName: 'precio'
},{
    defaultScope: {
        attributes:{ 
            exclude: ['createdAt', 'updatedAt']
        }
    }
}
);

module.exports = {
    Precio
}