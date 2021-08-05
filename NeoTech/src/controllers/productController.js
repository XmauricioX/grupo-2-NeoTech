let db = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {title: 'NeoTech - Lista de Productos', db })
    },
    productDetail: (req, res) => {
        res.render('products/productDetail', {title: 'NoeTech - Detalle de Producto'})
    }
}
