const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('./../config');

function createAcessToken(idUser){
    
   return new Promise((resolve,reject) => {
        
    jwt.sign(
            idUser,//id del usuario creado
            TOKEN_SECRET,{  //asignando clave secreta
             expiresIn : '1d' //expira en un dia el token
            }, 
        (err,token) => {
         if(err) reject(err);
         resolve(token);
        }
        );

     

    })


}


module.exports = createAcessToken;




