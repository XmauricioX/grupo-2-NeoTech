const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
<<<<<<< HEAD
const { Op } = require("sequelize");
=======
const {
    Op
} = require("sequelize");
>>>>>>> 64a95096d358028279cd08031865a218765543ba
const {
    promiseImpl
} = require('ejs');

module.exports = {
    productList: (req, res) => {
        db.Products.findAll({
                include: [{
                    association: 'category'
                }, {
                    association: 'brand'
                }]
                //en product list mandamos la asociacion con las tablas de marca y categoria 
                //para poder renderizar en la vista los datos que contengan las mismas
            })
            .then(products => {
                res.render('products/productList', {
                    title: 'NeoTech - Lista de Productos',
                    products,
                    session: req.session
                })
            })
            .catch(err => console.log(err))
    },
    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id, {
                include: [{
                    association: 'category'
                }, {
                    association: 'brand'
                }]
            })
            .then(product => {
                res.render('products/productDetail', {
                    title: 'NeoTech - Detalle de Producto',
                    productID: product,
                    session: req.session
                })
            })
            .catch(err => console.log(err))
    },
    productCategory: (req, res) => {

        db.Categories.findOne({
<<<<<<< HEAD
             where: {
                category_name: req.params.categoria
            },
            include:[{association:"products"}]
        })
        .then(categories => {
            res.render('products/productCategory', {
                title: 'NeoTech - Categorías',
                categories,
                session: req.session
            })
        })
        .catch(err => res.send(err))
=======
                where: {
                    category_name: req.params.categoria
                },
                include: [{
                    association: "products"
                }]
            })
            .then(categories => {
                res.render('products/productCategory', {
                    title: 'NeoTech - Categorías',
                    categories,
                    session: req.session
                })
            })
            .catch(err => res.send(err))
>>>>>>> 64a95096d358028279cd08031865a218765543ba
    },
    productBrand: (req, res) => {

        db.Brands.findOne({
                where: {
                    brand_name: req.params.marca,
                },
<<<<<<< HEAD
                include:[{association:"products"}]
=======
                include: [{
                    association: "products"
                }]
>>>>>>> 64a95096d358028279cd08031865a218765543ba
            })
            .then(brands => {
                res.render('products/productBrand', {
                    title: 'NeoTech - Marcas',
                    brands,
                    session: req.session
                })
            })
            .catch(err => res.send(err))
    },
    search: (req, res) => {
        db.Products.findAll({
<<<<<<< HEAD
                where: {
                    product_name: {
                        [Op.like]: '%' + req.query.keywords.toLowerCase() + '%'
                    },
                },
                include: [{
                        association: "brand"
                    },
                    {
                        association: "category"
                    }
                ]
=======
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
>>>>>>> 64a95096d358028279cd08031865a218765543ba
            })
            .then(product => {
                res.render('products/results', {
                    title: 'NeoTech - Resultado de busqueda',
                    product,
                    session: req.session
                })
<<<<<<< HEAD
        })
=======
            })
>>>>>>> 64a95096d358028279cd08031865a218765543ba
    }
}