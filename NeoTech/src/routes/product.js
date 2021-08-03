var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController')


/* GET product-list. */
router.get('/lista-de-productos', controller.productList)
/* GET product-detail */
router.get('/detalle-de-productos', controller.productDetail)


module.exports = router;