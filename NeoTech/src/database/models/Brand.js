module.exports = (sequelize, dataTypes) => {
    let alias = "Brands";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        brand_name: {
            type: dataTypes.STRING(40),
            allowNull: false 
        }
    }
    
    let config = {
        tableName: "brands",
        timestamps: false
    }

    const Brand = sequelize.define(alias, cols, config)
 
    Brand.associate = models => {
        Brand.hasMany(models.Products, {
            as: "products",
            foreignKey: "brand_id",
            onDelete: 'cascade',
            hooks: true
        })
    }

    return Brand;
}
