const { check } = require('express-validator')

module.exports = [
    
    check('product')
        .notEmpty().withMessage("El campo es obligatorio.")
        .isLength({ min:3 }).withMessage("El nombre del producto debe tener al menos 3 caracteres.").bail(),

    check('price')
        .isLength({ min:2 }).withMessage("El campo es obligatorio."),

    check('color')
        .notEmpty().withMessage("El campo es obligatorio.")
        .isLength({ min:3 }).withMessage("El nombre del color debe tener al menos 3 caracteres."),

    check('description')
        .notEmpty().withMessage("El campo es obligatorio.")
        .isLength({ min:20 }).withMessage("La descripción debe tener al menos 20 caracteres.")
]