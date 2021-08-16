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
      } = require('../controllers/adminController');


/* GET admin page. */
router.get('/panel-general', panel)

/*  -------------------------------------------- */
// GET AGREGAR PRODUCTO FORMULARIO
router.get("/agregar-producto", formAddProduct)
// POST AGREGAR PRODUCTO         
router.post("/agregar-producto", addProduct)
/*  -------------------------------------------- */


/*  -------------------------------------------- */
// GET EDITAR CUENTA
router.get("/editar-cuenta", editAccount)
// GET EDITAR PRODUCTO FORMULARIO
router.get("/formulario-editar-producto", formEditProduct)
/*  -------------------------------------------- */


/*  -------------------------------------------- */
// GET PANEL EDITAR PRODUCTO ( LISTADO DE PRODUCTOS )
router.get("/editar-producto", editProduct)
// PUT EDITAR UN PRODUCTO           
/* router.put("/editar-producto/:id", ) */
/*  -------------------------------------------- */


/*  -------------------------------------------- */
// DELETE BORRAR UN PRODUCTO DESDE EL PANEL DE EDITAR PRODUCTO */
router.delete("/eliminar-producto/:id", deleteProduct)
/*  -------------------------------------------- */


/*  -------------------------------------------- */
// GET VENTA Y STOCK 
router.get("/venta-y-stock", saleStock)
/*  -------------------------------------------- */


/*  -------------------------------------------- */
// GET LISTA DE USUARIOS
router.get("/usuarios/", users)
/*  -------------------------------------------- */




module.exports = router;