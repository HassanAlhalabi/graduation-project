import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../layout/Breadcrumb';
import CategoriesBar from '../layout/CategoriesBar';
import FilterBox from './FilterBox';
import ProductCard from '../product/ProductCard';
import Spinner from '../common/Spinner';

import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsReducer';

class Products extends Component {
    
    render() {

        const { loading , products }  = this.props; // Destracture

        

        let productContent = loading ? <Spinner /> : // Loading is true => show spinner
                                                     // Loading is false => show products container
            <div className="row"> 
                {
                    products.length > 0
                    ?
                    products.map(product => (
                        <div className='col-12 col-md-6 col-lg-4'>
                            <ProductCard key={product._id} product={product} />
                        </div>
                    ))
                    : 
                    <div>
                        <p className='alert alert-orange rounded-0'>No Products Ordrs In Cart !!</p>
                    </div>
                }
            </div>

        return(
            <div className='products'>
                <Breadcrumb page='Products'/>
                <CategoriesBar />
                <div className='container mt-5'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='col-12 col-md-3'>
                            <FilterBox />
                        </div>
                        {/* Products Show */}
                        <div className='col-12 col-sm-6 col-md-9'>
                            <div className='row m-0'>
                                {productContent}
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return({
        products: state.products.products,
        loading: state.products.loading 
    });
}


export default connect(mapStateToProps, getProducts )(Products);