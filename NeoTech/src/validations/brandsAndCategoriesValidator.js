const { check } = require('express-validator')

module.exports = [
    
    check('brandCategory')
        .notEmpty().withMessage("El campo es obligatorio y no puede ir vacío")

]