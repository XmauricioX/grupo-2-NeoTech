const { check } = require('express-validator')

module.exports = [
    
    check('product')
        .notEmpty().withMessage("El campo es obligatorio"),

    check('price')
        .isLength({ min:1 }).withMessage("El campo es obligatorio"),

    check('color')
        .notEmpty().withMessage("El campo es obligatorio")
]