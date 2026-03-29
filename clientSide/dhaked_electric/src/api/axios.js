import axios from 'axios';

const api= axios.create({
    baseURL:"https://dhaked-electro-store.vercel.app/api"
})

export default api;