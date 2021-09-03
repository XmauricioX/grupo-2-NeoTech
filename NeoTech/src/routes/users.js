var express = require('express');
var router = express.Router();
let {
    register,
    userRegister,
    login,
    processLogin,
    logout
    } = require('../controllers/usersController')
let registerValidator = require('../validations/registerValidator');
let loginValidator = require('../validations/loginValidator')

const notLoged = require("../middlewares/usersSession")
const loged = require("../middlewares/logedMiddleware")

/* GET FORM REGISTER */
router.get('/registro', loged ,register)
router.post('/registro', registerValidator, userRegister)

/*  FORM LOGIN */
router.get('/iniciar-sesion', loged , login);
router.post('/iniciar-sesion',loginValidator, processLogin);
router.get('/cerrar-sesion', logout);




module.exports = router;