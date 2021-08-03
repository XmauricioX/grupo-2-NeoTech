var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')


/* GET users page. */
router.get('/iniciar-sesion', controller.login);
router.get('/registro', controller.register)


module.exports = router;