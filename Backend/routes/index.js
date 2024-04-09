const express = require("express");
const app = express();
const router   = express.Router();
const controllers = require("./../controllers/controllers");
const mongoose = require('./../conexion/conexion')
const authRequire = require('./../middlewares/validateToken'); // con que se  mantendra el control de que ruta es necesario que se logee
const { Usuario } = require("../models/models"); 

mongoose(); //Iniciando conexion a la base de datos mongoose 

app.use(express.static('public'));



//peticiones GET Y POST DE PAGOS 

router.get('/panel',(req,res) =>{

res.render('saludo.ejs')

} );


router.post('/register', controllers.registro);


router.post('/login',controllers.login)


router.post('/logout',controllers.logout)



router.get("/profile",authRequire , async (req,res)=>{
    
    const userFound = await Usuario.findById(req.user.id); //el metodo finById busca si ese usuario esta en la base de datos  
    console.log(userFound)
    
    if(!userFound) return  res.status(400).json({message : 'usuario no encontrado'})

     res.send('acceso exitoso')
})





module.exports = router;