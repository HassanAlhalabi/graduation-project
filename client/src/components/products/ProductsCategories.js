import React , {Component} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsReducer';
import Spinner from '../common/Spinner';

import CategoriesBar from '../layout/CategoriesBar';
import Breadcrumb from '../layout/Breadcrumb';
import Catgory from './Category';
import ProductCard from '../product/ProductCard';

import MenImage from '../layout/img/men-category.jpg';
import womenImage from '../layout/img/women-category.jpg';
import PhonesImage from '../layout/img/phones-category.jpg';
import ComputersImage from '../layout/img/computers-category.jpg';
import ElectronicsImage from '../layout/img/electronics-category.jpg';
import JewlsWatchesImage from '../layout/img/jewls-watches-category.jpg';

class ProductsCategories extends Component {

    constructor(){
        super();
        this.state = {
            categories : [
                {
                    cid : 1,
                    cName: "Men's Clothing",
                    cImage: MenImage
                },
                {
                    cid : 2,
                    cName: "Women's Clothing",
                    cImage: womenImage
                },
                {
                    cid : 3,
                    cName: 'phones & accessories',
                    cImage: PhonesImage
                },
                {
                    cid : 4,
                    cName: ' computer & office',
                    cImage: ComputersImage
                },
                {
                    cid : 5,
                    cName: 'consumer electronics',
                    cImage: ElectronicsImage
                },
                {
                    cid : 6,
                    cName: 'jewlery & watches',
                    cImage: JewlsWatchesImage
                },
            ]
        }
    }

    render(){

        let category = this.props.match.params.category;
        category = category ? category : 'all' ;
        let loading = this.props.loading;
        let productsOfCategory = this.props.products.filter(product => product.category === category)
        
        let productsCategoriesContent = category === 'all' ?

            <div className='row'>
                {
                    this.state.categories.map(category => 
                        <div className='col-12 col-md-4 mb-4' key={category.cid}>
                            <Catgory name={category.cName} image={category.cImage}/>
                        </div>
                    )  
                }
            </div>
        
            : loading ? <Spinner /> : 
                productsOfCategory.length > 0 ?
                    <div className='row'> 
                        {productsOfCategory.map(product => 
                            
                            <div className='col-12 col-md-4 col-lg-3'>
                                <ProductCard key={product._id} product={product} />
                            </div>

                        )}
                    </div> 
                : <div className='mt-5'>
                        <p className='alert alert-orange'>No Such A Category !!!</p>
                    </div>;

        category = category ? category.split('-').join(' ') : 'All';                    

        return(
            <div className='search-produts'>
                <CategoriesBar />
                <Breadcrumb page={'Products / Products-Categories / ' + category }/>

                <div className='container mt-4'> 
                      {productsCategoriesContent}
                </div>
            </div>
        );
    }

}

ProductsCategories.propTypes = {
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

export default connect(mapStateToProps, getProducts )(ProductsCategories);