import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetchUser, logout, login } from '../../redux/reducers/reducer';

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
  render() {
    const { user } = this.props;
    let logLink;
    logLink = user ? (
      <div>
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
      </div>
    ) : (
      <a className="nav-link" href="/auth/google">
        Login From Google
      </a>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            E-Commerce
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">{logLink}</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.states.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchUser, logout, login }
  )(Navbar)
);
