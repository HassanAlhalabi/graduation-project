import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import axios from 'axios';

import Spinner from './Spinner';
import ProductCard from './Productcard';

import { getProducts } from '../../redux/reducers/reducer';

class Home extends Component {
  // componentDidMount() {
  //   axios
  //     .get("/api/products")
  //     .then(res => {
  //       this.props.getProducts(res);
  //     })
  //     .catch(err => console.log("Error fetching products : ", err));
  // }

  render() {
    const { loading, products } = this.props;
    let homeContent;
    loading
      ? (homeContent = <Spinner />)
      : (homeContent = (
          <div className="row">
            {products.length > 0
              ? products.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))
              : null}
          </div>
        ));

    return homeContent;
  }
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.states.user,
  products: state.states.products,
  loading: state.states.loading
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
