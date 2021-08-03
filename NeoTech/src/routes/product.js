var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController')


/* GET products page. */
router.get('/lista-de-productos', controller.productList)
router.get('/detalle-de-productos', controller.productDetail)


module.exports = router;