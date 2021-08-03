module.exports = {
    login: (req, res) => {
        res.render('login', {
            title: 'NeoTech - Iniciar Sesion',
        })
    },
    register: (req, res) => {
        res.render('register', {
            title: 'NoeTech - registro',
        })
    }
}