const { Router } = require('express');

const { obtenerCategorias } = require('../controllers/categoria.controller.js');

const router = Router();

router.get('/', obtenerCategorias );

module.exports = router;