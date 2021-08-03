module.exports = {
    panel: (req, res) => {
        res.render('admin/adminPanel', {title: 'NeoTech - Panel General'})
    },
    agregarProducto: (req,res) =>{
        res.render("admin/admin-add-product", {title: 'NeoTech - Agregar Producto'})
    },
    editCuenta: (req,res)=>{
        res.render("admin/admin-edit-account", {title: 'NeoTech - Editar Cuenta'})
    },
    formEditProducto: (req,res)=>{
        res.render("admin/admin-edit-product-form", {title: 'NeoTech - Editar Producto'})
    },
    editProducto: (req,res)=>{
        res.render("admin/admin-edit-product", {title: 'NeoTech - Editar Producto'})
    },
    ventaStock: (req,res)=>{
        res.render("admin/admin-sell-stock", {title: 'NeoTech - Ventas Y Stock'})
    },
    usuarios: (req,res)=>{
        res.render("admin/admin-users", {title: 'NeoTech - Usuarios'})
    }

    /* contact: (req, res) => {
        res.render('contact', {
            title: 'NoeTech - Contacto',
        })
    } */
}
