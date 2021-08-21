var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController')


/* GET LISTADO DE PRODUCTOS. */
router.get('/lista-de-productos', controller.productList)
// GET 
router.get("/lista-de-productos/:id", controller.productDetail)



module.exports = router;