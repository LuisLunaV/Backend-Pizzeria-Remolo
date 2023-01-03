const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Categoria = db.define('categoria',{

Categoria_Id:{
    type: DataTypes.INTEGER,
    primaryKey: true
},
Categoria_Descripcion:{
    type: DataTypes.STRING,
}

});

module.exports = {
    Categoria
};