const { Router } = require('express');
const { check }  = require('express-validator');

const {
    buscarUsuarioPorId,
    crearUsuario,
    actualizarUsuario
} = require('../controllers/user.controller.js');

const { validarCampos } = require('../middlewares/validar-campos.js');
const { existeClientePorID } = require('../helpers/db-validator.js');

const router = Router();

//Buscamos el cliente por id
router.get('/:id',[
check('id').custom( existeClientePorID ),
validarCampos
], buscarUsuarioPorId );

//Creamos el cliente en la BD
router.post('/', [
check('Usuario_Nombre', 'Evite utilizar numeros y signos').matches(/^[a-zA-Z ]+$/),
check('Usuario_Telefono','Evite utilizar letras y signos, el rango del numero debe ser entre min:10 y max:14').matches(/^[0-9]+$/).isLength( { min:10, max:14 } ),
check('Usuario_Direccion', 'Agregue una direccion de entrega').not().isEmpty(),
validarCampos
], crearUsuario);

//Editamos la informacion del usuario
router.put('/:id',[
    check('id').custom( existeClientePorID )
], actualizarUsuario);

module.exports = router;