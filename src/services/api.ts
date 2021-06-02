import axios from 'axios';

const api = axios.create({
    baseURL: 'http://XXXXXXXXXXXXX:3333/',
})

export default api;