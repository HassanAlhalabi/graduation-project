import React from 'react';

import {Link} from 'react-router-dom';

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

export default FixedCart;
