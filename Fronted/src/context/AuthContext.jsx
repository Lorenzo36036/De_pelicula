import { createContext, useState, useContext, useEffect } from "react";
import {registerPage, loginPage} from '../api/auth.js';


export const authContext = createContext();
 
                                //!IMPORTANTE useAuth es el que siempre se va usar! cuando importes
export const useAuth = () =>{ //Con esta funcion es la que exportaremos y se usara para usar todas las variables modificadas o cambiadas en authContext.Provider

 const contexto = useContext(authContext) 
 
if(!contexto){
    throw new Error("Error")
}

return contexto;
}


export const AuthProvider = ({children}) => { //aqui adentro hiran todo lo que se usara en authContext.Provider

    const [user, setUser] = useState(null); //esto se usara para almacenar la informacion para mostrar solo en fronted y el user se pasara en el contexto si es de usarlo para mostrar la informacion
    const [isAuthenticate, setIsAuthenticate] = useState(false) //esto solo almacenara valor bool si el usuario se registro se lo pasara a la variable con esto podemos hacer validaciones y la variable isAuthenticate se pasa como true


 
   const signup = async (user) =>{ //ESTO ES PARA EL REGISTRO DEL USUARIO PARA GUARDARLO 
    try {
    
        const res = await registerPage(user); //se envia los datos del usuario a la base de datos esa funcion es del archivo API ahi esta la ruta en donde se registrara
        // Manejar cualquier acción adicional después de un registro exitoso, como redireccionar a otra página
        setUser(res.data);//se almacena los datos para pasarlo en user si es de mostrarlo usando esa variable
        setIsAuthenticate(true); //aqui estamos cambiando el estado a true de que fue registrado exitosamente se le pasa  true a la variable is autenthicate
        console.log(isAuthenticate)
      } catch (error) {
        // Manejar errores de solicitud
        console.error('Error al registrar:', error);
      }      
   }
  
   const signin = async (user) => { //para logear a los usuarios 
      try{
        const res = await loginPage(user);
        console.log(res)
      }catch(error){
            console.log(error)
      }

      


   }
  

    return(
      //En "value" van todas las funciones o variables que se exportaran para usarse  
    <authContext.Provider value={{ 
       signup,
       user,
       isAuthenticate, //se utilizara para saber si el usuario esta autentificado 
       signin }}>
      {children}

    </authContext.Provider>



  )}