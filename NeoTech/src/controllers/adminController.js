let { getProducts, getUsers, writeProductJSON} = require('../data/dataBase');
const { get } = require('../routes');

module.exports = {
    deleteProduct: (req, res) => {
        getProducts.find(product => product.id === +req.params.id)

        getProducts.forEach(product => {
            if (product.id === +req.params.id){
				let productDeleted = getProducts.indexOf(product)
				getProducts.splice(productDeleted, 1)
		}
        });

        writeProductJSON(getProducts)

        res.send('producto eliminado')
    },

    panel: (req, res) => {
        res.render('admin/adminPanel', {title: 'NeoTech - Panel General'})
    },
    formAddProduct: (req,res) =>{
        res.render("admin/admin-add-product", {title: 'NeoTech - Agregar Producto'})
    },
    addProduct: (req,res) =>{ 
        res.send(req.body)
    },
    editAccount: (req,res)=>{
        res.render("admin/admin-edit-account", {title: 'NeoTech - Editar Cuenta'})
    },
    formEditProduct: (req,res)=>{
        let product = getProducts.find(product =>{
		return product.id === +req.params.id
		}); //al ponerle un + es lo mismo que hacer Number()
        res.render("admin/admin-edit-product-form", { product ,title: 'NeoTech - Form Editar Producto'})
    },
    editProduct: (req,res)=>{
        res.render("admin/admin-edit-product", {title: 'NeoTech - Editar Producto', products: getProducts})
    },
    logicEditProduct: (req,res)=>{
        let { marca, precio, categoria, color, descripcion } = req.body;

        getProducts.forEach(product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.marca = marca,
                product.precio = precio,
                product.categoria = categoria,
                product.color = color,
                product.descripcion = descripcion
            }
        })

        writeProductJSON(getProducts);

        res.redirect('/administrador/editar-producto')
            
    },
    saleStock: (req,res)=>{
        res.render("admin/admin-sell-stock", {title: 'NeoTech - Ventas Y Stock'})
    },
    users: (req,res)=>{
        res.render('admin/admin-users', {title: 'NeoTech - Usuarios', users: getUsers})
    }
}

