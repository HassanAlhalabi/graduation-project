import React from 'react';

import P from '../layout/img/product07.jpg'
import { Link } from 'react-router-dom';

const Category = ({name,image}) => 

    <div className='category'>
        <div className='category-inner'>
            <Link to={'/products/products-categories/'+name}>
                <div className='category-holder position-relative'>
                    <div className='category-image h-100'>
                        <img src={image} />
                    </div>
                    <div className='category-content position-absolute w-100 h-100'>
                        <div>
                            {name}
                        </div>
                    </div>
                </div>
            </Link>    
        </div>
    </div>

export default Category    