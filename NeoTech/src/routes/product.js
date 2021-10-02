var express = require('express');
var router = express.Router();
let {
    productList,
    productDetail,
    search,
    productCategory,
    productBrand
    } = require('../controllers/productController')


/* GET LISTADO DE PRODUCTOS. */
router.get('/lista-de-productos', productList)
// GET DETALLE DE PRODUCTO   
router.get("/lista-de-productos/:id", productDetail)
// /* GET BUSCADOR */
router.get("/resultado-de-busqueda", search)
// /* GET PRODUCTOS POR CATEGORIA */
router.get("/categoria/:categoria", productCategory)
// /* GET PRODUCTOS POR MARCA */
router.get('/marca/:marca', productBrand)


module.exports = router;