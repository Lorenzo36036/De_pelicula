import Boton from "./../components/Boton";
import {useForm}  from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signin, user, isAuthenticate} = useAuth();

  
  const onSubmit = handleSubmit(async data => {
    try {
      await signin(data);

    } catch(error) {
      console.log(error);
    }
  });

  

  
  return (
    <div>
      <h1 className="text-center font-weight-bold m-4">INICIO DE SESIÓN</h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail" className="font-weight-bold fs-5">Email</label>
          
          <input
            type="email"
            id="exampleInputEmail"
            className="form-control border border-dark"
            {...register('email', {
              required: { value: true, message: "Email es requerido" },
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Email no válido' }
            })}
            placeholder="Email"
          />
          {errors.email && <span><p className="text-danger">{errors.email.message}</p></span>}

          <label htmlFor="exampleInputPassword" className="font-weight-bold fs-5 mt-3">Password</label>
          <input
            type="password"
            className="form-control border border-dark"
            id="exampleInputPassword"
            {...register('password', { required: "Password es requerido" })}
            placeholder="Password"
          />
          {errors.password && <span><p className="text-danger">{errors.password.message}</p></span>}
        </div>

        <div className="text-center">
        <p className="m-2 fs-bold-weight">No tienes cuenta? <span className="text-decoration-underline"> <Link to='/registro'> <h6>Registro</h6>  </Link>   </span> </p>
          <Boton type="submit" contenido="Login" />
        </div>
      </form>
     
    </div>
  );
}

export default LoginPage;