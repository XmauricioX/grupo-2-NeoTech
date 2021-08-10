let fs = require('fs')


let dbusers = JSON.parse(fs.readFileSync('./src/data/usuarios.json', 'utf-8'))


module.exports = dbusers;