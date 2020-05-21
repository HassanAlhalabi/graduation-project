import React,{Component} from 'react';

import SectionTitle from '../common/SectionTitle';
import ProductCard from '../product/ProductCard';
import {Link} from 'react-router-dom';
import DealsOfTheDayImage from '../common/img/banner14.jpg';
import Spinner from '../common/Spinner';

class DealsOfTheDay extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    componentWillReceiveProps () {
        this.setState({ products: this.props.products})
    }

    componentDidMount() {

        let productContainerWidthOffset = document.querySelector('.latest-products-container').offsetWidth
        let hiddenElements = [...document.querySelectorAll('.latest-products-container > div')].filter(element => {
            return element.offsetLeft >= productContainerWidthOffset
        })
        let hiddenElementsNumber = hiddenElements.length
        window.onresize = () => {
            productContainerWidthOffset = document.querySelector('.latest-products-container').offsetWidth
            let visibleElements = [...document.querySelectorAll('.latest-products-container > div')].filter(element => {
                return element.offsetLeft < productContainerWidthOffset
            })
    
            hiddenElements = [...document.querySelectorAll('.latest-products-container > div')].filter(element => {
                return element.offsetLeft >= productContainerWidthOffset
            })
            console.log(visibleElements)
            hiddenElementsNumber = hiddenElements.length
        }
        
    }

    render(){

        const products = this.state.products;

        return( 

            <div className='latest-products pt-5 pb-5'>
                <div className='container'>
                    <SectionTitle title={"deals of the day"}/>
                    <div className='pointers d-flex justify-content-end pb-2'>
                        <div className='point pl-1'>
                            <i className='fas fa-circle'></i>
                        </div>
                        <div className='point pl-1'>
                            <i className='fas fa-circle'></i>
                        </div>
                    </div>
                    <div className='row h-100'>
                        <div className='col-6 col-lg-3 mb-3'>
                            <div className='position-relative'>
                                <div>
                                    <img src={DealsOfTheDayImage} alt='deals-of-the-day image' className='img-fluid w-100'/>
                                </div>
                                <div className='position-absolute deals-collection-link'>
                                    <h3>New Collection</h3>
                                    <Link to='/products'>
                                        <button className='btn btn-primary btn-lg'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-9 mb-3'>
                            <div className='row flex-nowrap overflow-auto latest-products-container'>
                                {products.length > 0
                                    ? products.map(product => (
                                        <div className='col-12 col-lg-4 mb-3' key={product._id}>
                                            <ProductCard key={product._id} product={product} />
                                        </div>
                                        ))
                                : <div className='col-12 col-md-6 col-lg-9 mb-3'><Spinner /></div>}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        
        );

    }

}

export default DealsOfTheDay