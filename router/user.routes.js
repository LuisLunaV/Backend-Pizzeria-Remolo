const { Router } = require('express');
const { check }  = require('express-validator');

const {
    crearUsuario,
    actualizarUsuario
} = require('../controllers/user.controller.js');

const { validarCampos } = require('../middlewares/validar-campos.js');

const router = Router();

router.post('/', [
check('Usuario_Nombre', 'Evite utilizar numeros y signos').matches(/^[a-zA-Z ]+$/),
validarCampos
], crearUsuario);

router.put('/:id', actualizarUsuario);

module.exports = router;