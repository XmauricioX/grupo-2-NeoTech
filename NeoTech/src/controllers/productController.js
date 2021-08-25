let { getProducts } = require("../data/dataBase");

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

    ///////////////////////////////////////////////////////////
    productCategories: (req,res) =>{
        let categoryId = req.params.category.trim()

        let categoryFound = getProducts.filter(product => product.category == categoryId)
        //de getProducts fitramos el producto cuya categoria sea igual a la recibida por parametro
        res.render('products/productList', {
            title: 'NeoTech - Lista de Productos',
            category : categoryFound,
            
        })
    },
    ////////////////////////////////////////////////////////////////////
}
