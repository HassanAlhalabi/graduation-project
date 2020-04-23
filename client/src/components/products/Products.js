import React,{Component} from 'react';

import PropTypes from 'prop-types';
import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';
import FilterBox from '../common/FilterBox';
import ProductCard from '../product/ProductCard';
import Spinner from '../common/Spinner';
 
import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsReducer';

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterParams: {
                price : 1000,
                colors: [],
                brand : 'all',
                size  : 'all',
            },
            // colors: this.props.products.map(product =>
            //     product.color
            // )
            colors : ['RED']
        }
    }

    getFilterParameters = params => {
        this.setState({filterParams : params})
    }
    
    
    render() {

        const { loading , products }  = this.props;
        console.log(products)

        let productContent = loading ? <Spinner /> : // Loading is true => show spinner
                                                     // Loading is false => show products container
            <div className="row"> 
                {
                    products.length > 0
                    ?
                    products.filter( product => 
                        
                        // Filter Parameters
                        product.price <= this.state.filterParams.price
                        
                        
                        ).map(product => 
                            <div className='col-12 col-md-6 col-lg-4'>
                                <ProductCard key={product._id} product={product} />
                            </div>    
                    )
                    : 
                    <div>
                        <p className='alert alert-orange rounded-0'>No Products Ordrs In Cart !!</p>
                    </div>
                }
            </div>

        return(
            <div className='products'>
                <CategoriesBar />
                <Breadcrumb page='Products'/>
                <div className='container mt-5'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='col-12 col-md-3'>
                            <FilterBox 
                                        filterParams={ this.getFilterParameters } 
                                        availableColors={this.state.colors}/>
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