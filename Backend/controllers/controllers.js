const {Usuario} = require('./../models/models');
const bcrypt = require('bcrypt'); //encriptador
const createAcessToken = require('../libs/jwt') //usando la variable donde se asignara el TOKEN

controllers = {};



controllers.registro = async (req,res)=>{ //para registrar usuario 
   const {usuario, email, password} = req.body; //recibiendo datos
 
   try{
     passwordHash = await bcrypt.hash(password, 10) //encriptando el password   

    const User = new Usuario(  //creando objeto usuario 
      {
      usuario, 
      email,
      password : passwordHash //pasando el hash encriptado al password 
      })
   
      const save =  await User.save();  //guardando en la base de datos mongoDB  y pasando a variable save
      
      const token    =  await createAcessToken({id : save._id}); //creando un token con el valor return de la funcion createAccesToken 
      res.cookie('token',token);  
      res.json({ 
       messaje : "usuario creado correctamente"
    }) 
    
      console.log(save)
      console.log('MI token:',token)
       
  
 }catch(error){
    console.log(error);
 }
 

}



controllers.login = (req,res)=>{ 
    res.send('Login exitoso');
   }
   
   
   






module.exports = controllers;