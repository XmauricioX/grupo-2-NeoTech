const express = require('express');
const router = express.Router();
const { 
    productList,
    productDetail
 } = require('../../controllers/apiControllers/apiProductsController')


router.get('/products', productList)

router.get('/products/:id', productDetail)


module.exports = router