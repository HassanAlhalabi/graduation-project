//Define initial state value
const initialState = {
  user: null,
  products: [],
  loading: true
};

//Define action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_PRODUCTS = "GET_PRODUCTS";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("user logged in");
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      console.log("user logged out");
      return {
        ...state,
        user: null
      };
    case GET_PRODUCTS:
      console.log("get products reducer");
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

//Export the function that will login the user to it's initialState.
//Login action
export const login = userInfo => dispatch => {
  console.log("user log out action triggered");
  dispatch({
    type: LOGIN,
    payload: userInfo
  });
};

//Export the function that will logs out the user from the state
//logout action
export const logout = () => dispatch => {
  console.log("user log out action triggered");
  dispatch({
    type: LOGOUT
  });
};

//Getting products
export const getProducts = res => dispatch => {
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};
