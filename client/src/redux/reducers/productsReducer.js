import axios from 'axios';
//import isEmpty from '../../validation/is-empty';

//Define initial state value
const initialState = {
  products: [],
  product: [],
  userProducts: [],
  productsInCart: [],
  loading: true
};

//Define action types
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_USER_PRODUCTS = 'GET_USER_PRODUCTS';
const CLEAR_USER_PRODUCTS = 'CLEAR_USER_PRODUCTS';
const SET_LOADING = 'SET_LOADING';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_PRODUCT_IN_CART_QUANTITY = 'UPDATE_PRODUCT_IN_CART_QUANTITY';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'; 

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log('set loading reducer');
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      console.log('get products reducer');
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case GET_PRODUCT:
      console.log('get product reducer');
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case GET_USER_PRODUCTS:
      console.log('get user products reducer');
      return {
        ...state,
        userProducts: action.payload,
        loading: false
      };
    case CLEAR_USER_PRODUCTS:
      console.log('clear user products reducer');
      return {
        ...state,
        userProducts: [],
        loading: false
      };
    case ADD_PRODUCT_TO_CART:
      console.log('add-product-to-cart reducer');
      // If the product already existed in cart only increase quantity
      // Check if product already in cart
      let inCart = state.productsInCart.filter(product => product.id === action.payload.id)
      let availableQuantity = action.payload.availableQuantity
      if (inCart.length !== 0) { 
        // Get current quantity in cart
        let currentQuantity = inCart[0].quantity
        if(action.payload.quantity + currentQuantity > availableQuantity) {
          alert('Unavailable Quantity!! Maximum Quantity is '+availableQuantity)
        } else {
          return({
            ...state,
            productsInCart : state.productsInCart.map(product =>
            product.id === action.payload.id ? 
            {...product,quantity : product.quantity + action.payload.quantity} : product),
            loading: false
          })
        }
        
      } else {
        if(action.payload.quantity > availableQuantity || action.payload.quantity === 0) {
          alert('Unavailable Quantity!! Minimum Quantity is 0 and Maximum Quantity is '+availableQuantity)
        } else {
          return({
            ...state,
            productsInCart: [...state.productsInCart,action.payload],
            loading: false
          }) 
        } 
      }

    case REMOVE_PRODUCT_FROM_CART :
      console.log('remove product from cart reducer')
      return({
        ...state,
        productsInCart : state.productsInCart.filter(product => {
          return product.id !== action.payload
        })
      })  

    case UPDATE_PRODUCT_IN_CART_QUANTITY:
      let updatedProduct = state.productsInCart.filter(product => product.id === action.payload.id)
      let avaQuantity = updatedProduct[0].availableQuantity
      console.log('updatedProduct : ', updatedProduct)
      console.log('available quantity', avaQuantity)
      if(action.payload.newQuantity > avaQuantity || action.payload.newQuantity === 0) {
        alert('Unavailable Quantity!! Minimum Quantity is 0 and Maximum Quantity is '+availableQuantity)
      } else {
        console.log('updating quantity')  
      }

    case ADD_NEW_PRODUCT:
      return({
        ...state,
        userProducts : [...state.userProducts , action.payload] 
      }) 
    default:
      return state;
  }
};

//Export the function that will login the user to it's initialState.

//Getting all products
export const getProducts = () => dispatch => {
  axios
    .get('/api/products')
    .then(products => {
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data
      });
    })
    .catch(err => console.log(err));
};

//Getting user products
export const getUserProducts = userId => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/products/user/${userId}`)
    .then(products => {
      dispatch({
        type: GET_USER_PRODUCTS,
        payload: products.data
      });
    })
    .catch(err => console.log(err));
};

// get a specific product
export const getProduct = productId => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/products/${productId}`)
    .then(product =>
      dispatch({
        type: GET_PRODUCT,
        payload: product.data
      })
    )
    .catch(err => console.log(err));
};

// set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const addProductToCartDispatch = dispatch => {
  return({
      addProductToCart : product => {
          dispatch({
              type: ADD_PRODUCT_TO_CART,
              payload: product
          })
      }
  })
}

export const removeProductFromCartDispatch = dispatch => {
  console.log('remove product from cart dispatch')
  return({
    removeProductFromCart : id => {
          dispatch({
              type: REMOVE_PRODUCT_FROM_CART,
              payload: id
          })
      }
  })
}

export const updateProductInCartQuantityDispatch = dispatch => {
  return({
      updateProduct: (id,newQuantity) => {dispatch({
          type :  UPDATE_PRODUCT_IN_CART_QUANTITY,
          payload: {
              id : id,
              newQuantity : newQuantity
          }
      })}
  })
}

export const addNewProductDispatch = dispatch => {
  return({
    addNewProduct : product => {
      dispatch({
        type: ADD_NEW_PRODUCT,
        payload: product,
      })
    } 
  })
}
