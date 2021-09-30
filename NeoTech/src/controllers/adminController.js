let db = require('../database/models')
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
        .catch(err => console.log(err))
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
                images: req.file && req.file.filename
            })
            .then(res.redirect('/administrador/panel-general'))
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
        
        db.Products.findAll({
            include: [{association: 'category'}, {association: 'brand'}]
        })
        .then(products => {
            res.render('admin/admin-edit-product', {
                title: 'NeoTech - Editar Producto',
                products,
                session: req.session
            })
        })
        .catch(err => console.log(err))
        
    },
    formEditProduct: (req, res) => {
        const category = db.Categories.findAll()
        const brand = db.Brands.findAll()

        Promise.all([category, brand])
        .then(([categories, brands]) => {
            db.Products.findByPk(req.params.id)
            .then(product => {
                res.render("admin/admin-edit-product-form", { 
                    title: 'NeoTech - Editar Producto',
                    session: req.session,
                    product,
                    categories,
                    brands
                })
            })
        })
        .catch(err => console.log(err))
    },
    logicEditProduct: (req, res) => {

        let errors = validationResult(req)
         
        if (errors.isEmpty()) { 

        let { 
            product,
            price,
            color,
            description,
            category,
            brand
        } = req.body;

        db.Products.update(
            {
                images: req.file && req.file.filename,
                product_name: product.trim(),
                color: color.trim(),
                description: description.trim(),
                price: price.trim(),
                categoryId: category,
                brand_id: brand
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )     
        .then(res.redirect('/administrador/editar-producto'))
        .catch(err => console.log(err))
        

        } else { 
        
            const category = db.Categories.findAll()
            const brand = db.Brands.findAll()

            Promise.all([category, brand])
            .then(([categories, brands]) => {
                db.Products.findByPk(req.params.id)
                .then(product => {
                    res.render("admin/admin-edit-product-form", { 
                        title: 'NeoTech - Editar Producto',
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session,
                        product,
                        categories,
                        brands
                    })
                })
            })
            .catch(err => console.log(err))
        } 
    },
    deleteProduct: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect('/administrador/editar-producto'))
        .catch(err => console.log(err))
    },
    saleStock: (req, res) => {
        res.render("admin/admin-sell-stock", {
            title: 'NeoTech - Ventas Y Stock',
            session: req.session
        })
    },
    users: (req, res) => {
        db.Users.findAll()

        .then(users => {
            res.render('admin/admin-users', {
                title: 'NeoTech - Usuarios',
                users,
                session: req.session
            })
        })
        .catch(err => console.log(err))
    },
    deleteUsers: (req, res) => {
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
    deleteBrand: (req, res) => {
        db.Brands.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect('/administrador/panel-general'))
        .catch(err => console.log(err))
    },
    deleteCategory: (req, res) => {
        db.Categories.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect('/administrador/panel-general'))
        .catch(err => console.log(err))
    },
    editUser: (req, res) => {
        
    },
}
