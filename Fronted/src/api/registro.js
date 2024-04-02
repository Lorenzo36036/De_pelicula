import axios from 'axios'


const API = 'localhost:4000/api';

export const registerPage = user => axios.post(`${API}/register`, user); //el parametro user es lo que se pasara en  req.body 




