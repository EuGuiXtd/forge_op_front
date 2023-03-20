import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestRegister = async ({ email, password, user }) => {
  const { data } = await api.post('/register', { email, password, user });
  return data;
};

export const requestLogin = async ({ email, password }) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};

export default api;
