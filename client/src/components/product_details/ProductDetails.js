import React , {Component} from 'react';

import Breadcrumb from '../layout/Breadcrumb';
import CategoriesBar from '../layout/CategoriesBar';
import ProductInfo from './ProductInfo';
import ProductReviews from './ProductReviews';
import PickedForYou from '../layout/PickedForYou';

class ProductDetails extends Component {

    constructor(props){
        super(props);

        this.state = {
            index: 0,
            products : [
                {
                    id: 1,
                    title: 'Product name 1',
                    image: 'https://via.placeholder.com/450',
                    price: 5.4,
                    pre_price: 10,
                    rating: 4,
                    availability: 1,
                    brand: 'brand',
                    size: 'xl',
                    color: 'red',
                    quantity: 3,
                    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum  lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ipsum '
                },
                {
                    id: 2,
                    title: 'Product name 2',
                    image: 'https://via.placeholder.com/400',
                    price: 15.4,
                    pre_price: 20,
                    rating: 3,
                    availability: 1,
                    brand: 'brand',
                    size: 'lg',
                    color: 'blue',
                    quantity: 1,
                    description: 'lorem ipsum dolor lorem ipsum dolor  sit amet lorem ipsum dolor sit amet'
                },
                {
                    id: 3,
                    title: 'Product name 3',
                    image: 'https://via.placeholder.com/500',
                    price: 54,
                    pre_price: 60,
                    rating: 3,
                    availability: 1,
                    brand: 'brand',
                    size: 'sm',
                    color: 'green',
                    quantity: 5,
                    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
                },
            ]
        }

    }

    getPrevProduct = () => {
        console.log(this.state.index)
        if(this.state.index === 0){
            return null;
        } else {
            // If we are getting the product before the last one enable next button
            if(this.state.index === this.state.products.length-1) {
                document.querySelector('.next-product-btn').classList.toggle('disabled')
            }
            // If we are getting the first product disable prev button
            if(this.state.index === 1){
                document.querySelector('.prev-product-btn').classList.toggle('disabled')
            }
            this.setState({index: this.state.index-1})
        }
    }

    getNextProduct = () => {
        console.log(this.state.index)
        if(this.state.index === this.state.products.length-1){
            return null;
        } else {
            // If we are getting the second product enable prev button
            if(this.state.index === 0){
                document.querySelector('.prev-product-btn').classList.toggle('disabled')
            }
            // If we are getting the last paroduct disable next button
            if(this.state.index === this.state.products.length-2) {
                document.querySelector('.next-product-btn').classList.toggle('disabled')
            }
            this.setState({index: this.state.index+1})
        }
    }

    render(){

        return(
            <div className='product-details'>
                <CategoriesBar />
                <Breadcrumb page='Product Details'/>
                <ProductInfo info={this.state.products[this.state.index]}/>
                <div className='container'>
                    <div className='prev-next-product text-center pt-4 d-flex justify-content-between'>
                        <button className='prev-product-btn btn btn-primary disabled' onClick={() => this.getPrevProduct()}>
                            <i className='fas fa-arrow-left'></i>
                        </button>
                        <button className='next-product-btn btn btn-primary' onClick={() => this.getNextProduct()}>
                            <i className='fas fa-arrow-right'></i>
                        </button>
                    </div>
                    <ProductReviews />
                </div>
                <PickedForYou />   
            </div>
        );

    }

}

export default ProductDetails;