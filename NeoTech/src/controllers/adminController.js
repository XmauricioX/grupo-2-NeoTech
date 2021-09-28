let db = require('../database/models')
/* let { getProducts, getUsers, writeProductJSON, writeUsersJSON } = require('../data/dataBase'); */
const { validationResult } = require('express-validator')

module.exports = {

    panel: (req, res) => {
        res.render('admin/adminPanel', {
            title: 'NeoTech - Panel General',
            session: req.session
        })

    },
    formAddProduct: (req, res) => {
        const category = db.Categories.findAll()
        const brands = db.Brands.findAll()

        Promise.all([category, brands])
            .then(([categorias, marcas]) => {
                res.render("admin/admin-add-product", {
                    title: 'NeoTech - Agregar Producto',
                    session: req.session,
                    categorias,
                    marcas,
                })
            })


    },
    addProduct: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let {
                trademark,
                product,
                price,
                category,
                color,
                description
            } = req.body
            db.Products.create({
                brand_id: trademark,
                product_name: product,
                price: price,
                categoryId: category,
                color: color,
                description: description,
                images: req.file ? req.file.filename : "default-image.png",
                //Si req.file existe(si subieron un archivo), guarda el nombre de ese archivo en el JSON, y si no guarda el "default-image.png".
            })
                .then((product) => {
                    res.redirect('/', {
                    })
                })
                .catch(err => console.log(err))
        } else {
            const category = db.Categories.findAll()
            const brands = db.Brands.findAll()

            Promise.all([category, brands])
                .then(([categorias, marcas]) => {
                    res.render("admin/admin-add-product", {
                        title: 'NeoTech - Agregar Producto',
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session,
                        categorias,
                        marcas
                    })
                })
        }
    },
    editProduct: (req, res) => {
        res.render('admin/admin-edit-product', {
            title: 'NeoTech - Editar Producto',
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
        /*  let errors = validationResult(req)
         let product = getProducts.find(product => {
             return product.id === +req.params.id
         });
         if (errors.isEmpty()) { */

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

        /*  } else { */
        res.render("admin/admin-edit-product-form", {
            title: 'NeoTech - Editar Producto',
            product,
            errors: errors.mapped(),
            old: req.body,
            session: req.session
        })
        /*  } */
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
        res.render("admin/admin-sell-stock", {
            title: 'NeoTech - Ventas Y Stock',
            session: req.session
        })
    },
    users: (req, res) => {//Ariel
        db.Users.findAll()
            .then(users => {
                res.render('admin/admin-users', {
                    title: 'NeoTech - Usuarios',
                    users,
                    session: req.session
                })
            })
    },
    editUser: (req, res) => {

    },
    deleteUsers: (req, res) => {//Ariel
        db.Users.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(user => {
                res.redirect('/administrador/usuarios')
            })
    },
    editAccount: (req, res) => {
        res.render("admin/admin-edit-account",
            {
                title: 'NeoTech - Editar Cuenta',
                session: req.session
            })
    },
}
