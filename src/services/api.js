import axios from 'axios';
import { getToken } from "./auth";

const { REACT_APP_API } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API,
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
