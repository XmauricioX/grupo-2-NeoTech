let { getProducts } = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {title: 'NeoTech - Lista de Productos', products: getProducts })
    },
    productDetail: (req, res) => {
        let productID = getProducts.find(productID =>{
            return productID.id === +req.params.id
        });
        res.render("products/productDetail", {title: 'NeoTech - Detalle de Producto', productID })
    },
    search: (req, res) => {
       
            let result = []
            getProducts.forEach(element => {
                if(element.description.toLowerCase().includes(req.query.keywords.toLowerCase())) {
                    result.push(element)
                }
            });
                res.render('products/results', {
                    result,
                    title: 'NeoTech - Resultado de busqueda',
                    products: getProducts
                })
        
        },
    }

