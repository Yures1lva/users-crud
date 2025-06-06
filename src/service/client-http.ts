import axios from 'axios';

const clienteHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default clienteHttp;
