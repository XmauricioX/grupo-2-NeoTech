var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController')


/* GET LISTADO DE PRODUCTOS. */
router.get('/lista-de-productos', controller.productList)
// GET 
router.get("/lista-de-productos/:id", controller.productDetail)

router.get("/resultado-de-busqueda", controller.search)

router.get("/categoria/:categoria?", controller.productCategory)

module.exports = router;