// let { getProducts } = require("../data/dataBase");

// module.exports = {
//     productList: (req, res) => {
//         res.render('products/productList', {
//             title: 'NeoTech - Lista de Productos',
//             products: getProducts,
//             session: req.session
//         })
//     },
//     productDetail: (req, res) => {
//         let productID = getProducts.find(productID => {
//             return productID.id === +req.params.id
//         });
//         res.render("products/productDetail", {
//             title: 'NeoTech - Detalle de Producto',
//             productID,
//             session: req.session
//         })
//     },
//     search: (req, res) => {
//         let result = []
//         getProducts.forEach(element => {
//             if (element.product.toLowerCase().includes(req.query.keywords.toLowerCase()) || element.trademark.toLowerCase().includes(req.query.keywords.toLowerCase())) {
//                 result.push(element)
//             }
//         });
//         res.render('products/results', {
//             result,
//             title: 'NeoTech - Resultado de busqueda',
//             products: getProducts,
//             session: req.session
//         })
//     },
//     productCategory: (req, res) => {
//         let category = req.params.categoria.trim()
//         //la variable category guarda el parametro que reciba por ruta /categoria/
//         let categoryFind = []

//         getProducts.forEach(product => {
//             if (product.category === category) {
//                 categoryFind.push(product)
//             }
//         })

//         if (categoryFind.length > 0) {
//             res.render('products/productCategory', {
//                 categories: categoryFind,
//                 title: "NeoTech - Categorías",
//                 session: req.session,
//             })
//         } else {
//             res.render('products/productCategory', {
//                 getProducts,
//                 title: "NeoTech - Categorías",
//                 session: req.session
//             })
//         }
//     },
//     trademark: (req, res) => {
//         let trademark = req.params.marca.trim()
//         //la variable trademark guarda 
//         let trademarkFind = []

//         getProducts.forEach(product => {
//             if (product.trademark === trademark) {
//                 trademarkFind.push(product)
//             }
//         })
//         res.render('products/productTrademark', {
//             trademark: trademarkFind,
//             title: "NeoTech - Marcas",
//             session: req.session
//         })
//     }
// }

//////////////////////////////////////////////////////////////////////////////


const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { promiseImpl } = require('ejs');

module.exports = {
    productList: (req, res) => {
        db.Products.findAll({
            include: [{association: 'category'}, {association: 'brand'}]
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
            include: [{association: 'category'}, {association: 'brand'}]
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
    productCategory: (req,res) => {
        db.Products.findAll({
            include: [{association: 'category'}, {association: 'brand'}],
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
        .catch(err => res.send("ERROR WACHIN: " + err))
    },
productBrand: (req,res) =>{
    db.Products.findAll({
        include: [{association: 'category'}, {association: 'brand'}],
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
    .catch(err => res.send( "ERROR PERRO: " + err))
    }
}


// db.Categories.findOne({
//     where: {
//     id: req.params.categoria
// },
// })
// .then(category => {
// res.send([category])
// // var BUSCA = [category]
// // res.render('products/productCategory', {
// //     title: 'NeoTech - Categorías',
// //     BUSCA,
// //     session: req.session
// // })
// })
// .catch(err => res.send("ERROR WACHIN: " + err))
// }