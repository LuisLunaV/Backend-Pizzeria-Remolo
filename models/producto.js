const { DataTypes } = require('sequelize');

const { db } = require('../database/config.db');

const Producto = db.define('productos',{
    Prod_id:{ 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Prod_Nombre:{ 
        type: DataTypes.STRING
    },
    Prod_categoriaID:{ 
        type: DataTypes.SMALLINT
    },
    Prod_TamañoID:{ 
        type: DataTypes.INTEGER
    },
    Prod_Descripcion:{ 
        type: DataTypes.STRING
    },
    Prod_imagen:{ 
        type: DataTypes.STRING
    },
    Prod_status:{ 
        type: DataTypes.TINYINT
    },
},{
    defaultScope: {
        attributes:{ 
            exclude: ['createdAt', 'updatedAt']
        }
    }
});

module.exports = {
    Producto
}