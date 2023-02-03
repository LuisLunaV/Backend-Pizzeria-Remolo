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

router.post('/',[
check('PD_PedidosID', 'Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('PD_ProdID', 'Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('PD_Cantidad', 'Evite utilizar letras y signos').matches(/^[0-9]+$/),
check('PD_PrecioUnitario', 'Evite utilizar letras y signos').matches(/^[0-9]+$/),
validarCampos
] , crearPedido );
router.put('/:id', actualizarPedido);

module.exports = router;
