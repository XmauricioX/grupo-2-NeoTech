let { getUsers, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator')
//modulo de express-validator para poder trabajar con los resultados de la validacion
const bcrypt = require('bcryptjs')

module.exports = {
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
                if (user.id > lastID) {
                    lastID = user.id
                }
            });

            let { firstName,
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

            res.redirect('/cuenta/iniciar-sesion')

        } else {
            res.render('users/register', {
                title: 'NeoTech - Registro',
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    login: (req, res) => {
        res.render('users/login', {
            title: 'NeoTech - Iniciar Sesion',
            session: req.session
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = getUsers.find(user => user.email === req.body.email)
            req.session.user = {
                id: user.id,
                userName: user.firstName + " " + user.lastName,
                email: user.email,
                avatar: user.image,
                rol: user.admin
            }
            /* if(req.body.remember){
                res.cookie('cookieDali', req.session.user, {maxAge: 1000*60})
            } */
            res.locals.users = req.session.users

            res.redirect('/')
        } else {
            res.render('users/login', {
                title: 'NeoTech - Iniciar Sesion',
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        /* if(req.cookies.cookieDali){
            res.cookie('cookieDali', '', {maxAge: -1})
        } */
        
        res.redirect('/');
        
    }
}
   