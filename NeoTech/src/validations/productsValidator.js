const { check } = require('express-validator')

module.exports = [
    check('trademark')
        .notEmpty().withMessage("El campo es obligatorio")
        .isLength({ min: 4 }).withMessage("El nombre debe tener como mínimo 4 caracteres"),
   
    check('productName')
        .notEmpty().withMessage("El campo es obligatorio"),

    check('price')
        .isLength({ min:1 }).withMessage("El campo es obligatorio"),

    check('color')
        .notEmpty().withMessage("El campo es obligatorio"),

    check('description')
        .notEmpty().withMessage("El campo es obligatorio"),
]