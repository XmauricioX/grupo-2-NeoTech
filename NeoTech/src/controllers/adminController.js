let { getProducts, getUsers, writeProductJSON} = require('../data/dataBase')

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
        
        // res.send('producto eliminado')
        res.redirect('/administrador/editar-producto')
    },

    panel: (req, res) => {
        res.render('admin/adminPanel', {title: 'NeoTech - Panel General'})
    },

// añadir productos//////////////////////////////
    formAddProduct: (req,res) =>{
        res.render("admin/admin-add-product", {title: 'NeoTech - Agregar Producto'})
    },

    addProduct: (req,res) =>{ 
        let lastID = 1;

        getProducts.forEach(product => {
			if(product.id > lastID) {
				lastID = product.id
		    }
        });

        let {marca,
			producto,
			precio,
            categoria,
			color,
			descripcion
			} = req.body

        let newProduct = {
            id: lastID + 1,
            marca: marca.trim(),
            producto : producto.trim(),
            precio: precio.trim(),
            categoria: categoria.trim(),
            color: color.trim(),
            descripcion: descripcion.trim()
        };

        getProducts.push(newProduct);

        writeProductJSON(getProducts);

        res.redirect('/administrador/editar-producto')
    },
// fin añadir productos  ///////////////////////////////////////////

    editAccount: (req,res)=>{
        res.render("admin/admin-edit-account", {title: 'NeoTech - Editar Cuenta'})
    },
    formEditProduct: (req,res)=>{
        res.render("admin/admin-edit-product-form", {title: 'NeoTech - Form Editar Producto'})
    },
    editProduct: (req,res)=>{
        res.render("admin/admin-edit-product", {title: 'NeoTech - Editar Producto', products: getProducts})
    },
    saleStock: (req,res)=>{
        res.render("admin/admin-sell-stock", {title: 'NeoTech - Ventas Y Stock'})
    },
    users: (req,res)=>{
        res.render("/admin-users", {title: 'NeoTech - Usuarios'})
    }
}

