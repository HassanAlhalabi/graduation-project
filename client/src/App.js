import React, { Component } from 'react';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { login, logout } from './redux/reducers/reducer';

//import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import Home from './components/presentational/Home';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Cart from './components/product/Cart';
import ProductForm from './components/product/ProductForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
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
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
