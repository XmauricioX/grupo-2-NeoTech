var express = require('express');
var router = express.Router();
let controller = require('../controllers/adminController')



router.get('/panel-general', controller.panel)

/* router.get('/contacto', controller.contact) */


module.exports = router;