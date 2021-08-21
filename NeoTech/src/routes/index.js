var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.index)
/* GET contact page */
router.get('/contacto', controller.contact)


module.exports = router;
