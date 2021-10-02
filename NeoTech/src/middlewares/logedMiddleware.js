module.exports = function loged(req, res, next) {
    if (req.session.user) {
        return res.redirect("/")
    }
    next()
}
// si no estas logueado no te deja pasar (para que no entre al registro por ejemplo)