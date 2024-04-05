const mongoose = require('mongoose');



const connectDB = async () =>{
    try{

        await mongoose.connect('mongodb://localhost:27017/Depelicula');
        console.log('conexion exitosa')

    }catch(error){
        console.log(error)
    }
   
}
 

module.exports = connectDB;

