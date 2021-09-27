module.exports = function admin(req, res, next) {
    if (req.session.user.user_rol == 1) {
        next()
    }
    res.redirect("/")
}

// si sos admin te deja pasar al panel sino, no te deja