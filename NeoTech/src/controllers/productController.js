let { getProducts } = require("../data/dataBase");

module.exports = {
    productList: (req, res) => {
        res.render('products/productList', {
            title: 'NeoTech - Lista de Productos',
            products: getProducts,
            session: req.session
        })
    },
    productDetail: (req, res) => {
        let productID = getProducts.find(productID => {
            return productID.id === +req.params.id
        });
        res.render("products/productDetail", {
            title: 'NeoTech - Detalle de Producto',
            productID,
            session: req.session
        })
    },
    search: (req, res) => {
        let result = []
        getProducts.forEach(element => {
            if (element.product.toLowerCase().includes(req.query.keywords.toLowerCase()) || element.trademark.toLowerCase().includes(req.query.keywords.toLowerCase())) {
                result.push(element)
            }
        });
        res.render('products/results', {
            result,
            title: 'NeoTech - Resultado de busqueda',
            products: getProducts,
            session: req.session
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
                title: "NeoTech - Categorías",
                session: req.session,
            })
        } else {
            res.render('products/productCategory', {
                getProducts,
                title: "NeoTech - Categorías",
                session: req.session
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
            title: "NeoTech - Marcas",
            session: req.session
        })
    }
}







