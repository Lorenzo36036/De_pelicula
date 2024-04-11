import {useForm} from "react-hook-form";
import {useAuth}   from "./../context/AuthContext"
import {useEffect}  from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";


function RegisterPage(){

const {register, handleSubmit, formState : {errors}, watch} = useForm(); //formState es para activar los errors, handleSubmit es una funcion para poder enviar informacion
const {signup, user, isAuthenticate} = useAuth();  //exportando useAuth ya que contiene todo el contexto
const navigation = useNavigate(); //para redirrecionar

useEffect(() =>{
   
    if(isAuthenticate){
        alert("YA ESTAS REGISTRADO")
        

    } 
  },[isAuthenticate])

const onSubmit = handleSubmit(data =>{  //hlandeSubmit se encarga de hacer un submit es decir de enviar los datos se le pasa el parametro de los datos enviados para ser manejados
  signup(data)
  alert("Registro exitoso")
  navigation('/login');

 })

  
return(

    <div>
     <h1 className=" text-center">Registro</h1>
  
    <form onSubmit={onSubmit}>
   
    <div className="form-group">

    <label htmlFor="exampleInputEmail1" className="font-weight-bold fs-5">Correo Electronico</label>   
    <input type="email"  className="form-control border border-dark" id="exampleInputEmail1"  {...register('email',{
        required: {value:true, message:"Email es requerido"}, 
        pattern:  {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:'Email no valido'}
        
     })} placeholder="Email"/>    

    { errors.email && <span> <p className="text-danger">{errors.email.message} </p> </span>}
    </div>
    <br/>    


    <div className="form-group">
    <label htmlFor="exampleInputUsuario" className="font-weight-bold  fs-5">Usuario</label>      
    <input type="text"   className="form-control border border-dark" id="exampleInputUsuario"  {...register('usuario',{
        required : {value:true, message:"Usuario es requerido"},
        minLength: {value:2, message:"Lo minimo son 2 caracteres"},
        maxLength: {value:12, message:"Como maximo son 12 carecteres"}
         })}  placeholder="Usuario"/>
    
    {errors.usuario && <span><p className="text-danger"> {errors.usuario.message} </p> </span>}
    </div>

    <br/>

    <div className="form-group">
    <label htmlFor="exampleInputPassword" className="font-weight-bold  fs-5">Contrasena</label>    
    <input type="password" className="form-control border border-dark" id="exampleInputPassword" {...register('password',{required: true})} placeholder="Password" />
    {errors.password && <span> <p className="text-danger">password es requerido </p></span>}
     </div>
  

    <br/>


    <div className="form-group">
    <label htmlFor="exampleInputCPassword" className="font-weight-bold  fs-5"> confirmacion de Contrasena</label>    
    <input type="password"  className="form-control border border-dark" id="exampleInputCPassword" {...register('confirmarPassword',{
          required :{value: true, message : "Confirmar Password es requerido"},   
           //validando que los password sean iguales con watch
          validate : (value) =>{ 
            if(value == watch('password')){
                return true;
            }else{
                return 'Los password no coinciden'}
            }      
        })} placeholder="confirmarPassword" /> 
    {errors.confirmarPassword && <span> <p className="text-danger">{errors.confirmarPassword.message}  </p>  </span>}
    </div>


    

    <br/>
   <div className='text-center'> 
    <label htmlFor="fechaNacimiento" className=" font-weight-bold fs-5 m-1">Ingresa Nacimiento </label>
    <input type="date" {...register('fechaNacimiento',{
        required: { value: true, message : "Ingresa tu dia/mes/año de nacimiento"},  
        
        //validando que la fecha de nacimiento sea igual o mayor a 18
        validate : (value) =>{
            const fechaNacimient = new Date(value)//fecha nacimiento ingresada en input
            const fechaActual = new Date() //fecha actual capturada
             console.log(fechaNacimient.getFullYear())
             console.log(fechaActual.getFullYear())
             const edad = fechaActual.getFullYear() - fechaNacimient.getFullYear()
             console.log(edad);
             
             if(edad >= 18){
              return true; //retorna que si cumple la condicion
             }else{
                return "!Debes ser mayor de edad 18!"
             }
        }
    })} /> 
    
    {errors.fechaNacimiento && <span> <p className="className text-danger"> {errors.fechaNacimiento.message}</p> </span>}
    </div>
    <br/>
    <div className="text-center">
    <label   htmlFor="terminos">Acepta terminos y condiciones de nuestras politicas</label>
    <input   type="checkbox" {...register('terminos',{required: true})} />
    {errors.terminos && <span className="text-danger">terminos es requerido</span>}
    </div>
  
    <br/>
   
   <div className="text-center">
   <Boton type="submit" contenido="Registrar"  /> 
    </div>
     {//muestra con watch el contenido que se ingresara por form
                                 }
     <pre>
     {JSON.stringify(watch(),null,2)}
      </pre>   


    </form>
 
 
    </div>
 
 )}




export default RegisterPage;


