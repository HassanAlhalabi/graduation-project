import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProductToCartDispatch} from '../../redux/reducers/productsReducer';
import ProductModal from './ProductModal';

class Productcard extends Component {

  handleAddToCart = product => this.props.addProductToCart(product)

  render() {
    const { product } = this.props;
    let ratingFull = [];
    let ratingEmpty = [];

    for (let index = 0; index < product.rating; index++) {
        ratingFull.push(<li><i className='fa fa-star'></i></li>)
    }
    for (let index = 0; index < (5 - product.rating); index++) {
        ratingEmpty.push(<li><i className='far fa-star empty'></i></li>)
    } 
    return (
        <div className="product-grid7">
          <div className="product-image7">
            <Link to="/">
              <img
                className="pic-1"
                src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-1.jpg"
              />
              <img
                className="pic-2"
                src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-2.jpg"
              />
            </Link>
            <ul className="social">
              <li>
                <button className='btn btn-primary font-weight-bold ml-auto' onClick={() => this.handleAddToCart({...product,quantity:1})}>
                  <i className='fas fa-shopping-cart'></i>
                </button>
              </li>
            </ul>
            <div className="product-new-label text-center">
              <div className='new'>New</div>
              <div className='discount'>-{100 - Math.ceil(( product.price / product.prevPrice) * 100) }%</div>
            </div>
          </div>
          <div className="product-content">
            <div className='d-flex justify-content-between'>
              <div className="price">
                ${product.price.toFixed(2)}
                <span>${product.prevPrice.toFixed(2)}</span>
              </div>
              <ul className="rating list-inline d-flex">
                {ratingFull}{ratingEmpty}
              </ul>
            </div>    
            <h3 className="title">
              <ProductModal product={product} />
            </h3>
            
          </div>
        </div>
    );
  }
}

export default connect(null,addProductToCartDispatch)(Productcard);
