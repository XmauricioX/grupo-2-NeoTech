module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            title: 'NeoTech - Iniciar Sesion',
        })
    },
    register: (req, res) => {
        res.render('users/register', {
            title: 'NeoTech - registro',
        })
    }
}