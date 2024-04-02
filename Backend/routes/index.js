const express = require("express");
const app = express();
const router   = express.Router();
const controllers = require("./../controllers/controllers");


app.use(express.static('public'));



//peticiones GET Y POST DE PAGOS 

router.get('/panel',(req,res) =>{

res.render('saludo.ejs')

} );



router.post('/login',controllers.login)

router.post('/register', controllers.registro);







module.exports = router;