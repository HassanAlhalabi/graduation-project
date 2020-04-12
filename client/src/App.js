import React, { Component } from 'react';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { login, logout } from './redux/reducers/reducer';

//import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import PrivateRoute from './components/common/PrivateRoute';

import UpperBar from './components/layout/UpperBar';
import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import Home from './components/presentational/Home';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import ProductDetails from './components/product_details/ProductDetails'
import Checkout from './components/checkout/Checkout';
import About from './components/about/About';
import Cart from './components/product/Cart';
import MyProducts from './components/my_products/MyProducts';
import Profile from './components/profile/Profile';
import ProductForm from './components/product/ProductForm';

import FixedCart from './components/layout/FixedCart';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <UpperBar />
            <FixedCart NumberOfProductsInCart={3}/>
            <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/productdetails" component={ProductDetails} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-product"
                  component={ProductForm}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/my_products" component={MyProducts} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/profile" component={Profile} />
              </Switch>
            <Footer />  
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
