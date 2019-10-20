import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  products: productsReducer,
  auth: authReducer
});
