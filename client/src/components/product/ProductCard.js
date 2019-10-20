import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductModal from './ProductModal';

class Productcard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-3 col-sm-6">
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
                <a href="" className="fa fa-cart-plus" />
              </li>
            </ul>
            <span className="product-new-label">New</span>
          </div>
          <div className="product-content">
            <h3 className="title">
              <ProductModal product={product} />
            </h3>
            <ul className="rating">
              <li className="fa fa-star" />
              <li className="fa fa-star" />
              <li className="fa fa-star" />
              <li className="fa fa-star" />
              <li className="fa fa-star" />
            </ul>
            <div className="price">
              ${product.price}
              <span>$20.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Productcard;
