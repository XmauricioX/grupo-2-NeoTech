module.exports = {
    index: (req, res) => {
        res.render('home', {
            title: 'NeoTech - Inicio'
        })
    },
    contact: (req, res) => {
        res.render('contact', {
            title: 'NoeTech - Contacto',
        })
    }
}

