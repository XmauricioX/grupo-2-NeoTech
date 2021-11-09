module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        product_name: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
        },
        color: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        images: {
            type: dataTypes.STRING(100),
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER,
            allowNull: false
            },
        brand_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Categories, {
            as: "category",
            foreignKey: "categoryId",
            onDelete: 'cascade'
        })
        Product.belongsTo(models.Brands, {
            as: "brand",
            foreignKey: "brand_id",
            onDelete: 'cascade'
        })
    }

    return Product;
}