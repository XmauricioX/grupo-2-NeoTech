let fs = require('fs')

let DBParseado = JSON.parse(fs.readFileSync('./src/data/articulos.json', 'utf-8'))



module.exports = DBParseado;