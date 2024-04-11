import {useForm} from "react-hook-form";
import Boton from "./../components/Boton"

function LoginPage(){
const {register, handleSubmit} = useForm();
    

return(
<div>
      <h1 className="text-center font-weight-bold m-4">INICIO DE SECCION</h1>

    <form>
           <div className="form-group">
           <label htmlFor="exampleInputEmail" className="font-weight-bold  fs-5 ">Email</label>    
           <input type="email"  id="exampleInputEmail" className="form-control border border-dark " {...register('Email')}  placeholder="Email"/>
           


           <label htmlFor="exampleInputPassword" className="font-weight-bold  fs-5 mt-3">Password</label>    
           <input type="password" className="form-control border border-dark " id="exampleInputPassword" {...register('password')} placeholder="Password" />
           </div>
   
  
           <div className="text-center">
             <Boton type="submit" contenido="Login"  /> 
           </div>
    </form>

</div>  
 )}



export default LoginPage;
