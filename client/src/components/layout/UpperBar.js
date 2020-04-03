import React from 'react';

import {Link} from 'react-router-dom';

const UpperBar = () => 

    <div className='upper-bar'>
        <div className='container'>
            <div className=' row'>
                <div className='col-12 col-md-6 text-center text-md-left'>
                    <div className='welcome'>
                        <p>Welcome to E-shop :)</p>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='upper-bar-links'>
                        <ul className='list-inline d-flex text-center justify-content-center justify-content-md-end'>
                            <li className='list-item'>
                                <Link to='/products'>Store</Link>
                            </li>
                            <li className='list-item ml-3'>
                                <a href='#news-letter'>Newsletter</a>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>    
        </div>
    </div>

export default UpperBar;