const { Router } = require('express');

const pedidos = require('../controllers/pedido.controller.js');

const router = Router();

router.post('/', pedidos.pedidoPost)

module.exports = router;
