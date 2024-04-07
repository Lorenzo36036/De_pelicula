//Esquemas o shemas para definir el tipo de datos a recibir en la  coleccion
const mongoose = require('mongoose'); //se usa para crear el esquema de la base de datos donde se almacenara los valores



const userSchema = new mongoose.Schema({
    usuario : {
        type : String, 
        required : true,
        trim : true //quita espacios en blanco
       },
    email : { 
        type : String,
         required : true,
         trim : true, //quita espacios en blanco
         unique : true //diciendo que solo puede aver solo un email no valores duplicados
        },
    password : {
        type : String, 
        required : true,
        trim : true //quita espacios en blanco
    }
})



const donacionSchema = new mongoose.Schema({
    referencia: {
        type: Number,
        required: true,
        unique: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});


 const Usuario  = mongoose.model(`Usuario`, userSchema);
 const Donacion = mongoose.model('Donacion',donacionSchema);
 
 module.exports = {Usuario, Donacion};