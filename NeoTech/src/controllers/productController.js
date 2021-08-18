let { getProducts} = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {title: 'NeoTech - Lista de Productos', products: getProducts })
    },
    productDetail: (req, res) => {
        let productID = getProducts.find(productID =>{
            return productID.id === +req.params.id
        });
        res.render("products/productDetail", {title: 'NoeTech - Detalle de Producto', productID })
    },
    /* menu: (req, res) => {
        let result = []
        getProducts.forEach(element => {
            let marcaFiltrada = getProducts.filter(marca)
            if(marcaFiltrada === element.marca)
            result.push(element)
        });
        res.redirect('producto/lista-de-productos', {
            result,
            products : getProducts
        }) */
    }

