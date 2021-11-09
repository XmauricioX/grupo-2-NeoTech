module.exports = {
    index: (req, res) => {
        res.render('home', {
            title: 'NeoTech - Inicio',
            session: req.session,
        })
    },
    contact: (req, res) => {
        res.render('contact', {
            title: 'NeoTech - Contacto',
            session: req.session
        })
    }
}

