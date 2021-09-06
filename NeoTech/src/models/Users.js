const fs = require("fs")
let { getUsers, writeUsersJSON} = require('../data/dataBase')
const user = {

    findByPk: function (id) {
        let allUsers = getUsers;
        let userFound = allUsers.find(oneUser => oneUser.id === +id);
        return userFound;
    },

    findByField: function(field,text){
        let allUsers = getUsers;
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    }

}
module.exports = user;