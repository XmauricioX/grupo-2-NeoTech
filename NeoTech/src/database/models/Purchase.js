module.exports = (sequelize, dataTypes) =>{

    let alias = 'Purchases';

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
        }
    }

    let config = {
        tableName: "purchases"
    }

    const Purchase = sequelize.define(alias, cols, config);

    Purchase.associate = models => {
        Purchase.belongsTo(models.Users, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Purchase.belongsToMany(models.Products, {
            as: 'products',
            through: 'purchase_products',
            foreignKey: 'purchase_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }

    return Purchase

}