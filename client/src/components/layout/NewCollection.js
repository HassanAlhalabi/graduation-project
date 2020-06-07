import React from 'react';

import Banner10 from './img/banner10.jpg'
import Banner11 from './img/banner11.jpg'
import Banner12 from './img/banner12.jpg'

import {Link} from 'react-router-dom'

const Newcollection = () =>
    <div className='newcollection mb-5 mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='collection1 col-12 col-sm-4 mb-2'>
                    <div className=' position-relative'>
                        <img src={Banner10} alt='collection-img' className='img-fluid'/>
                        <div className='link-text position-absolute'>
                            <Link className="nav-link px-2 bg-primary text-white rounded" to="/products">New Collection</Link>
                        </div>
                    </div>
                </div>  
                <div className='collection2 col-12 col-sm-4 mb-2'>
                    <div className=' position-relative'>
                        <img src={Banner11} alt='collection-img' className='img-fluid'/>
                        <div className='link-text position-absolute'>
                            <Link className="nav-link px-2 bg-primary text-white rounded" to="/products">New Collection</Link>
                        </div>
                    </div>
                </div>
                <div className='collection3 col-12 col-sm-4 mb-2'>
                    <div className=' position-relative'>
                        <img src={Banner12} alt='collection-img' className='img-fluid'/>
                        <div className='link-text position-absolute'>
                            <Link className="nav-link px-2 bg-primary text-white rounded" to="/products">New Collection</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>

export default Newcollection;    