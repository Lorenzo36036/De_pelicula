import {useForm} from "react-hook-form";





function DonacionPage(){
   
 const {register, handleSubmit, formState : {errors}, watch} = useForm(); //formState es para activar los errors, handleSubmit es una funcion para poder enviar informacion
    
 return(
  <div className="app"> <h1>Donacion</h1>

  <form onSubmit={handleSubmit(data => console.log(data))}>
   
  <input type="number" {...register('Donacion',{
      required : {value:true, message:"donacion es requerido"},
       })}  placeholder="Cantidad Donada"/>
  
  {errors.usuario && <span>{errors.usuario.message}</span>}

  <br/>
  <input type="Banco" {...register('referencia',{
     required :{value: true, message : "Banco es requerido"},          
      })} placeholder="Referencia" /> 
  {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}

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



export default DonacionPage;