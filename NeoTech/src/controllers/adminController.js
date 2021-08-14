let { getProducts, getUsers, writeJSON} = require('../data/dataBase')

module.exports = {
    deleteProduct: (req, res) => {
        getProducts.find(product => product.id === +req.params.id)

        getProducts.forEach(product => {
            if (product.id === +req.params.id){
				let productDeleted = getProducts.indexOf(product)
				getProducts.splice(productDeleted, 1)
		}
        });

        writeJSON(getProducts)

        res.send('producto eliminado')
    },
    /* deleteProduct: (req, res) => {
        getproducts.forEach(product => {
            if(product.id === +req.params.id){
                let productDeleted = getSucursales.indexOf(sucursal);
                getSucursales.splice(productDeleted, 1)
            }
        })

        writeJson(getSucursales);
        
        res.redirect('/admin/sucursales');
    }, */

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
    formEditProducto: (req,res)=>{
        res.render("admin/admin-edit-product-form", {title: 'NeoTech - Form Editar Producto'})
    },
    editProducto: (req,res)=>{
        res.render("admin/admin-edit-product", {title: 'NeoTech - Editar Producto', products: getProducts})
    },
    ventaStock: (req,res)=>{
        res.render("admin/admin-sell-stock", {title: 'NeoTech - Ventas Y Stock'})
    },
    usuarios: (req,res)=>{
        res.render("admin/admin-users", {title: 'NeoTech - Usuarios', users: getUsers})
    }
}

