module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
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
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT
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

    return User;
}