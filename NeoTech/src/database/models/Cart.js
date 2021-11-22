module.exports = (sequelize, dataTypes) =>{
    let alias = 'Carts';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        user_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        product_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        }
    }

    let config = {
        tableName: 'carts',
        timestamps: false
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.Users, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.Products, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return Cart

}