const { check, body } = require('express-validator');
const { getUsers } = require('../data/dataBase')
module.exports = [
    check('firstName')//nombre del input
        .notEmpty().withMessage("*El campo nombre es obligatorio").bail()
        .isLength({ min: 2 }),
        //.isLength() debe pasarse como parametro el largo de caracteres que quiera como min y max 
        //notEmpty() esta validacion indica que no puede estar vacia
        //whitMessage() permite pasar un mensaje a la validacion del input
    check('lastName')  
        .notEmpty().withMessage("*El campo apellido es obligatorio"),

    check('email')  
        .isEmail().withMessage("*Debes ingresar un email válido"),

    body('email').custom(value => {
        let user = getUsers.filter(user=>{ 
            return user.email == value 
        })
        
        if(user == false){ 
            return true 
        }else{
            return false 
        }
    })
    .withMessage('El email ya está registrado'),
    
    check('password')
        .notEmpty()
        .withMessage('*Debes escribir tu contraseña')
        .isLength({ min: 6, max:12 }).withMessage("*La contraseña debe tener entre 6 y 12 caracteres"),

    body('repeatPassword').custom((value, {req}) => value !== req.body.password ? false : true)
        .withMessage('*Las contraseñas no coinciden'),

    check('terms')
        .isString('on')
        .withMessage('*Debes aceptar las bases y condiciones')
]