var express = require('express');
var router = express.Router();
let {
    registerForm,
    userRegister,
    login,
    processLogin,
    logout,
    userProfile,
    userEdit,
    userUpdate,
    buyProduct,
    deleteUser
    } = require('../controllers/usersController')
let registerValidator = require('../validations/registerValidator');
let loginValidator = require('../validations/loginValidator');
let uploadAvatarUser = require('../middlewares/uploadAvatarUser');
let userSession = require('../middlewares/usersSession')


const notLoged = require("../middlewares/usersSession")
const loged = require("../middlewares/logedMiddleware")


/* GET FORM REGISTER */
router.get('/registro', loged ,registerForm)
router.post('/registro', registerValidator, userRegister)

/*  FORM LOGIN */
router.get('/iniciar-sesion', loged , login);
router.post('/iniciar-sesion',loginValidator, processLogin);
router.get('/cerrar-sesion', logout);

/* GET USER FORM */
router.get('/editar-usuario', userSession, userProfile)
/* EDIT USER FORM */
router.get('/editar-usuario/:id', userEdit)
router.put('/editar-usuario/:id', uploadAvatarUser.single('user-image'),userSession, userUpdate)
// RUTA DELETE PARA PODER ELIMINAR CUETNA DE USUARIO
router.delete('/editar-usuario/:id', deleteUser)

// BUY FORM (poner middleware de inicio de sesion)
router.get('/buy', buyProduct)

module.exports = router;