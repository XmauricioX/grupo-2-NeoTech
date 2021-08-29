const { check } = require('express-validator')

module.exports = [
    check('trademark')
        .notEmpty().withMessage("el campo es obligatorio").bail()
        .isLength({ min: 4 }).withMessage("El nombre debe tener como mínimo 4 caracteres"),
   
    check('product')
        .notEmpty().withMessage("El campo es obligatorio"),

    check('price')
        .isLength({ min:1 }).withMessage("Este campo es obligatorio")
]