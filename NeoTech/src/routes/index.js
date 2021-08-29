var express = require('express');
var router = express.Router();
let {
    index,
    contact
    } = require('../controllers/indexController')


/* GET home page. */
router.get('/', index)
/* GET contact page */
router.get('/contacto', contact)


module.exports = router;
