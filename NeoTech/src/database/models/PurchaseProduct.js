module.exports = (sequelize, dataTypes) =>{

    let alias = 'PurchaseProducts';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        purchase_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        product_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: 'purchase_products'
    }

    const PurchaseProduct = sequelize.define(alias, cols, config);

    PurchaseProduct.associate = models => {
        PurchaseProduct.belongsTo(models.Purchases, {
            as: 'purchase',
            foreignKey: 'purchase_id'
        });
        PurchaseProduct.belongsTo(models.Products, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }

    return PurchaseProduct

}