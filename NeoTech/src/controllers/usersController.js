const { validationResult } = require('express-validator')
//modulo de express-validator para poder trabajar con los resultados de la validacion
const bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = {
    registerForm: (req, res) => {
        res.render('users/register', {
            title: 'NeoTech - Registro',
            session: req.session
        })
    },
    userRegister: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let { 
                first_name,
                last_name,
                email,
                password,
            } = req.body

            db.Users.create({
                first_name: first_name.trim(),
                last_name: last_name.trim(),
                email: email,
                password: bcrypt.hashSync(password, 10),
                image: "default.png",
                user_rol: 0,
                phone: "",
            })
            .then(() => {
                res.redirect('/cuenta/iniciar-sesion')
            })
            .catch(err => console.log(err))
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
            title: 'NeoTech - Iniciar Sesión',
            session: req.session,
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            db.Users.findOne({
                where: {
                    email: req.body.email,
                },
            }).then(user => {
                req.session.user = {
                    id: user.id,
                    first_name: user.first_name,
                    email: user.email,
                    image: user.image,
                    user_rol: user.user_rol
                }

                if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                    res.cookie('cookieUser',req.session.user,{expires: new Date(Date.now() + 900000), httpOnly: true})
                }
                res.locals.user = req.session.user
    
                res.redirect('/')
            })
            .catch(err => console.log(err))

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
        if(req.cookies.cookieUser){
            res.cookie('cookieUser','',{maxAge:-1})
        }
        
        return res.redirect('/')
    },
    userProfile: (req, res) =>{
        db.Users.findByPk(req.session.user.id)
        .then(user => {
            db.Addresses.findOne({
                where: {
                    user_id: user.id
                }
            })
            .then(address => {
                res.render('users/userProfile', {
                    title: 'NeoTech - Tu Perfil',
                    session: req.session,
                    user,
                    address
                })
            })
        })
    },
    userEdit: (req, res) => {
        db.Users.findByPk(req.session.user.id)
        .then(user => {
            db.Addresses.findOne({
                where: {
                    user_id: user.id
                }
            })
            .then(address => {
                res.render('users/userEdit', {
                    title: 'NeoTech - Tu Perfil',
                    session: req.session,
                    user,
                    address
                })
            })
        })
    },
    userUpdate: (req, res) =>{
        let errors = validationResult(req)
            
        if(errors.isEmpty()){
            
            let { 
                first_name, 
                last_name,
                phone,
                address,
                pc,
                country,
                province,
                city
            } = req.body;

            db.Users.update(
                {
                    first_name,
                    last_name,
                    phone,
                    image: req.file && req.file.filename,
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(user => {
                db.Addresses.findAll({
                    where:{
                        user_id: req.params.id
                    }
                })
                .then(result => {
                    if (result.length > 0) {
                        db.Addresses.update({
                            address: address,
                            pc: pc,
                            country: country,
                            province: province,
                            city: city,
                        }, {
                            where: {
                                user_id: req.params.id
                            }
                        })
                        .then(result => {
                            res.redirect('/cuenta/editar-usuario')
                        })
                    } else {
                        db.Addresses.create({
                            address: address,
                            pc: pc,
                            country: country,
                            province: province,
                            city: city,
                            user_id: req.params.id,
                        })
                        .then(result => {
                            res.redirect('/cuenta/editar-usuario')
                        })
                    }
                })
            })
        } else {
            res.render('/users/userEdit', {
                title: 'NeoTech - Tu Perfil',
                errors: errors.mapped(),
                old: req.body,
                session:req.session
            })   
        }
    },
    deleteUser: (req, res) => {
            db.Users.destroy({
                    where: {
                        id: +req.params.id
                    }
                })
                .then(user => {
                    req.session.destroy();
                    if(req.cookies.cookieUser){
                        res.cookie('cookieUser','',{maxAge:-1})
                    }
                    
                    res.redirect('/')
                })
                // primero borra el usuario, despues cierra la sesion y por ultimo redirecciona al home
},
    buyProduct: (req, res) => {
        res.render('users/buy', {
            title: 'NeoTech - Compra',
            session: req.session
            // agregar errores en form 
        })
    }
}