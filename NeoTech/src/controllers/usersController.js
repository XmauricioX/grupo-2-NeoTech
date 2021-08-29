let { getUsers, writeUsersJSON} = require('../data/dataBase')
const { validationResult } = require('express-validator')
//modulo de express-validator para poder trabajar con los resultados de la validacion
const bcrypt = require('bcryptjs')


module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            title: 'NeoTech - Iniciar Sesion',
        })
    },
    register: (req, res) => {
        res.render('users/register', {
            title: 'NeoTech - Registro',
            session: req.session
        })
    },
    userRegister: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let lastID = 0;
    
            getUsers.forEach(user => {
                if(user.id > lastID) {
                    lastID = user.id
                }
            });
    
            let {firstName,
                lastName,
                email,
                password,
                } = req.body
    
            let newUsers = {
                id: lastID + 1,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email,
                password: bcrypt.hashSync(password, 10),
                admin: false,
                image: "default-image.png"
            };
    
            getUsers.push(newUsers);
    
            writeUsersJSON(getUsers);
    
            res.redirect('/')

        } else {
            res.render('users/register', {
                title: 'NeoTech - Registro',
                errors: errors.mapped(),
                old: req.body
            })
        }
    }
}