const { Router } = require('express');

const { obtenerTamañosDelProducto } = require('../controllers/tamaño.controller.js');

const router = Router();

router.get('/', obtenerTamañosDelProducto);

module.exports = router;