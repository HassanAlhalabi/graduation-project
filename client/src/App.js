import React, { Component } from 'react';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { login, logout } from './redux/reducers/reducer';

//import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/layout/Navbar';
import Login from './components/layout/Login';
import Home from './components/presentational/Home';
import About from './components/about/About';
import Cart from './components/cart/Cart';

class App extends Component {
  //In it's componentDidMount  get the session, and if it has data set your intialState user to it.
  // componentDidMount() {
  //   axios.get('/api/user-data').then(res => {
  //     //const { dispatch } = this.props;
  //     if (res.data.user) {
  //       console.log('logged in triggered');
  //       //Dispatch the login function with the user data.
  //       this.props.login(res.data.user);
  //     } else {
  //       console.log('logged out triggered');
  //       //Dispatch the logout the user by default if there is no data in session.
  //       this.props.logout();
  //     }
  //   });
  // }
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
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
