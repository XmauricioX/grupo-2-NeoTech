let { getProducts, getUsers, writeProductJSON, writeUsersJSON } = require('../data/dataBase')

module.exports = {

    panel: (req, res) => {
        res.render('admin/adminPanel', { title: 'NeoTech - Panel General' })
    },
    formAddProduct: (req, res) => {
        res.render("admin/admin-add-product", { title: 'NeoTech - Agregar Producto' })
    },
    addProduct: (req, res) => {
        res.send(req.body)
    },
    editAccount: (req, res) => {
        res.render("admin/admin-edit-account", { title: 'NeoTech - Editar Cuenta' })
    },
    formEditProduct: (req, res) => {
        res.render("admin/admin-edit-product-form", { title: 'NeoTech - Form Editar Producto' })
    },
    editProduct: (req, res) => {
        res.render("admin/admin-edit-product", { title: 'NeoTech - Editar Producto', products: getProducts })
    },

    deleteProduct: (req, res) => {
        getProducts.find(product => product.id === +req.params.id)

        getProducts.forEach(product => {
            if (product.id === +req.params.id) {
                let productDeleted = getProducts.indexOf(product)
                getProducts.splice(productDeleted, 1)
            }
        });

        writeProductJSON(getProducts)

        res.redirect('/administrador/editar-producto')
    },

    saleStock: (req, res) => {
        res.render("admin/admin-sell-stock", { title: 'NeoTech - Ventas Y Stock' })
    },
    users: (req, res) => {
        res.render('admin/admin-users', { title: 'NeoTech - Usuarios', users: getUsers })
    },
    deleteUsers: (req, res) => {
        getUsers.find(user => user.id === +req.params.id)

        getUsers.forEach(user => {
            if (user.id === +req.params.id) {
                let userDeleted = getUsers.indexOf(user)
                getUsers.splice(userDeleted, 1)
            }
        });

        writeUsersJSON(getUsers)

        res.redirect('/administrador/usuarios')
    },
}