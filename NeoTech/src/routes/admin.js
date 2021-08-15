var express = require('express');
var router = express.Router();
const { users,
        deleteProduct,
        panel,
        formAddProduct,
        addProduct,
        editAccount,
        formEditProduct,
        editProduct,
        saleStock,
        logicEditProduct
        } = require('../controllers/adminController');
/* let controller = require('../controllers/adminController') */


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
router.get('/panel-general', panel)

// GET AGREGAR PRODUCTO FORMULARIO
router.get("/agregar-producto", formAddProduct)
// POST AGREGAR PRODUCTO         /*  -------------------------------------------- */
router.post("/agregar-producto", addProduct)

// GET EDITAR CUENTA
router.get("/editar-cuenta", editAccount)

// GET PANEL EDITAR PRODUCTO ( LISTADO DE PRODUCTOS )
router.get("/editar-producto", editProduct)
// GET EDITAR PRODUCTO FORMULARIO
router.get("/formulario-editar-producto/:id", formEditProduct)
// PUT EDITAR UN PRODUCTO           /* ----------------------------------------- */
router.put("/formulario-editar-producto/:id", logicEditProduct)

// DELETE BORRAR UN PRODUCTO DESDE EL PANEL DE EDITAR PRODUCTO /* --------------- */
router.delete("/eliminar-producto/:id", deleteProduct)

// GET VENTA Y STOCK 
router.get("/venta-y-stock", saleStock)

// GET LISTA DE USUARIOS
router.get("/usuarios", users)



module.exports = router;