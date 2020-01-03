import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:1234/',
  responseType: 'json'
});

// API.interceptors.response.use(
//   response => {
//     console.log('Response was received', response.data);
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default API;
