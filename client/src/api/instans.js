import axios from 'axios'

export const instans = axios.create({
    withCredentials:true,
    baseURL:'http://localhost:9090',
    headers: {
        'Content-Type': 'application/json',
    }
})