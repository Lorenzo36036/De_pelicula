import './App.css'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import PanelPage from "./page/PanelPage";
import DonacionPage from './page/DonacionPage';


function App() {
  const s = "hola";

  return (
    <div className='app'>
    <BrowserRouter>
     <nav className='navbar navbar-dark bg-dark' >
     <header>
      <h3 className='text-white text-focus-in'><i className="bi bi-film"></i> De Pelicula<i className="bi bi-film"></i></h3>
     <Link className='link .text-focus-in'   to='/'><i className="bi bi-house-door"></i> Panel</Link>
     <Link className='link .text-focus-in'   to='/donar' ><i className="bi bi-cash"></i>Donar</Link>
     <Link className='link .text-focus-in'   to='/movimientos'><i className="bi bi-bank"></i>Movimientos</Link>
     <Link className='link .text-focus-in'   to='/registro' >Registro</Link>
     <Link className='link .text-focus-in'   to='/login' >Login</Link>
     </header>
     </nav>
     <Routes>
     <Route path="/registro" element={<RegisterPage />}></Route>
     <Route path="/login" element={<LoginPage />}></Route>
     <Route path="/" element={<PanelPage />}></Route>
     <Route path="/donar" element={<DonacionPage />}></Route>
     <Route path="/movimiento" element={s}></Route>
     </Routes>
    </BrowserRouter>


    
    

    </div>
  )
}

export default App
