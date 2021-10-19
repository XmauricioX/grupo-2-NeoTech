const { check } = require('express-validator')

module.exports = [
    
    check('product')
        .notEmpty().withMessage("El campo es obligatorio.").bail(),

    check('price')
        .isLength({ min:1 }).withMessage("El campo es obligatorio."),

    check('color')
        .notEmpty().withMessage("El campo es obligatorio."),

    check('description')
        .notEmpty().withMessage("El campo es obligatorio.")
        .isLength({ min:20 }).withMessage("La descripción debe tener al menos 20 caracteres.")
]