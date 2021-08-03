module.exports = {
    panel: (req, res) => {
        res.render('/admin/adminPanel', {
            title: 'NeoTech - Panel General',
        })
    },
    /* contact: (req, res) => {
        res.render('contact', {
            title: 'NoeTech - Contacto',
        })
    } */
}
