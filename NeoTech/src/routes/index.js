var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.index)
/* GET CONTACT PAGE */
router.get('/contacto', controller.contact)


module.exports = router;
