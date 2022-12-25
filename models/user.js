const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

 //Definimos el nombre de la tabla de la BD a la que estamos apuntando.
const User = db.define('usuarios',{
    Usuario_Id:{

        type: DataTypes.INTEGER,
        primaryKey: true
    },

    Usuario_Nombre:{
        type: DataTypes.STRING,
        require: [true, 'El nombre es obligatorio']
    },

    Usuario_Telefono:{
        type: DataTypes.STRING,
        require: [true, 'El numero de telefono es obligatorio']
    },

    Usuario_Direccion:{
        type: DataTypes.STRING,
        require: [true, 'La direccion es obligatoria']
    }
},{
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
   } 
   //,{    
   //     tableName: 'usuarios'
// }

);

module.exports = {
    User
};