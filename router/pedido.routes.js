const { Router } = require('express');

const {
    crearPedido,
    obtenerPedidoId,
    actualizarPedido
} = require('../controllers/pedido.controller.js');

const router = Router();

router.get('/:id', obtenerPedidoId );
router.post('/',   crearPedido );
router.put('/:id', actualizarPedido);

module.exports = router;
