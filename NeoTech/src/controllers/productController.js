module.exports = {
    productList: (req, res) => {
        res.render('productList', {
            title: 'NeoTech - Lista de Productos',
        })
    },
    productDetail: (req, res) => {
        res.render('productDetail', {
            title: 'NoeTech - Detalle de Producto',
        })
    }
}