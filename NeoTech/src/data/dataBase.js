let fs = require('fs')

module.exports = {
    getProducts : JSON.parse(fs.readFileSync('./src/data/products.json', 'utf-8')),
    getUsers : JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8')),
    writeProductJSON : (dataBase) => {
        fs.writeFileSync('./src/data/products.json', JSON.stringify(dataBase), "utf-8")
    },
    writeUsersJSON : (dataBase) => {
        fs.writeFileSync('./src/data/users.json', JSON.stringify(dataBase), "utf-8")
    }
}