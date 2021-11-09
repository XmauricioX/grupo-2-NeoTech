var express = require('express');
var router = express.Router();
let {
    index,
    contact,
    } = require('../controllers/indexController');

const notLoged = require("../middlewares/usersSession")

/* GET home page. */
router.get('/', index)
/* GET contact page */
router.get('/contacto', notLoged , contact)


module.exports = router;
