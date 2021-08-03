var express = require('express');
var router = express.Router();
let controller = require('../controllers/adminController')


/* GET admin page. */
router.get('/panel-general', controller.panel)
router.get("/agregar-producto", controller.agregarProducto)
router.get("/editar-cuenta", controller.editCuenta)
router.get("/formulario-editar-producto", controller.formEditProducto)
router.get("/editar-producto", controller.editProducto)
router.get("/venta-y-stock", controller.ventaStock)
router.get("/usuarios", controller.usuarios)




module.exports = router;