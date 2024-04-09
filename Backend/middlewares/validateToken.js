const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('./../config');

const authRequire = (req, res, next) => {

const { token } = req.cookies //obteniendo datos del token para usarlo para encontrar el token de  usuario
 
console.log(token)

if(!token) return res.status(401).json({ message : "Autorizacion denegada token no valido"});

jwt.verify(token, TOKEN_SECRET, (error, user) =>{

    
if(error) return res.status(403).json({message : "invalide token"})
//req.user es la peticion que llega como parametro 

req.user  = user //se pasa el parametro user del metodo verify  para ser usado en req para usarse en las otras funciones donde se necesite validar el token para el usuario

next();

})


}





module.exports = authRequire;