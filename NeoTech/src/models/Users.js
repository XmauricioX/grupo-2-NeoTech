const fs = require("fs")

const user = {

    fileName: "../data/users.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUSer.id === +id);
        return userFound;
    },

    create: (userData)=>{

    }

}

console.log(user.findByPk(3));