const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {
    Op
} = require("sequelize");
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
        db.Products.findAll({
                include: [{
                    association: 'category'
                }, {
                    association: 'brand'
                }],
                where: {
                    id: req.params.categoria,
                },
            })
            .then(category => {
                //res.send([category])
                //var BUSCA = [category]
                res.render('products/productCategory', {
                    title: 'NeoTech - Categorías',
                    category,
                    session: req.session
                })
            })
            .catch(err => res.send(err))
    },
    productBrand: (req, res) => {
        db.Products.findAll({
                include: [{
                    association: 'category'
                }, {
                    association: 'brand'
                }],
                where: {
                    id: req.params.marca,
                },
            })
            .then(trademark => {
                //res.send(trademark)
                res.render('products/productTrademark', {
                    title: 'NeoTech - Marcas',
                    trademark,
                    session: req.session
                })
            })
            .catch(err => res.send(err))
    },
    search: (req, res) => {
        db.Products.findAll({
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
            })
            .then(product => {
                res.render('products/results', {
                    title: 'NeoTech - Resultado de busqueda',
                    product,
                    session: req.session
                })
        })
        .catch(err => res.send(err))
    }
    }



