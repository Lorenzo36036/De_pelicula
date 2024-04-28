const {Usuario} = require('./../models/models');
const bcrypt = require('bcrypt'); //encriptador
const createAcessToken = require('../libs/jwt') //usando la variable donde se asignara el TOKEN
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require('./../config')


controllers = {};



controllers.registro = async (req,res)=>{ //para registrar usuario 

   const {usuario, email, password} = req.body; //recibiendo datos
 
   try{
    const res = await Usuario.findOne({email})
  
    if(res) return res.status(400).json(["email esta registrado"])

     passwordHash = await bcrypt.hash(password, 10) //encriptando el password   

    const User = new Usuario(  //creando objeto usuario 
      {
      usuario, 
      email,
      password : passwordHash //pasando el hash encriptado al password 
      })
   
      const Userfound =  await User.save();  //guardando en la base de datos mongoDB  y pasando a variable save
      
      const token    =  await createAcessToken({id : Userfound._id}); //creando un token con el valor return de la funcion createAccesToken 
      res.cookie('token',token);  //asignando token a la cookie para que se almacena el acceso del usuario
      res.status(200).json({ 
       messaje : user, 
    }) 

    console.log('MI token:',token)
 
    
     
 }catch(error){
    res.status(500).json({  //Error interno del servidor". Esto significa que algo salió mal en el servidor al procesar la solicitud del cliente 
      messaje : error.messaje
    })
 }
 
}

//logea cuenta y le asigna el token
controllers.login = async (req,res)=>{ 
   
   const {email, password} = req.body; //recibiendo datos
   

   try{
    
    const userFound = await Usuario.findOne( {email} ); //se busca el usuario a traves del correo email usando el metodo findOne cuando se encuentra el usuario les pasa todas las props a la variable !OJO! usuario es el objeto donde se asigna los atributos de la coleccion en la carpeta models escrito en  models.js 
    

    if(!userFound) return res.status(400).json( {messaje : "Email no encontrado"} ); //si no encuentra el email del usuario entonces devuelve un mensaje de no encontrado como res entonces el codigo de abajo no se ejecuta

    const respuesta = await bcrypt.compare(password, userFound.password) //se compara el password  que ingreso el usuario, con el password registrado de la base de datos para verificar si es correcto !OJO! De pendiendo de la respuesta me devuelve un true de que si son iguales o un false de que no son iguales
      

    if(!respuesta) return res.status(400).json({messaje : 'password incorrect'}) //si  es false devuelve esa respeusta  por lo tanto el token de abajo no se ejecutara
      
      const token  =  await createAcessToken({id : userFound._id}); //creando un token con el valor return de la funcion createAccesToken 
     
      res.cookie('token', token);
     
      res.status(200).json({ 
       messaje : "usuario logeado correctamente"
       }) 
   
      console.log('MI token:',token)
       
     
 }catch(error){
    console.log(error);
 }

   }
   
  
//deslogea al usuario
controllers.logout = async (req,res) =>{
res.cookie('token','',{
  expires : new Date(0)
})
 return res.sendStatus(200)


}  
   


controllers.verifyToken = async (req, res) => {
  const token = req.cookies.token; // Obtener el valor de la cookie solo "token" Importante el cookies se usa por que se exporto en app.js como cookie-parser

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, usuario) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await Usuario.findById(usuario.id); // Buscar al usuario por su ID

    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.usuario,
      email: userFound.email
    });
  });
}






module.exports = controllers;