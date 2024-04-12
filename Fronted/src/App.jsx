import './App.css'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import PanelPage from "./page/PanelPage";
import MovimientoPage from "./page/MovimientoPage"
import ProtectedRoute  from "./ProtectedRoute";
import DonacionPage from './page/DonacionPage';


import {AuthProvider} from './context/AuthContext' //Se usara digamos como un div junto con sus hijos para que estos hijos tengan acceso a toda su informacion en este caso contexto


function App() {


  return (
    //Link se usa como enlaces clickeables mientras que Route renderiza los elementos jsx
    <div className='app'>
  
    <AuthProvider> {/* Aqui se esta viendo el uso que se leda se usa como padre y lo que heredaran son los hijos*/}

    <BrowserRouter> 
     <nav className='navbar navbar-dark bg-dark' >
     <header>
      <h3 className='text-white text-focus-in'><i className="bi bi-film"></i> De Pelicula<i className="bi bi-film"></i></h3>
     <Link className='link .text-focus-in'   to='/'><i className="bi bi-house-door"></i> Panel</Link>
     <Link className='link .text-focus-in'   to='/donar' ><i className="bi bi-cash"></i>Donar</Link>
     <Link className='link .text-focus-in'   to='/movimiento'><i className="bi bi-bank"></i>Movimientos</Link>
     <Link className='link .text-focus-in'   to='/registro' >Registro</Link>
     <Link className='link .text-focus-in'   to='/login' >Login</Link> 
     </header>
     </nav>
     
     <Routes>

     <Route path="/" element={<PanelPage />}></Route>
     <Route path="/registro" element={<RegisterPage />}></Route>
     <Route path="/login" element={<LoginPage />}></Route>
   
     <Route element = {<ProtectedRoute/>} > 
     <Route path="/donar" element={<DonacionPage />}></Route>
     <Route path="/movimiento" element={<MovimientoPage/>}></Route>
     </Route>


     </Routes>
    
    </BrowserRouter>
    
    </AuthProvider>

    
    

    </div>
  )
}

export default App
