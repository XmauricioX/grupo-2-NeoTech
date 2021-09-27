const { check, body } = require('express-validator');
// const { getUsers } = require('../data/dataBase')
const db = require('../database/models')


module.exports = [
    check('first_name')//nombre del input
        .notEmpty().withMessage("*El campo nombre es obligatorio").bail()
        .isLength({ min: 2 }),
        //.isLength() debe pasarse como parametro el largo de caracteres que quiera como min y max 
        //notEmpty() esta validacion indica que no puede estar vacia
        //whitMessage() permite pasar un mensaje a la validacion del input
    check('last_name')  
        .notEmpty().withMessage("*El campo apellido es obligatorio"),

    check('email')  
        .isEmail().withMessage("*Debes ingresar un email válido"),

    body('email').custom(value => {
        return db.Users.findOne({
            where: {
                email: value
            }
        })
        .then(user => {
            if(user) {
                return Promise.reject('El email ya está registrado')
            }
        })
    }),
    
    
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