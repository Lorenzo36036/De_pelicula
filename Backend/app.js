const express = require('express');
const cors = require('cors'); //permite abrir el server backend para que se conecten desde el fronted
const app = express();
const routes= require('./routes/index');  
const bodyParser = require('body-parser'); // controlador de peticiones de formularios
const path = require('path');
const morgan = require('morgan') //se utiliza para mensaje de consolas de cuanto duro la peticion
const cookieParse = require('cookie-parser');

app.use(morgan('dev')); // cada vez que se refresque nos  muestra  mensaje por consola del tiempo en ms

//el cors siempre va primero
//para hacer que se pueda conectar con el lado del cliente
app.use(cors({
    origin: 'http://localhost:5000' // Permitir peticiones desde este origen
  }));
  

app.set('PUERTO', process.env.PORT || 4000); // configurando para que se escuche en el puerto 3000
app.set('view engine', 'ejs');
app.set(path.join(__dirname,'/views'));// seleccionando carpeta de vista


app.use(bodyParser.json()); //recibira informacion del navegador
app.use(bodyParser.urlencoded({ extended: false }));//recibira informacion del formulario enviado  //extends:false se usa para dar a entender que no se enviara imagenes o cosas complicadas en un formulario
app.use(cookieParse())//se usa para leer token de las cookie directamente.                                                  

//usando rutas
app.use('/api',routes);

//Static Files o archivos estaticos estaran ubicado en el archivo public
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('PUERTO'),()=>{

console.log("puerto",app.get('PUERTO'))

});
