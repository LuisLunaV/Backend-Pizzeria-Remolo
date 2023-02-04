const { Router } =require('express');

const { obtenerTodosLosPrecios } = require('../controllers/precio.controller.js');

const router = Router();

router.get('/', obtenerTodosLosPrecios )

module.exports = router;