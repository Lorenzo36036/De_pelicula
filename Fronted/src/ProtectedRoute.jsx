import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';
import Cookie from 'js-cookie'



function ProtectedRoute() {
  
   const {isAuthenticate} = useAuth(); // Corregida la desestructuración del array
   const cookie = Cookie.get(); 
 
   if (!cookie.token){
   alert("Debes iniciar secion primero por favor :D");
   return  <Navigate to="/login" replace />;
  } 

  return <Outlet />;
}

export default ProtectedRoute;

