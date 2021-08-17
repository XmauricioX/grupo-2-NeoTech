// Archivo que deja registro de las pagina que entro el usuario
//creado por Franco, si algo no funciona echenle la culpa a el
const fs = require('fs');

function logMiddleware(req,res,next) {
    fs.appendFileSync('log,txt', 'Se ingreso en la pagina ' + req.url)
    //usamos el metodo fs.writeFileSync para poder escribir un archivo
    next();
}

module.exports = logMiddleware;