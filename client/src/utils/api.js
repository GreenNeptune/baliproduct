import axios from 'axios';
import store from '../redux_store';
import { LOGOUT } from '../redux_store/reducers/auth/actionType';

const api = axios.create({
  baseURL: '/api_v1',
  headers: {
    'Content-Type': 'application/json'
  }
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
