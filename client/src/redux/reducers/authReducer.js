import axios from 'axios';
import isEmpty from '../../validation/is-empty';

//Define initial state value
const initialState = {
  user: null,
  isAuthenticated: false,
};

//Define action types
const FETCH_USER = 'FETCH_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CLEAR_USER_PRODUCTS = 'CLEAR_USER_PRODUCTS';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('user logged in');
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      console.log('user logged out');
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    case FETCH_USER:
      console.log('fetching user ..');
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
    default:
      return state;
  }
};

//Export the function that will login the user to it's initialState.

//Login action
export const login = () => (dispatch) => {
  console.log('user log in action triggered');
  axios
    .get('/auth/google')
    .then((res) =>
      dispatch({
        type: LOGIN,
        payload: res.data,
      }),
    )
    .catch((err) => console.log(err));
};

//Export the function that will logs out the user from the state
//logout action
export const logout = () => (dispatch) => {
  console.log('user log out action triggered');
  dispatch(clearUsersProducts());
  axios
    .get('/api/logout')
    .then((res) =>
      dispatch({
        type: LOGOUT,
        payload: res.data,
      }),
    )
    .catch((err) => console.log(err));
};

//fetch current user action
export const fetchUser = () => (dispatch) => {
  axios
    .get('/api/current_user')
    .then((res) =>
      dispatch({
        type: FETCH_USER,
        payload: res.data,
      }),
    )
    .catch((err) => console.log(err));
};

// handle stripe token action
export const handleToken = (token) => (dispatch) => {
  console.log('user payment handle token action triggered');
  axios
    .post('/api/payment', token)
    .then((res) => {
      dispatch({
        type: FETCH_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//clear users products action
export const clearUsersProducts = () => {
  return {
    type: CLEAR_USER_PRODUCTS,
  };
};
