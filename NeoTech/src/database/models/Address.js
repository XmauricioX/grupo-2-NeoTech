module.exports = (sequelize, dataTypes) => {
    let alias = "Addresses";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        address: {
            type: dataTypes.STRING(40),
        },
        pc: {
            type: dataTypes.STRING(30)
        },
        country: {
            type: dataTypes.STRING(40)
        },
        province: {
            type: dataTypes.STRING(40)
        },
        city: {
            type: dataTypes.STRING(40)
        },
        user_id: {
            //agregar FK
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }
    
    let config = {
        tableName: "addresses",
        timestamps: false
    }

    const Address = sequelize.define(alias, cols, config)

    return Address;
}