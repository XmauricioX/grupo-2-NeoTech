let { getProducts } = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {
            title: 'NeoTech - Lista de Productos',
            products: getProducts
        })
    },
    productDetail: (req, res) => {
        let productID = getProducts.find(productID => {
            return productID.id === +req.params.id
        });
        res.render("products/productDetail", {
            title: 'NeoTech - Detalle de Producto',
            productID
        })
    },
    search: (req, res) => {

        let result = []
        getProducts.forEach(element => {
            if (element.description.toLowerCase().includes(req.query.keywords.toLowerCase())) {
                result.push(element)
            }
        });
        res.render('products/results', {
            result,
            title: 'NeoTech - Resultado de busqueda',
            products: getProducts
        })
    },
    productCategory: (req, res) => {
        let category = req.params.categoria.trim()
        //la variable category guarda el parametro que reciba por ruta /categoria/
        let categoryFind = []

        getProducts.forEach(product => {
            if (product.category === category) {
                categoryFind.push(product)
            }
        })

        if (categoryFind.length > 0) {
            res.render('products/productCategory', {
                categories: categoryFind,
                title: "NeoTech - Categorías"
            })
        } else {
            res.render('products/productCategory', {
                getProducts,
                title: "NeoTech - Categorías"
            })
        }
    },
    trademark: (req, res) => {
        let trademark = req.params.marca.trim()
        //la variable trademark guarda 
        let trademarkFind = []

        getProducts.forEach(product => {
            if (product.trademark === trademark) {
                trademarkFind.push(product)
            }
        })
            res.render('products/productTrademark', {
                trademark: trademarkFind,
                title: "NeoTech - Marcas"
            })
        } 
    }







