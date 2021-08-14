let { getProducts} = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {title: 'NeoTech - Lista de Productos', db })
    },
    productDetail: (req, res) => {
        let productID = db.find(productID =>{
            return productID.id === +req.params.id
        });
        res.render("products/productDetail", {title: 'NoeTech - Detalle de Producto', productID })
    }
}
