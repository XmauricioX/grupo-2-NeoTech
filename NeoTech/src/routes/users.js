var express = require('express');
var router = express.Router();
let {
    login,
    register,
    userRegister,
    } = require('../controllers/usersController')

/* GET USERS PAGE. */

/* GET FORM LOGIN */
router.get('/iniciar-sesion', login);

/* GET FORM REGISTER */
router.get('/registro', register)

/* POST FORM REGISTER */
router.post('/registro', userRegister)




module.exports = router;