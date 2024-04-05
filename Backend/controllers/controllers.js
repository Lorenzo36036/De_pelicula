const User = require('./../models/models');


controllers = {};



controllers.registro = async (req,res)=>{ //para registrar usuario 
 
 try{
    const {username, password, email} = req.body; //recibiendo datos

    const newUser = new USer(  //creando objeto usuario 
      {
      username, 
      password, 
      email
      })
   
   await newUSer.save();  //guardando en la base de datos mongoDB   
   res.send('REGISTRO EXITOSO');
  
 }catch(error){
    console.log(error);
 }
 

}



controllers.login = (req,res)=>{ 
    res.send('Login exitoso');
   }
   
   
   






module.exports = controllers;