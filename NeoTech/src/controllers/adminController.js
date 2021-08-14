let db = require('../data/dataBase')
let dbu = require('../data/dataBaseUser')

module.exports = {
    panel: (req, res) => {
        res.render('admin/adminPanel', {title: 'NeoTech - Panel General'})
    },
    formAgregarProducto: (req,res) =>{
        res.render("admin/admin-add-product", {title: 'NeoTech - Agregar Producto'})
    },
    agregarProducto: (req,res) =>{ 
        res.send(req.body)
    },
    editCuenta: (req,res)=>{
        res.render("admin/admin-edit-account", {title: 'NeoTech - Editar Cuenta'})
    },
    adminEdit: (req,res)=>{
        res.render("admin/admin-edit-product", {title: 'NeoTech - Editar Producto', db})
    },// vista de editar
    formEditProducto: (req,res)=>{
        let product = db.find(product =>{
			return product.id === +req.params.id
		}); //al ponerle un + es lo mismo que hacer Number()
        res.render("admin/admin-edit-product-form", { product ,title: 'NeoTech - Form Editar Producto'})
    },// formulario de editar
    editarProducto: (req, res) => {
        res.send(req.body)
    },// logica de editar
    ventaStock: (req,res)=>{
        res.render("admin/admin-sell-stock", {title: 'NeoTech - Ventas Y Stock'})
    },
    usuarios: (req,res)=>{
        res.render("admin/admin-users", {title: 'NeoTech - Usuarios', dbu})
    }
}

