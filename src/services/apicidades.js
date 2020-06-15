import axios from 'axios';

const apicidades = axios.create({
    baseURL: 'https://brasil.io/api/dataset/covid19/caso/data'
});
export default apicidades;