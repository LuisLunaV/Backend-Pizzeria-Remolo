// Validamos las existencias de los registros en la base de datos, (si es que existen, o no existen)

const { User } = require('../models/user.js');

const existeClientePorID = async( id ) =>{

const existeCliente = await User.findByPk( id );

if( !existeCliente ){
    throw new Error(`El id ${ id } no existe en la base de datos`);
}

};

module.exports = {
    existeClientePorID
}