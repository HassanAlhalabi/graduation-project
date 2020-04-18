import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getUserProducts } from '../../redux/reducers/productsReducer';

import Spinner from '../common/Spinner';
import ProductActions from './ProductActions';
import CategoriesBar from '../common/CategoriesBar';
import Breadcrumb from '../common/Breadcrumb';
import SectionTitle from '../common/SectionTitle';
//import Experience from "./Experience";
//import Education from "./Education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserProducts(this.props.auth.user._id);
  }

  onDeleteClick(e) {
    e.preventDefault();

    //this.props.deleteAccount();
  }
  render() {
    const { userProducts, loading } = this.props.products;
    const { user } = this.props.auth;

    let dashboardConetent;

    if (userProducts.length === 0 || loading) {
      dashboardConetent = <Spinner />;
    } else {
      // Check if the logged in user has profile data
      if (userProducts.length > 0) {
        dashboardConetent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to="/">{user.name}</Link>
            </p>
            <ProductActions />
            {/* <Experience experience={profile.experience} />
            <Education education={profile.education} /> */}
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardConetent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yest set up a profile, please add some info</p>
            <Link to="/" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );

      }
    }
    return (
      <div className="dashboard">
        <CategoriesBar />
        <Breadcrumb page={'Dashboard'}/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title={'Dashboard'} />
              <Link to='./updateproduct/1'>Update</Link>
              {dashboardConetent}
              {/* {this.props.auth.user._id} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  products: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getUserProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products
});

export default connect(
  mapStateToProps,
  { getUserProducts }
)(Dashboard);
