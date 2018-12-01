import axios from 'axios';
import isEmpty from '../../validation/is-empty';

//Define initial state value
const initialState = {
  user: null,
  products: [],
  loading: true,
  isAuthenticated: false
};

//Define action types
const FETCH_USER = 'FETCH_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_PRODUCTS = 'GET_PRODUCTS';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('user logged in');
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      console.log('user logged out');
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };
    case GET_PRODUCTS:
      console.log('get products reducer');
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };
    default:
      return state;
  }
};

//Export the function that will login the user to it's initialState.

//fetch current user
export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res =>
      dispatch({
        type: FETCH_USER,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//Login action
export const login = () => dispatch => {
  console.log('user log in action triggered');
  axios
    .get('/auth/google')
    .then(res =>
      dispatch({
        type: LOGIN,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//Export the function that will logs out the user from the state
//logout action
export const logout = () => dispatch => {
  console.log('user log out action triggered');
  axios
    .get('/api/logout')
    .then(res =>
      dispatch({
        type: LOGOUT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

//Getting products
export const getProducts = res => dispatch => {
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};
