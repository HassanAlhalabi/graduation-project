import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addProductToCartDispatch} from '../../redux/reducers/productsReducer';
import ProductModal from './ProductModal';

class Productcard extends Component {

  handleAddToCart = product => this.props.addProductToCart(product)

  addToWishList = () => console.log('Add To Wish List')

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
            {/* <Link to="/">
              <img
                className="pic-1"
                src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-1.jpg"
              />
              <img
                className="pic-2"
                src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-2.jpg"
              />
            </Link> */}
            <img
                className="pic-1"
                src={product.image}
              />
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
            <div className="title text-left">
              {/* <ProductModal product={product} /> */}
              <h4 className='font-weight-bold'>
                <Link to={'productdetails/'+product.id}> 
                  {product.name}
                </Link>
              </h4>  
            </div>
            
            <div className='product-options d-flex pt-1 pb-1'>
              <div className='wish-list mr-2' onClick={() => this.addToWishList()}>
                <i className='fas fa-heart'></i>
              </div>
              <div className='add-to-cart '>
                <button className='btn btn-primary' onClick={() => this.handleAddToCart({...product,quantity:1})}>
                  <i className='fas fa-shopping-cart'></i> Add ToCart
                </button>
              </div>
            </div>

          </div>
        </div>
    );
  }
}

export default connect(null,addProductToCartDispatch)(Productcard);
