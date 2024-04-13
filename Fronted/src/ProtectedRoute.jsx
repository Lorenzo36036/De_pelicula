import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  
   const {isAuthenticate} = useAuth(); // Corregida la desestructuración del array

  if (!isAuthenticate){
   alert("Debes iniciar secion primero por favor :D");
   return  <Navigate to="/login" replace />;
  } 

  return <Outlet />;
}

export default ProtectedRoute;

