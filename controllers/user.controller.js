const { request, response } = require('express');

const { User } = require('../models/user');

const users = {

  // Buscamos al cliente por su ID
  buscarUsuarioPorId: async( req = request, res = response ) => {

    const { id } = req.params;

    const user = await User.findByPk( id );

    res.status(200).json({
      user
    })
  },

  //Creamos un nuevo cliente (usuario).
    crearUsuario: async( req = request, res = response ) => {
      
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

      await usuario.save();

     return res.status(201).json({
       
      usuario
      
    });

    },

    //Habilitamos la opcion PUT si en algun momento el cliente desea cambiar algun dato de su entrega.
    actualizarUsuario: async( req = request, res = response ) => {

      const { id } = req.params;
      const body   = req.body;

      const usuario = await User.findByPk( id );

      await usuario.update( body, { new: true });

      return res.status(201).json({
        usuario
      })
      
      },


      // PENDIENTE
      //Esta opcion nos ayudara, si es que el cliente desea cancelar su solicitud
      // userDelete: async( req = require, res = response ) => {
      //   const { id } = req.params;
        
      // }
      
};


module.exports = users;