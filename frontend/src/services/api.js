import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-gustavo-tp.herokuapp.com',
});

export default api;
