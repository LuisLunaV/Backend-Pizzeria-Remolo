const { request, response } = require('express');

const { User } = require('../models/user');

const users = {

  //Creamos un nuevo cliente (usuario).
    userPost: async( req = request, res = response )=>{
      
        const body = req.body;

        // Validamos si las propiedades del objeto estan vacias.
        if( Object.keys(body).every( value => body[value] === "" ) ){
          return res.status(400).json({
            msg:'Falta informacion del cliente'
          })
        }

        const { Usuario_Nombre, Usuario_Telefono, Usuario_Direccion} = body;
      
        const usuario = new User( { Usuario_Nombre, Usuario_Telefono, Usuario_Direccion } );

      usuario.Usuario_Nombre    = Usuario_Nombre.toUpperCase();
      usuario.Usuario_Direccion = Usuario_Direccion.toUpperCase();

      // await usuario.save();

     return res.status(201).json({
       
      usuario
      
    });

    }

};

module.exports = users;