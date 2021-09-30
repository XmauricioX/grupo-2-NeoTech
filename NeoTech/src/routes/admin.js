var express = require('express');
var router = express.Router();
const {
    users,
    deleteProduct,
    panel,
    formAddProduct,
    addProduct,
    editAccount,
    formEditProduct,
    editProduct,
    saleStock,
    deleteUsers,
    logicEditProduct,
    formAddCategory,
    formAddBrand,
    addCategory,
    addBrand
    } = require('../controllers/adminController');

const uploadFile = require('../middlewares/uploadFiles');
const productValidator = require('../validations/productsValidator')

let userSession = require('../middlewares/usersSession')
const admin = require("../middlewares/admin")

/* GET admin page. */
router.get('/panel-general', /* userSession , admin , */ panel)

// GET AGREGAR PRODUCTO FORMULARIO
router.get("/agregar-producto",/* userSession, admin , */ formAddProduct)
// POST AGREGAR PRODUCTO         /*  -------------------------------------------- */
router.post("/agregar-producto",uploadFile.single('product-image'), productValidator, addProduct)
// GET AGREGAR CATEGORIAS Y MARCAS FORMULARIO
router.get("/categorias",/* userSession, admin , */ formAddCategory)
router.get("/marcas",/* userSession, admin , */ formAddBrand)
// POST AGREGAR CATEGORIAS Y MARCAS         /*  -------------------------------------------- */
router.post("/categorias",uploadFile.single('product-image'), productValidator, addCategory)
router.post("/marcas",uploadFile.single('product-image'), productValidator, addBrand)

// GET EDITAR CUENTA
router.get("/editar-cuenta", /* userSession , admin , */ editAccount)

// GET PANEL EDITAR PRODUCTO ( LISTADO DE PRODUCTOS )
router.get("/editar-producto", /* userSession, admin , */editProduct)
// GET EDITAR PRODUCTO FORMULARIO
router.get("/formulario-editar-producto/:id", /* userSession , */formEditProduct)
// PUT EDITAR UN PRODUCTO           /* ----------------------------------------- */
router.put("/formulario-editar-producto/:id", uploadFile.single('product-image'), productValidator, logicEditProduct)

// DELETE BORRAR UN PRODUCTO DESDE EL PANEL DE EDITAR PRODUCTO /* --------------- */
router.delete("/eliminar-producto/:id", deleteProduct)

// GET VENTA Y STOCK 
router.get("/venta-y-stock", /* userSession, admin , */saleStock)

// GET LISTA DE USUARIOS
router.get("/usuarios", /* userSession , */users)










/////////////////////////////////////////////
// DELETE BORRAR UN USUARIO DESDE EL PANEL DE EDITAR PRODUCTO
router.delete("/usuarios/:id", deleteUsers)



module.exports = router;