import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Login from './Login';
import SearchBox from './SearchBox';

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

  showList = () => document.querySelector('.profile-links').classList.toggle('active')

  render() {
    const { user } = this.props;
    let logLinks;

    logLinks = user ? (
      <React.Fragment>
        <li className="nav-item text-center">
          <Link className="" to="/dashboard">
            <div><span>Dashboard</span></div>
            <div>
              <i className="fas fa-tachometer-alt"></i>
            </div>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link className="" to="/my_products">
            <div><span>My Products</span></div>
            <div><i className="fas fa-boxes"></i></div>
          </Link>
        </li>
        <li className="nav-item position-relative text-center pt-1" >
          <a href='#' onClick={() => this.showList()} >
            <img
              className="rounded-circle"
              src={this.props.user.avatar}
              alt={this.props.user.name}
              style={{ width: '25px', marginRight: '5px' }}
            />
            {this.getFirstName(user.name)}
          </a>
          <div className='profile-links position-absolute text-left'>
            <ul className='m-0 list-group'>
              <Link to='/'>
                  <li className='list-group-item'>Profile</li>
              </Link>
              <Link to="/add-product">
                <li className='list-group-item'>
                  <div>Add Product</div>
                  {/*   */}
                </li>
              </Link>
              <Link
                to="/logout"
                onClick={this.onLogoutClicked.bind(this)}
                >
                  <li className='list-group-item'>Logout</li>
                </Link>
            </ul>
          </div>
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

            <div className='col-12 col-md-7 col-lg-5 pl-lg-0 mt-4 mt-md-0'>
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
            
            <div className="col-12 col-lg-4" id="navbarNav">
              <ul className="navbar-nav justify-content-between log-links pb-4 pb-lg-0">
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
