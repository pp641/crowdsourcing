
import axios from 'axios';


const STAGING_URL = 'http://localhost:3000/api'
const api = axios.create({
  baseURL: STAGING_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
