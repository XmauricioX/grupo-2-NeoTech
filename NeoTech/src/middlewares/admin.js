module.exports = function admin(req, res, next) {
    if (req.session.user.rol == false) {
        return res.redirect("/")
    }
    next()
}

// si sos admin te deja pasar al panel sino, no te deja