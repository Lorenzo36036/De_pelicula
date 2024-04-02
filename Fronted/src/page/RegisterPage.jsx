import {useForm} from "react-hook-form";
import {registerPage} from '../api/registro.js';



function RegisterPage(){
const {register, handleSubmit, formState : {errors}, watch} = useForm(); //formState es para activar los errors, handleSubmit es una funcion para poder enviar informacion
    
console.log(errors)


return(
     
    <div>
     <h1>Registro</h1>

    <form onSubmit={handleSubmit( async data =>{ console.log(data); await registerPage(data) } )}>
    <input type="email" {...register('email',{
        required: {value:true, message:"Email es requerido"}, 
        pattern:  {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:'Email no valido'}
        
     })} placeholder="Email"/>    
    

    { errors.email && <span> {errors.email.message}</span>}
    
    <br/>    
    <input type="text" {...register('usuario',{
        required : {value:true, message:"Nombre es requerido"},
        minLength: {value:2, message:"Lo minimo son 2 caracteres"},
        maxLength: {value:12, message:"Como maximo son 12 carecteres"}
         })}  placeholder="Usuario"/>
    
    {errors.usuario && <span>{errors.usuario.message}</span>}
  

    <br/>
    <input type="password" {...register('password',{required: true})} placeholder="Password" />
    {errors.password && <span>password es requerido</span>}
   
  

    <br/>
    <input type="password" {...register('confirmarPassword',{
          required :{value: true, message : "Confirmar Password es requerido"},   
           //validando que los password sean iguales con watch
          validate : (value) =>{ 
            if(value == watch('password')){
                return true;
            }else{
                return 'Los password no coinciden'}
            }      
        })} placeholder="confirmarPassword" /> 
    {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}
 


    

    <br/>
    <label htmlFor="fechaNacimiento">Ingresa Nacimiento </label>
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
    
    {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

    <br/>
    <label htmlFor="terminos">Acepta terminos y condiciones de nuestras politicas</label>
    <input type="checkbox" {...register('terminos',{required: true})} />
    {errors.terminos && <span>terminos es requerido</span>}
    <br/>
     <button>Registrar</button>
     {//muestra con watch el contenido que se ingresara por form
                                 }
     <pre>
     {JSON.stringify(watch(),null,2)}
      </pre>   


    </form>
 
 
    </div>
 
 )}




export default RegisterPage;


