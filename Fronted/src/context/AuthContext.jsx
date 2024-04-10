import { createContext, useState, useContext } from "react";
import {registerPage} from '../api/registro.js';

export const authContext = createContext();
 

export const useAuth = () =>{ //trae todos los datos sin necesidad de exportar el authContext y useContext
const contexto = useContext(authContext)
 
if(!contexto){
    throw new Error("Error")
}

return contexto;
}


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

   const signup = async (user) =>{
    try {
    
        const res = await registerPage(user);
        // Manejar cualquier acción adicional después de un registro exitoso, como redireccionar a otra página
        setUser(res.data);

    

    } catch (error) {
        // Manejar errores de solicitud
        console.error('Error al registrar:', error);
      }      
   }
  
  

    return(
    <authContext.Provider value={{
       signup,
       user
        }}>
      {children}

    </authContext.Provider>



  )}