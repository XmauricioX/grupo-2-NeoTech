module.exports = {
    panel: (req, res) => {
        res.render('admin/adminPanel', {
            title: 'NeoTech - Panel General',
        })
    },
    agregarProducto: (req,res) =>{
        res.render("admin/admin-add-product")
    },
    editCuenta: (req,res)=>{
        res.render("admin/admin-edit-account")
    },
    formEditProducto: (req,res)=>{
        res.render("admin/admin-edit-product-form")
    },
    editProducto: (req,res)=>{
        res.render("admin/admin-edit-producto")
    },
    ventaStock: (req,res)=>{
        res.send("admin/admin-sell-stock")
    },
    usuarios: (req,res)=>{
        res.render("admin/admin-users")
    }

    /* contact: (req, res) => {
        res.render('contact', {
            title: 'NoeTech - Contacto',
        })
    } */
}
