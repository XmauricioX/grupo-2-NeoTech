var express = require('express');
const { usuarios } = require('../controllers/adminController');
var router = express.Router();
let controller = require('../controllers/adminController')


// LISTADO 00 ECHO
// CREACION Form 00 ECHO
// EDITAR FOR 00 ECHO
// DETALLE 00 ECHO

// este sprint
// CREACION FRANCO
// EDITAR PRODUCTO MAURICIO
// BORRAR PRODUCTO ARIEL

// adicional nuesto
// EDITAR usuario
// BORRAR USUARIO
// AGREGAR USAURIO controller
// EDITAR CUENTA USUARIO Y ADMIN

/* GET admin page. */
router.get('/panel-general', controller.panel)

// GET AGREGAR PRODUCTO FORMULARIO
router.get("/agregar-producto", controller.formAgregarProducto)
// POST AGREGAR PRODUCTO          --------------------------------------------
router.post("/agregar-producto", controller.agregarProducto)

// GET EDITAR CUENTA
router.get("/editar-cuenta", controller.editCuenta)
// GET EDITAR PRODUCTO FORMULARIO
router.get("/formulario-editar-producto", controller.formEditProducto)
// GET PANEL EDITAR PRODUCTO ( LISTADO DE PRODUCTOS )
router.get("/editar-producto", controller.editProducto)
// PUT EDITAR UN PRODUCTO           ------------------------------------------
router.put("/editar-producto/:id", controller.)

// DELETE BORRAR UN PRODUCTO DESDE EL PANEL DE EDITAR PRODUCTO ---------------
router.delete("editar-producto", controller.)

// GET VENTA Y STOCK 
router.get("/venta-y-stock", controller.ventaStock)

// GET LISTA DE USUARIOS
router.get("/usuarios", controller.usuarios)



module.exports = router;