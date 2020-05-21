import React,{Component} from 'react';

import SectionTitle from '../common/SectionTitle';
import ProductCard from '../product/ProductCard';
import {Link} from 'react-router-dom';
import DealsOfTheDayImage from '../common/img/banner14.jpg';
import Spinner from '../common/Spinner';
import Slider from 'react-slick';

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

    render(){

        const products = this.state.products.filter(product => {
            return(
                product.pending === false &&
                product.offer === true
            )
        });

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return( 

            <div className='latest-products pt-5 pb-5 overflow-hidden'>
                <div className='container'>
                    <SectionTitle title={"deals of the day"}/>
                    <div className='row h-100'>
                        <div className='col-sm-6 col-lg-3  mb-5'>
                            <div className='position-relative h-100'>
                                <div className='h-100'> 
                                    <img src={DealsOfTheDayImage} alt='deals-of-the-day image' className='img-fluid w-100 h-100'/>
                                </div>
                                <div className='position-absolute deals-collection-link'>
                                    <h3>New Collection</h3>
                                    <Link to='/products'>
                                        <button className='btn btn-primary btn-lg'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-lg-9 mb-3'>
                            <div className='slick-container'>
                                <Slider {...settings}>
                                {products.length > 0
                                    ? products.map(product => (
                                        <div key={product._id}>
                                            <ProductCard key={product._id} product={product} />
                                        </div>
                                        ))
                                : <div className='col-12 col-md-6 col-lg-9 mb-3'><Spinner /></div>}
                                </Slider>    
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        
        );

    }

}

export default DealsOfTheDay