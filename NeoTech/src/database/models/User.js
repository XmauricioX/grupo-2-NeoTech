module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        first_name: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100)
        },
        user_rol: {
            type: dataTypes.INTEGER(1),
            allowNull: false
        },
        phone:{
            type: dataTypes.STRING(50)
        }
    }
    
    let config = {
        tableName: "users",
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Addresses, {
            as: "addresses",
            foreignKey: "user_id"
        })
    }

    return User;
}