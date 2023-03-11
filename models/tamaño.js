const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Tamaño = db.define('tamaño', {
    Tamaño_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    
    Tañaño_tipo: {
        type: DataTypes.STRING
    }
},{
    tableName: 'tamaño'
},{
    defaultScope: {
        attributes:{ 
            exclude: ['createdAt', 'updatedAt']
        }
    }
});

module.exports = {
    Tamaño
};