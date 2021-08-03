var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')


/* GET login page. */
router.get('/iniciar-sesion', controller.login);
/* GET register page. */
router.get('/registro', controller.register)


module.exports = router;