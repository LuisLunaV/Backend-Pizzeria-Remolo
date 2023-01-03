const { Router } = require('express');

const {
    crearUsuario,
    actualizarUsuario
} = require('../controllers/user.controller.js');

const router = Router();

router.post('/',   crearUsuario);
router.put('/:id', actualizarUsuario);

module.exports = router;