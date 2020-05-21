import React,{Component} from 'react';

import SectionTitle from '../common/SectionTitle';
import ProductCard from '../product/ProductCard';
import Image from '../common/img/banner15.jpg';
import {Link} from 'react-router-dom';
import Spinner from '../common/Spinner';

class LatestProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    componentWillReceiveProps() {
        this.setState({products: this.props.products})
    }


    getLatestProducts = (productsList,totalNmber) => {
        let newProductsList = [];
        let i = 0;
        while( i < totalNmber){
            newProductsList.push(productsList[productsList.length-i-1]);
            ++i; 
        }
        return newProductsList;
    }    

    render(){

        const products = this.state.products;

        console.log(this.getLatestProducts(products,1))

        return( 

            <div className='latest-products pt-5 pb-5'>
                <div className='container'>
                    <SectionTitle title={"latest products"}/>
                     <div className='row'>
                        <div className='col-12 col-sm-6 col-lg-3 mb-3'>
                            <div className='position-relative'>
                                <div>
                                    <img src={Image} alt='deals-of-the-day image' className='img-fluid w-100'/>
                                </div>
                                <div className='position-absolute deals-collection-link'>
                                    <h3>New Collection</h3>
                                    <Link to='/products'>
                                        <button className='btn btn-primary btn-lg'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     {products.length > 0
                        ? this.getLatestProducts(products,1).map(product => (
                            <div className='col-12 col-md-4 col-lg-3' key={product._id}> 
                                <ProductCard key={product._id} product={product} />
                            </div>
                            ))
                        : <div className='col-12 col-md-6 col-lg-9 mb-3'><Spinner /></div>}
                     </div>
                </div>
            </div>
        
        );

    }

}

export default LatestProducts