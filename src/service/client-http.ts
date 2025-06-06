import axios from 'axios';

const clienteHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default clienteHttp;