const { Router } = require('express');

const { obtenerProductosPorCategoria } =require('../controllers/producto.controller.js');

const router = Router();

router.get('/', obtenerProductosPorCategoria )

module.exports = router;