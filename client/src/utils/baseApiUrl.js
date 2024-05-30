
import axios from 'axios';


const STAGING_URL = 'http://localhost:5000'
const baseApi = axios.create({
  baseURL: STAGING_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default baseApi;
