controllers = {};



controllers.registro = (req,res)=>{
 const {username, password, email} = req.body;

 console.log(username, password, email)

 res.send('REGISTRO EXITOSO');
}

controllers.login = (req,res)=>{ 
    res.send('Login exitoso');
   }
   
   
   






module.exports = controllers;