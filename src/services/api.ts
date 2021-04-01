import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
  headers: {'Cache-Control': 'no-store', Pragma: 'no-cache', Expires: '0'},
});

api.defaults.timeout = 1000;

export default api;
