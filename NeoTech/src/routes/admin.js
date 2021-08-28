var express = require('express');
var router = express.Router();
const {users,
    deleteProduct,
    panel,
    formAddProduct,
    addProduct,
    editAccount,
    formEditProduct,
    editProduct,
    saleStock,
    deleteUsers,
    logicEditProduct} = require('../controllers/adminController');

const uploadFile = require('../middlewares/uploadFiles');


/* GET admin page. */
router.get('/panel-general', panel)

// GET AGREGAR PRODUCTO FORMULARIO
router.get("/agregar-producto", formAddProduct)
// POST AGREGAR PRODUCTO         /*  -------------------------------------------- */
router.post("/agregar-producto",uploadFile.single('product-image'), addProduct)

// GET EDITAR CUENTA
router.get("/editar-cuenta", editAccount)

// GET PANEL EDITAR PRODUCTO ( LISTADO DE PRODUCTOS )
router.get("/editar-producto", editProduct)
// GET EDITAR PRODUCTO FORMULARIO
router.get("/formulario-editar-producto/:id", formEditProduct)
// PUT EDITAR UN PRODUCTO           /* ----------------------------------------- */
<<<<<<< HEAD
router.put("/formulario-editar-producto/:id", logicEditProduct)
=======
router.put("/formulario-editar-producto/:id", uploadFile.single('product-image'), logicEditProduct)
>>>>>>> 848d3f0d20acbaec89ca9ea60c9f44c7023f3af3

// DELETE BORRAR UN PRODUCTO DESDE EL PANEL DE EDITAR PRODUCTO /* --------------- */
router.delete("/eliminar-producto/:id", deleteProduct)

// GET VENTA Y STOCK 
router.get("/venta-y-stock", saleStock)

// GET LISTA DE USUARIOS
router.get("/usuarios", users)










/////////////////////////////////////////////
// DELETE BORRAR UN USUARIO DESDE EL PANEL DE EDITAR PRODUCTO
router.delete("/usuarios/:id", deleteUsers)



module.exports = router;