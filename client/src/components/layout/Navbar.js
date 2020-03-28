import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Login from './Login';
import SearchBox from './searchBox';

import { fetchUser, logout, login } from '../../redux/reducers/authReducer';

class Navbar extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  onLoginClicked(e) {
    //e.preventDefault();
    this.props.history.push('/auth/google');
  }
  onLogoutClicked(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }
  getFirstName = name => {
    let index = name.indexOf(' ');
    return name.substr(0, index);
  };
  render() {
    const { user } = this.props;
    let logLinks;

    logLinks = user ? (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/my-products">
            My Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-product">
            Add Product
          </Link>
        </li>
        <li className="nav-item mr-3">
          <Link
            className="nav-link px-2 bg-primary text-white rounded"
            to="/cart"
          >
            <i className="fas fa-shopping-cart" />
          </Link>
        </li>
        <li className="nav-item">
          <span className="nav-link font-weight-normal text-white px-2 bg-secondary rounded">
            Hello {this.getFirstName(user.name)}
          </span>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/logout"
            onClick={this.onLogoutClicked.bind(this)}
          >
            <img
              className="rounded-circle"
              src={this.props.user.avatar}
              alt={this.props.user.name}
              style={{ width: '25px', marginRight: '5px' }}
            />
            Logout
          </Link>
        </li>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <li className="nav-item">
          <Login />
        </li>
      </React.Fragment>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark main-navbar p-2">
        <div className="container">
          <div className='row'>
            <Link className="navbar-brand col-12 col-md-5 col-lg-3 m-0" to="/">
              <span>E</span>-SHOP
            </Link>
            <div className='col-12 col-md-7 col-lg-5'>
              <SearchBox />
            </div>
            

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            
            <div className="collapse navbar-collapse col-12 col-lg-4" id="navbarNav">
              <ul className="navbar-nav ml-auto ml-sm-0 mt-sm-3 ml-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {logLinks}
              </ul>
            </div>
          </div>
          
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchUser, logout, login }
  )(Navbar)
);
