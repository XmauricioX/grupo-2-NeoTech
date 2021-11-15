let db = require('../database/models')
const {validationResult} = require('express-validator')
const {Op} = require("sequelize");

module.exports = {

    panel: (req, res) => {
        db.Users.findByPk(req.session.user.id)
        .then(user => {
            res.render('admin/adminPanel', {
                title: 'NeoTech - Panel General',
                session: req.session,
                user
            })
        })
    },
    formAddCategory: (req, res) => {
        const category = db.Categories.findAll()
        const brands = db.Brands.findAll()

        Promise.all([category, brands])
            .then(([categorias, marcas]) => {
                res.render("admin/admin-add-category", {
                    title: 'NeoTech - Agregar Categorias',
                    session: req.session,
                    categorias,
                    marcas
                })
            })
            .catch(err => console.log(err))
    },
    formAddBrand: (req, res) => {
        const category = db.Categories.findAll()
        const brands = db.Brands.findAll()

        Promise.all([category, brands])
            .then(([categorias, marcas]) => {
                res.render("admin/admin-add-brand", {
                    title: 'NeoTech - Agregar Marcas',
                    session: req.session,
                    categorias,
                    marcas
                })
            })
            .catch(err => console.log(err))
    },
    addCategory: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let {
                brandCategory
            } = req.body

            db.Categories.create({
                    category_name: brandCategory,
                })
                .then(() => {
                    res.redirect('/administrador/editar-producto')
                })
                .catch(err => console.log(err))

        } else {

            const category = db.Categories.findAll()
            const brands = db.Brands.findAll()

            Promise.all([category, brands])
                .then(([categorias, marcas]) => {
                    res.render("admin/admin-add-category", {
                        title: 'NeoTech - Agregar Categorias',
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body,
                        categorias,
                        marcas
                    })
                })
                .catch(err => console.log(err))
        }
    },
    addBrand: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let {
                brandCategory
            } = req.body

            db.Brands.create({
                    brand_name: brandCategory,
                })
                .then(() => {
                    res.redirect('/administrador/editar-producto')
                })
                .catch(err => console.log(err))

        } else {

            const category = db.Categories.findAll()
            const brands = db.Brands.findAll()

            Promise.all([category, brands])
                .then(([categorias, marcas]) => {
                    res.render("admin/admin-add-brand", {
                        title: 'NeoTech - Agregar Marcas',
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body,
                        categorias,
                        marcas
                    })
                })
                .catch(err => console.log(err))
        }
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
                brand,
                product,
                price,
                category,
                color,
                description
            } = req.body

            db.Products.create({
                    brand_id: brand,
                    product_name: product,
                    price: price,
                    categoryId: category,
                    color: color,
                    description: description,
                    images: req.file && req.file.filename
                    //Si req.file existe(si subieron un archivo), guarda el nombre de ese archivo en el JSON, y si no guarda el "default-image.png".
                })
                .then(res.redirect('/administrador/editar-producto'))
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
                .catch(err => console.log(err))
        }
    },
    editProduct: (req, res) => {

        db.Products.findAll({
                include: [{
                    association: 'category'
                }, {
                    association: 'brand'
                }]
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
    // formEditProduct: (req, res) => {
        
    //     db.Products.findByPk((req.params.id), {
    //         include: [{
    //             association: 'category'
    //         }, {
    //             association: 'brand'
    //         }]
    //     })
    //         .then(product => {
    //             // res.send(product)
    //             res.render("admin/admin-edit-product-form", {
    //                 title: 'NeoTech - Editar Producto',
    //                 session: req.session,
    //                 product
    //             })
    //         })
    //         .catch(err => console.log(err))
    // },
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

            db.Products.update({
                    images: req.file && req.file.filename,
                    product_name: product.trim(),
                    color: color.trim(),
                    description: description.trim(),
                    price: price.trim(),
                    categoryId: category,
                    brand_id: brand
                }, {
                    where: {
                        id: req.params.id
                    }
                })
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
    adminUsers:(req,res) => {
        db.Users.findByPk(req.params.id)
        .then(user =>  {
            if(user.user_rol == 1){
                // res.send("este es admin")
                db.Users.update(
                    {
                        user_rol: 0
                    },
                    {
                        where: {id: user.id}
                    }).catch(er => console.log("ERROR ES : "+er))
                    res.redirect('/administrador/usuarios')
        }else{
                // res.send("este no es admin")
                    db.Users.update({
                        user_rol : 1
                    },
                    {
                        where: {id: user.id}
                    }).catch(er => res.send("err="+er))
                    res.redirect('/administrador/usuarios')
        }
    }).catch(err => console.log(err)) 
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
        res.render("admin/admin-edit-account", {
            title: 'NeoTech - Editar Cuenta',
            session: req.session
        })
    },
    deleteBrand: (req, res) => {
        db.Products.destroy({ where : { brand_id : req.params.id }})
        db.Brands.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(res.redirect('/administrador/editar-producto'))
            .catch(err => console.log(err))
    },
    deleteCategory: (req, res) => {
        db.Products.destroy({ where : { categoryId : req.params.id }})
        db.Categories.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(res.redirect('/administrador/editar-producto'))
            .catch(err => console.log(err))
    },
    editUser: (req, res) => {},
    searchProducts: (req, res) => {
        db.Products.findAll({
                include: [{
                    association: "brand"
                }, {
                    association: "category"
                }],
                where: {
                    [Op.or]: [{
                            product_name: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            description: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            color: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            price: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                    ]
                },
            })
            .then(products => {
                // res.send(product)
                res.render('admin/adminResults', {
                    title: 'NeoTech - Resultado de busqueda',
                    products,
                    session: req.session
                })
            })
    },
    searchUsers: (req, res) => {
        db.Users.findAll({
                include: [{
                    association: "addresses"
                }],
                where: {
                    [Op.or]: [{
                            id: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            first_name: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            last_name: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                        {
                            email: {
                                [Op.like]: `%${req.query.keywords.toLowerCase().trim()}%`
                            }
                        },
                    ]
                },
            })
            .then(users => {
                // res.send(users)
                res.render('admin/admin-users', {
                    title: 'NeoTech - Resultado de busqueda',
                    users,
                    session: req.session
                })
            })
    },
}