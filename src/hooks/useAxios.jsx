import axios from 'axios';
import useAuth from './useAuth';

export default function useAxios() {
  const { user } = useAuth();
  const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
  });
  api.interceptors.request.use(
    async (config) => {
      if (user) {
        const token = await user.getIdToken(); // Firebase ID Token
        console.log('Attaching token to request:', token);
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return api;
}
