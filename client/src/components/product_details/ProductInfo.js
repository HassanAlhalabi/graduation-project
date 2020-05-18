import React , {Component} from 'react';
import {connect} from 'react-redux';
import {addProductToCartDispatch} from '../../redux/reducers/productsReducer';
 
const ProductInfo = ({info,addProductToCart}) => {

    const handleAddToCart = () => {
        // ...... Create Product ......... //
        //Get quantity
        let quantity = document.getElementById('quantity').value * 1;
        let product = {...info,quantity: quantity}
        addProductToCart(product)
    }

    let ratingFull = [];
    let ratingEmpty = [];

    for (let index = 0; index < info.rating; index++) {
        ratingFull.push(<i className='fa fa-star'></i>)
    }
    for (let index = 0; index < (5 - info.rating); index++) {
        ratingEmpty.push(<i className='far fa-star empty'></i>)
    }  

    let available = (info.availability === 1) ? 'In Stock' : 'Not Available';

    return(
        <div className='product-info'>
            <div className='container mt-5'>
                <div className='row'>
                    {/* Product Img */}
                    <div className='col-12 col-md-6'>
                        <div className='product-img mb-3'>
                            <img src={info.image} alt='product-img' className='img-fluid'/>
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className='col-12 col-md-6'>
                        <div className='product-info'>
                            <h2 className='product-title'>{info.title}</h2>
                            <div className='pricing'>
                                <span className='current-price mr-2'>
                                    ${info.price.toFixed(2)}
                                </span>
                                <span className='pre-price'>
                                    {/* ${info.prevPrice.toFixed(2)} */}
                                </span>
                            </div>
                            <div className='rating mt-2'>
                                {ratingFull}{ratingEmpty}
                            </div>
                            <div className='availability mt-2'>
                                <span className='font-weight-bold'>Availability: </span>
                                <span className='default-color'>{available} ({info.availableQuantity} Available)</span>
                            </div>
                            <div className='brand mt-2'>
                                <span className='font-weight-bold'>Brand: </span>
                                <span className='default-color'>{info.brand}</span>
                            </div>
                            <div className='brand mt-2'>
                                <span className='default-color'>{info.description}</span>
                            </div>
                            <hr />
                            <div className='size'>
                                <span className='font-weight-bold span-fw'>Size: </span>
                                <span>{info.size}</span>
                            </div>
                            <div className='color mt-4'>
                                <span className='font-weight-bold span-fw'>Color: </span>
                                <span style={{backgroundColor:info.color}}></span>
                            </div>
                            <div className='quantity mt-4 d-flex'>
                                <div className='row'>
                                    <div className='col-12 col-sm-6 mb-4'>
                                        <span className='font-weight-bold span-fw'>Quantity:</span>
                                        <input 
                                            type='number' 
                                            className='form-control d-inline-block rounded-0 mr-2' 
                                            max={info.availableQuantity}
                                            min='1'
                                            defaultValue={1}
                                            id='quantity'/>
                                    </div>
                                    <div className='col-12 col-sm-6 pr-0'>
                                        <button className='btn btn-primary font-weight-bold ml-auto' onClick={handleAddToCart}>
                                        <i className='fas fa-shopping-cart mr-1'></i>
                                        Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
} 



export default connect(null ,addProductToCartDispatch)(ProductInfo)