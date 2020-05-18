import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProductToCartDispatch} from '../../redux/reducers/productsReducer';
import ProductModal from './ProductModal';

class Productcard extends Component {

  handleAddToCart = product => this.props.addProductToCart(product)

  render() {
    const { product } = this.props;
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
            <span className="product-new-label">New</span>
          </div>
          <div className="product-content">
            <div className='d-flex justify-content-between'>
              <div className="price">
                ${product.price.toFixed(2)}
                <span>$20.00</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
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
