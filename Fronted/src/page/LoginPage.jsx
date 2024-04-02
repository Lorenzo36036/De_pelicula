import {useForm} from "react-hook-form";


function LoginPage(){
const {register, handleSubmit} = useForm();
    

return(
    <form>
    <input type="email" {...register('Email')}  placeholder="Email"/>
    <input type="password" {...register('password')} placeholder="Password" />
     <button>Login</button>
    </form>
 )}



export default LoginPage;
