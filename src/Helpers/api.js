import axios from 'axios';

export default axios.create({
  baseURL: 'https://punretro-3b8e4.firebaseio.com/',
  responseType: 'json'
});
