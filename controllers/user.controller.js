const { request, response } = require('express');
const usuarios = require('../../10-CRUD_MySql/controllers/user.controller');

const { User } = require('../models/user');

const users = {

    userPost: async( req = request, res = response )=>{
      
        const { Usuario_Nombre, Usuario_Telefono, Usuario_Direccion} = req.body;
      
        const usuario = new User( { Usuario_Nombre, Usuario_Telefono, Usuario_Direccion } );

      usuario.Usuario_Nombre    = Usuario_Nombre.toUpperCase();
      usuario.Usuario_Direccion = Usuario_Direccion.toUpperCase();

      await usuario.save();

     return res.status(201).json({
        usuario
      })
    }

};

module.exports = users;