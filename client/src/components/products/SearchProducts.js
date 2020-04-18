import React , {Component} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsReducer';
import Spinner from '../common/Spinner';

import CategoriesBar from '../common/CategoriesBar';
import Breadcrumb from '../common/Breadcrumb';
import ProductCard from '../product/ProductCard';

class SearchProducts extends Component {

    render(){

        const searchTerm = this.props.match.params.searchTerm?this.props.match.params.searchTerm.toLowerCase() : ' ' ;
        
        let searchResult = this.props.products.filter( product => product.name.toLowerCase().includes(searchTerm) )
        let loading = this.props.loading;
        
        searchResult = loading ? <Spinner /> : 
            searchResult.length > 0 ?
                <div className='row'> 
                    {searchResult.map(product => 
                        
                        <div className='col-12 col-md-4 col-lg-3'>
                            <ProductCard key={product._id} product={product} />
                        </div>      
                    )}
                </div> 
                : <div className='mt-5'>
                        <p className='alert alert-orange'>No Results Were Found !!!</p>
                    </div>;

        return(
            <div className='search-produts'>
                <CategoriesBar />
                <Breadcrumb page={'Products / Search-Products / ' + searchTerm  + ' '}/>

                <div className='container mt-4'> 
                    {searchResult}    
                </div>
            </div>
        );
    }

}

SearchProducts.propTypes = {
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

export default connect(mapStateToProps, getProducts )(SearchProducts);