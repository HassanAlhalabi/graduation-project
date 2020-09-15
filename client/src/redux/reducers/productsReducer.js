import axios from 'axios';
//import isEmpty from '../../validation/is-empty';

const sampleProducts = [{
      id: 1,
      name: 'black jeans',
      availability: 1,
      price: 4,
      prevPrice: 5,
      category: 'men clothing',
      offer: true,
      availableQuantity: 10,
      brand: 'nike',
      size: 'sm',
      color: '#333333',
      rating: 3,
      description: 'Lorem ipsum or lipsum as text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thoue Finibus Bonorum et Malorum for use in a type specimen book',
      image: 'https://via.placeholder.com/500',
      pending: false
},
{
      id: 2,
      name: 'bag',
      availability: 1,
      price: 12,
      prevPrice: 19,
      category: 'women clothing',
      offer: true,
      availableQuantity: 6,
      brand: 'prada',
      size: 'lg',
      color: '#fa34aa',
      rating: 3,
      description: 'Lorem ipsum, or lipsum as it o have scramb Finibus Bonorum et Malorum for use in a type specimen book.',
      image: 'https://via.placeholder.com/500',
      pending: false
},
{
  id: 3,
  name: 'asus laptop',
  availability: 1,
  price: 600,
  prevPrice: 850,
  category: 'computer & office',
  offer: true,
  availableQuantity: 80,
  brand: 'HP',
  size: 'md',
  color: '#123456',
  rating: 3,
  description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero De Finibus Bonorum et Malorum for use in a type specimen book.',
  image: 'https://via.placeholder.com/700',
  pending: false
},
{
  id: 4,
  name: 'Smart Watch',
  availability: 1,
  price: 90,
  prevPrice: 99.99,
  category: 'jewlery & watches',
  offer: true,
  availableQuantity: 167,
  brand: 'samsung',
  size: 'sm',
  color: '#e2e2e2',
  rating: 3,
  description: 'Lorem ipsum, or lipsum as it is sometimes known.',
  image: 'https://via.placeholder.com/500',
  pending: false
},

{
  id: 5,
  name: 'Smart Watch',
  availability: 1,
  price: 90,
  prevPrice: 99.99,
  category: 'jewlery & watches',
  offer: true,
  availableQuantity: 167,
  brand: 'samsung',
  size: 'sm',
  color: '#e2e2e2',
  rating: 3,
  description: 'Lorem ipsum, or lipsum as it is sometimes known.',
  image: 'https://via.placeholder.com/500',
  pending: true
},
{
  id: 6,
  name: 'Smart Watch',
  availability: 1,
  price: 90,
  prevPrice: 99.99,
  category: 'jewlery & watches',
  offer: true,
  availableQuantity: 167,
  brand: 'samsung',
  size: 'sm',
  color: '#e2e2e2',
  rating: 3,
  description: 'Lorem ipsum, or lipsum as it is sometimes known.',
  image: 'https://via.placeholder.com/500',
  pending: true
},
{
  id: 7,
  name: 'Smart Watch',
  availability: 1,
  price: 90,
  prevPrice: 99.99,
  category: 'jewlery & watches',
  offer: true,
  availableQuantity: 167,
  brand: 'samsung',
  size: 'sm',
  color: '#e2e2e2',
  rating: 3,
  description: 'Lorem ipsum, or lipsum as it is sometimes known.',
  image: 'https://via.placeholder.com/500',
  pending: true
},
]

//Define initial state value
const initialState = {
  products: sampleProducts,
  product: [],//Why!!!
  reviews: [],
  userProducts: sampleProducts,
  productsInCart: [],
  shippingMethod: 'free',
  loading: true,
  pendingOrders: []
};

//Define action types
const GET_PRODUCTS = 'GET_PRODUCTS';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_USER_PRODUCTS = 'GET_USER_PRODUCTS';
const CLEAR_USER_PRODUCTS = 'CLEAR_USER_PRODUCTS';
const SET_LOADING = 'SET_LOADING';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_PRODUCT_IN_CART_QUANTITY = 'UPDATE_PRODUCT_IN_CART_QUANTITY';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const CHANGE_SHIPPING_METHOD = 'CHANGE_SHIPPING_METHOD';
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'; 
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log('set loading reducer');
      return {
        ...state,
        loading: true
      };
    // case GET_PRODUCTS:
    //   console.log('get products reducer');
    //   return {
    //     ...state,
    //     products: action.payload,
    //     loading: false
    //   };
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
      if(action.payload.newQuantity > avaQuantity || action.payload.newQuantity === 0) {
        alert('Unavailable Quantity!! Minimum Quantity is 0 and Maximum Quantity is '+availableQuantity)
      } else {
        return({
          ...state,
          productsInCart : state.productsInCart.map(product =>
            product.id === action.payload.id ? 
            {...product,quantity :  action.payload.newQuantity} : product)
        })
      }

    case CHANGE_SHIPPING_METHOD:  
      return({
        ...state,
        shippingMethod: action.payload
      })

    case ADD_NEW_PRODUCT:
      return({
        ...state,
        userProducts : [...state.userProducts , action.payload] 
      }) 

    case UPDATE_PRODUCT:
      let pid =  action.payload.id;
      let updatedProductsList = state.userProducts.filter(product => product.id !== pid);
      return({
        ...state,
        userProducts : [...updatedProductsList,action.payload]
      })

    case  DELETE_PRODUCT:
      let delete_pid =  action.payload
      let newProductsList = state.userProducts.filter(product => product.id !== delete_pid);
      alert('are you sure!!')
      return({
        ...state,
        userProducts: newProductsList
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

export const productInCartDispatch = dispatch => {
  console.log('remove product from cart dispatch')
  return({
    removeProductFromCart : id => {
          dispatch({
              type: REMOVE_PRODUCT_FROM_CART,
              payload: id
          })      
      } ,
    updateProduct: (id,newQuantity) => {dispatch({
        type :  UPDATE_PRODUCT_IN_CART_QUANTITY,
        payload: {
            id : id,
            newQuantity : newQuantity
        }
    })} 
  })
}

export const changeShippingMethodDispatch = dispatch => {
  return({
    changeShippingMethod : method => {
      dispatch({
        type: CHANGE_SHIPPING_METHOD,
        payload: method
      })
    }
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

export const updateProductDispatch = dispatch => {
  return({
    updateProduct : product => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: product,
      })
    } 
  })
}

export const deleteProductDispatch = dispatch => {
  return({
    deleteProduct : pid => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: pid,
      })
    } 
  })
}
