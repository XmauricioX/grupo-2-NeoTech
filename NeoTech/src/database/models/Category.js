module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        category_name: {
            type: dataTypes.STRING(40),
            allowNull: false 
        }
    }
    
    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = models => {
        Category.hasMany(models.Products, {
            as: "products",
            foreignKey: "categoryId",
            onDelete: 'cascade',
            hooks: true
        })
    }

    return Category;
}
