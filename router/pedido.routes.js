const { Router } = require('express');
const { check } = require('express-validator');

const {
    crearPedido,
    obtenerPedidoId,
    actualizarPedido
} = require('../controllers/pedido.controller.js');

const { validarCampos }     = require('../middlewares/validar-campos.js');
const { existePedidoPorID } = require('../helpers/db-validator.js');

const router = Router();

router.get('/:id',[
    check('id').custom( existePedidoPorID ),
    validarCampos
], obtenerPedidoId );

router.post('/',   crearPedido );
router.put('/:id', actualizarPedido);

module.exports = router;
