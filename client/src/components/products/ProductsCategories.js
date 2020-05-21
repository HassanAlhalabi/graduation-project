import React , {Component} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsReducer';
import Spinner from '../common/Spinner';

import CategoriesBar from '../common/CategoriesBar';
import Breadcrumb from '../common/Breadcrumb';
import Catgory from './Category';
import ProductCard from '../product/ProductCard';
import FilterBox from '../common/FilterBox';

import MenImage from '../common/img/men-category.jpg';
import womenImage from '../common/img/women-category.jpg';
import PhonesImage from '../common/img/phones-category.jpg';
import ComputersImage from '../common/img/computers-category.jpg';
import ElectronicsImage from '../common/img/electronics-category.jpg';
import JewlsWatchesImage from '../common/img/jewls-watches-category.jpg';

class ProductsCategories extends Component {

    constructor(props){
        super(props);

        this.state = {
            categories : [
                {
                    cid : 1,
                    cName: "Men Clothing",
                    cImage: MenImage
                },
                {
                    cid : 2,
                    cName: "Women Clothing",
                    cImage: womenImage
                },
                {
                    cid : 3,
                    cName: 'phones & accessories',
                    cImage: PhonesImage
                },
                {
                    cid : 4,
                    cName: 'computer & office',
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
            ],
            products :  this.props.products,
            loading : false
        }
    }

    render(){

        let category = this.props.match.params.category;
        category = category ? category : 'all' ;
        let loading = this.state.loading;
        let productsOfCategory = this.state.products.filter(product => product.category.toLowerCase() === category.toLowerCase())
        let productsCategoriesContent = category === 'all' ?

            <div className='row'>
                {
                    this.state.categories.map(category => 
                        <div className='col-12 col-md-3 mb-4' key={category.cid}>
                            <Catgory name={category.cName} image={category.cImage}/>
                        </div>
                    )  
                }
            </div>
        
            : loading ? <Spinner /> : 
                productsOfCategory.length > 0 ?
                    <div className='row'> 
                        {productsOfCategory.map(product => 
                            
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                    <ProductCard key={product._id} product={product} />
                                </div>
                            
                        )}
                    </div> 
                : <div className='mt-5'>
                        <p className='alert alert-orange'>No Products !!!</p>
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

const mapStateToProps = state => {
    return({
        products: state.products.products,
        loading: state.products.loading 
    });
}

export default connect(mapStateToProps, null )(ProductsCategories);