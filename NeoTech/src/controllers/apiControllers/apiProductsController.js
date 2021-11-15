let db = require('../../database/models');

const getUrl = (req) => req.protocol+"://" +req.get('host') + req.originalUrl

module.exports = {
    productList: (req, res) => {
        // res.send("prueba")
        db.Products.findAll({
            include: [{
                association: 'category'
            }, {
                association: 'brand'
            }]
        })
        .then(products => res.json({
            meta:{
                endPoint: getUrl(req),
                status:200,
                totalProducts: products.length
            },
            data: products
        }))
        .catch(error => res.status(400).send(error))
        
    },
    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [{
                association: 'category'
            }, {
                association: 'brand'
            }]
        })
        .then(product => res.json({
            meta:{
                endPoint: getUrl(req),
                status:200,
            },
            data: product
        }))
        .catch(error => res.status(400).send(error))
    }
}