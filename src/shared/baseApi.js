import Axios from 'axios';

const baseAPI = Axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})

export { baseAPI } 