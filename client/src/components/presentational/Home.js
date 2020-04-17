import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesBar from '../layout/CategoriesBar';
import CategorySlider from './CategorySlider';
import DealsOfTheDay from './DealsOfTheDay';
import NewCollection from './NewCollection';
import LatestProducts from './LatestProducts';
import HotDeal from './HotDeal';
import Pickedforyou from '../layout/PickedForYou';

import { getProducts } from '../../redux/reducers/productsReducer';


class Home extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    
    const { products } = this.props; // Getting products from Redux
    let homeContent;

    homeContent = (
          <div className='home'>

            <CategoriesBar />
            <CategorySlider />
            <DealsOfTheDay products={products}/>
            <NewCollection />
            <LatestProducts products={products}/>
            <HotDeal />
            <Pickedforyou />
            
          </div>  
        );

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
