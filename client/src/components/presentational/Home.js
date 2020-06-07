import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesBar from '../layout/CategoriesBar';
import CategorySlider from '../layout/CategorySlider';
import DealsOfTheDay from '../layout/DealsOfTheDay';
import NewCollection from '../layout/NewCollection';
import LatestProducts from '../layout/LatestProducts';
import HotDeal from '../layout/HotDeal';
import Pickedforyou from '../layout/PickedForYou';

import Spinner from '../common/Spinner';
import ProductCard from '../product/ProductCard';

import { getProducts } from '../../redux/reducers/productsReducer';


class Home extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products } = this.props;
    let homeContent;
    loading
      ? (homeContent = <Spinner />)
      : (homeContent = (
          <div className='home'>

            <CategoriesBar />
            <CategorySlider />
            <DealsOfTheDay />
            <NewCollection />
            <LatestProducts />
            <HotDeal />
            <Pickedforyou />

            <div className='container'>
              <div className="row">
                {products.length > 0
                  ? products.map(product => (
                      <ProductCard key={product._id} product={product} />
                    ))
                  : null}
              </div>
            </div>
            
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
  products: state.products.products,
  loading: state.products.loading
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
