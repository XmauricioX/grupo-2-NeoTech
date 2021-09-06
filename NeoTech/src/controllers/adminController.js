let { getProducts, getUsers, writeProductJSON, writeUsersJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator')

module.exports = {

    panel: (req, res) => {
        res.render('admin/adminPanel', { 
            title: 'NeoTech - Panel General',
            session: req.session
        })
            
    },
    formAddProduct: (req, res) => {
        res.render("admin/admin-add-product", { 
            title: 'NeoTech - Agregar Producto',
            session: req.session 
        })
    },
    addProduct: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastID = 1;

            getProducts.forEach(product => {
                if (product.id > lastID) {
                    lastID = product.id
                }
            });

            let { trademark,
                product,
                price,
                category,
                color,
                description
            } = req.body

            let newProduct = {
                id: lastID + 1,
                trademark: trademark.trim(),
                product: product.trim(),
                price: +price.trim(),
                category: category.trim(),
                color: color.trim(),
                description: description.trim(),
                image: req.file ? req.file.filename : "default-image.png",
                //Si req.file existe(si subieron un archivo), guarda el nombre de ese archivo en el JSON, y si no guarda el "default-image.png".
            };

            getProducts.push(newProduct);

            writeProductJSON(getProducts);

            res.redirect('/administrador/editar-producto')

        } else {

            res.render("admin/admin-add-product", {
                title: 'NeoTech - Agregar Producto',
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    editProduct: (req, res) => {
        res.render('admin/admin-edit-product', {
            title: 'NeoTech - Editar Producto',
            products: getProducts,
            session: req.session
        })
    },
    formEditProduct: (req, res) => {
        let product = getProducts.find(product => {
            return product.id === +req.params.id
        }); //al ponerle un + es lo mismo que hacer Number()
        res.render("admin/admin-edit-product-form", { 
            product,
            title: 'NeoTech - Form Editar Producto',
            session: req.session
        })
    },
    logicEditProduct: (req, res) => {
        let errors = validationResult(req)
        let product = getProducts.find(product => {
            return product.id === +req.params.id
        });
        if (errors.isEmpty()) {

            let { productName,
                 trademark, 
                 price, 
                 category, 
                 color, 
                 description, 
                } = req.body;

            getProducts.forEach(product => {
                if (product.id === +req.params.id) {
                    product.id = product.id,
                    product.product = productName.trim(),
                    product.trademark = trademark.trim(),
                    product.price = price.trim(),
                    product.category = category.trim(),
                    product.color = color.trim(),
                    product.description = description.trim(),
                    product.image = req.file ? req.file.filename : product.image
                    //Si req.file existe(si subieron un archivo), guarda el nombre de ese archivo en el JSON, y si no guarda el nombre que ya estaba cargado anteriormente en el mismo JSON(LA IMAGEN QUE CARGAMOS ANTERIORMENTE).
                }
            })

            writeProductJSON(getProducts);

            res.redirect('/administrador/editar-producto')

        } else {
            res.render("admin/admin-edit-product-form", {
                title: 'NeoTech - Editar Producto',
                product,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
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
        res.render("admin/admin-sell-stock", { title: 'NeoTech - Ventas Y Stock',             session: req.session
    })
    },
    users: (req, res) => {
        res.render('admin/admin-users', { title: 'NeoTech - Usuarios', users: getUsers,             session: req.session
    })
    },
    editUser: (req, res) => {

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
    editAccount: (req, res) => {
        res.render("admin/admin-edit-account", { title: 'NeoTech - Editar Cuenta', session: req.session
    })
    },
}
