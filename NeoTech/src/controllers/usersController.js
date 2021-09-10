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
                image: "default.png",
                tel: "",
                address: "",
                pc: "",
                province:"",
                city:""
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
        let user = getUsers.find(user => user.id === +req.params.id)

        res.render('users/login', {
            title: 'NeoTech - Iniciar Sesion',
            session: req.session,
            user
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let user = getUsers.find(user => user.email === req.body.email)
            
            req.session.user = {
                id: user.id,
                firstName: user.firstName,
                email: user.email,
                image: user.image,
                admin: user.admin
            }
            if(req.body.remember){ // Si el checkbox está seleccionado creo la cookie
                res.cookie('cookieUser',req.session.user,{expires: new Date(Date.now() + 900000), httpOnly: true})
            }
            res.locals.user = req.session.user

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
        if(req.cookies.cookieUser){
            res.cookie('cookieUser','',{maxAge:-1})
        }
        
        return res.redirect('/')
    },
    userProfile: (req, res) =>{
        let user = getUsers.find(user=> user.id === req.session.user.id);
        res.render('users/userProfile', {
            title: 'NeoTech - Tu Perfil',
            session: req.session,
            user
        })
    },
    userEdit: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id)
        res.render('users/userEdit', { 
            title: 'NeoTech - Tu Perfil',
            session: req.session,
            user
        })
    },
    userUpdate: (req, res) =>{
        let errors = validationResult(req)
            
        if(errors.isEmpty()){
            let user = getUsers.find(user => user.id === +req.params.id)
            
            let { 
                firstName, 
                lastName,
                tel,
                address,
                pc,
                province,
                city
            } = req.body;

            user.id = user.id
            user.firstName = firstName
            user.lastName = lastName
            user.tel = tel
            user.address = address
            user.pc = pc
            user.province = province
            user.city = city
            user.image = req.file ? req.file.filename : user.image

            writeUsersJSON(getUsers)

            delete user.password
            
            req.session.user = user

            res.redirect('/cuenta/editar-usuario')
                  
        } else{
            res.render('/users/userEdit', {
                title: 'NeoTech - Tu Perfil',
                errors: errors.mapped(),
                old: req.body,
                session:req.session
            })   
        }
    },
   
            }