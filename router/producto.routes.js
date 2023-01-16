const { Router } = require('express');
const { check }  = require('express-validator');

const { obtenerProductosPorCategoria } = require('../controllers/producto.controller.js');

const { validarCampos } = require('../middlewares/validar-campos.js');
const { existeProductoPorCategoria } = require('../helpers/db-validator.js');

const router = Router();

router.get('/:id',[
    check('id').custom( existeProductoPorCategoria ),
    validarCampos
], obtenerProductosPorCategoria )

module.exports = router;