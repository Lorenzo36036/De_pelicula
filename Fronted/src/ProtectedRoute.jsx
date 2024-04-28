import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';
import Cookie from 'js-cookie'



function ProtectedRoute() {
  
   const {isAuthenticate, loading} = useAuth(); // Corregida la desestructuración del array
   
   if (!loading && !isAuthenticate){
   alert("Debes iniciar secion primero por favor :D");
   return  <Navigate to="/login" replace />;
  } 

  return <Outlet />;
}

export default ProtectedRoute;

