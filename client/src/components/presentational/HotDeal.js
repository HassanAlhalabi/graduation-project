import React from 'react';

import Banner10 from '../layout/img/banner10.jpg'
import Banner11 from '../layout/img/banner11.jpg'
import Banner12 from '../layout/img/banner12.jpg'

import {Link} from 'react-router-dom'

const HotDeal = () => 

    <div className='hot-deal mb-5 mt-5'>
        <div className='container'>
            <div className='row'>
                 <div className='col-12 col-sm-12 mb-sm-2 mb-md-0 col-md-8'>
                    <div className='position-relative'>
                        <img src={Banner12} alt='hot-deal-img' className='img-fluid'/>
                        <div className='position-absolute text-content d-flex'>
                            <div className='text-center align-self-center w-100'>
                                <h3>Hot Deal</h3>
                                <p>Up to 50%</p>
                                <div>
                                    <Link to='/products'>
                                        <button className='btn btn-primary btn-lg'>Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                 </div>
                 <div className='col-12 col-sm-12 col-md-4 d-flex flex-sm-row flex-md-column justify-content-between'>
                    <div className=''>
                        <div className=' position-relative'>
                            <img src={Banner10} alt='collection-img' className='img-fluid'/>
                            <div className='link-text position-absolute'>
                                <Link className="nav-link px-2 bg-primary text-white rounded" to="/products">New Collection</Link>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' position-relative'>
                            <img src={Banner11} alt='collection-img' className='img-fluid'/>
                            <div className='link-text position-absolute'>
                                <Link className="nav-link px-2 bg-primary text-white rounded" to="/products">New Collection</Link>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>

export default HotDeal    