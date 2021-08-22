const { check } = require('express-validator');

module.exports = [
    check('firstName')//nombre del input
        .notEmpty().withMessage("*Este campo es obligatorio").bail()
        .isLength({ min: 2 }),
        //.isLength() debe pasarse como parametro el largo de caracteres que quiera como min y max 
        //notEmpty() esta validacion indica que no puede estar vacia
        //whitMessage() permite pasar un mensaje a la validacion del input
    check('lastName')  
        .notEmpty().withMessage("*Este campo es obligatorio"),

    check('email')  
        .isEmail().withMessage("*Debes completar un email válido"),
    
    check('password')
        .isLength({ min:5, max:20 }).withMessage("*La contraseña debe ser mayor a 5 caracteres"),
]