import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

const FixedCart = ({NumberOfProductsInCart}) => 

    <div className='fixed-cart'>
        <div className='fixed-cart-inner text-center'>
            <Link to='/Checkout'>
                <i className='fa fa-shopping-cart fa-lg fa-fw'></i>
            </Link>
        </div>
        <div className='number-of-products-in-cart position-absolute'>
            <p>{NumberOfProductsInCart}</p>
        </div>
    </div>

const mapStateToProps = state => {
    return({
        NumberOfProductsInCart : state.products.productsInCart.length,
    })
}

export default connect(mapStateToProps,null)(FixedCart);
