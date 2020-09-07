import products from '../reducers/products';
import cart from '../reducers/cart';
import auth from '../reducers/auth';
import alert from '../reducers/alert';
import { combineReducers } from 'redux';

export default combineReducers({
  products,
  cart,
  auth,
  alert
});


