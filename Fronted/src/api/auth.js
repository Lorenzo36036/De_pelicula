import axios from 'axios';

// Creamos una instancia de Axios con la configuración base
const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true //permite acceso a las cabeceras es decir permite que se pueda ver los tokens y todo eso 
});

// Exportamos las funciones para registrar y hacer login
export const registerPage = user => instance.post(`/register`, user);

export const loginPage = user => instance.post(`/login`, user);


// export const verifiTokenRequest = user => instance.get('/verify', user)