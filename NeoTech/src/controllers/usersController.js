let { getUsers, writeUsersJSON} = require('../data/dataBase')
let User = require("../models/Users")

module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            title: 'NeoTech - Iniciar Sesion',
        })
    },
    logicLogin: (req,res) =>{
        let userToLogin = User.findByField("email", req.body.email);
        // esto te trae el objeto con los datos del usuario usando 
        // como parametro el email ya que no se puede repetir
        
        // esto compara que el email y la pass sean identicas
        // a las del objeto que busca en la base de datos
        if(( userToLogin.password === req.body.password )  && (userToLogin.email === req.body.email)){
            req.session.userLogged = userToLogin;

            //cookie para recordar al user

            if (req.body.remember_user) {
                res.coockie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2 })
            }

            res.render('user', {
                title: "Perfil de usuario" ,
                user: req.session.userLogged
            })
        }else{
            res.render('users/login', {
                title: 'NeoTech - Iniciar Sesion',
            })
        }

    },
    profile: (req, res) =>{
        console.log(req.coockieParser.userEmail);
        return res.render("user")
    },
    register: (req, res) => {
        res.render('users/register', {
            title: 'NeoTech - registro',
        })
    },
    userRegister: (req, res) => {
        let lastID = 1;

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
            email: email.trim(),
            password: password.trim(),
            admin: false,
            image: "default-image.png"
        };

        getUsers.push(newUsers);

        writeUsersJSON(getUsers);

        res.redirect('/')
    }
}