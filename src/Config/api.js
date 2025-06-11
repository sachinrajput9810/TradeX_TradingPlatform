import axios from "axios";

// export const API_BASE_URL = "http://localhost:8080"
export const API_BASE_URL = "https://tradexapp-env.eba-p3jjfcsu.us-east-1.elasticbeanstalk.com";



 const api = axios.create({
    baseURL : API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
 })


 
 export default api;