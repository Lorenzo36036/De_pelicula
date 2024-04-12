import axios from 'axios'


const API = 'http://localhost:4000/api';

export const registerPage = user => axios.post(`${API}/register`, user); //el parametro user es lo que se pasara en  req.body 

export const loginPage = user => axios.post(`${API}/login`, user)//pasando el enlace donde el usuario hara login y recibiendo sus datos usando user
 

