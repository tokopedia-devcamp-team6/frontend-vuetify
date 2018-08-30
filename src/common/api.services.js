import axios from 'axios';
import { API_URL } from './config';

export const http = axios.create({
  baseURL: API_URL,
});

http.defaults.headers.get['Accepts'] = 'application/json';

// http.interceptors.request.use(config => {
//   if (localStorage.getItem('auth')) {
//     if (config.url.indexOf('access_token') < 0) {
//       let token = JSON.parse(localStorage.getItem('auth')).token;
//       if (config.url.indexOf('?') >= 0) {
//         config.url = config.url + "&access_token=" + token;
//       } else {
//         config.url = config.url + "?access_token=" + token;
//       }
//     }
//   }
//   return config;
// });
