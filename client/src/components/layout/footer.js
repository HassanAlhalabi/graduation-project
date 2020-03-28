import React , { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

const Footer = () => {
    let year;
    year = 2019
    return(
        <footer className='pt-4 pb-4 mt-5'>
            <div className='container'>
                <div className='upper-footer'>
                    <div className='row'>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <Link className="navbar-brand col-2 pl-0" to="/">
                                <span>E</span>-SHOP
                            </Link>
                            <div>
                                <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            </div>
                            <div>
                                <ul className="footer-social list-inline">
                                    <li className='d-inline-block pr-4'><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li className='d-inline-block pr-4'><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className='d-inline-block pr-4'><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li className='d-inline-block pr-4'><a href="#"><i className="fab fa-google-plus"></i></a></li>
                                    <li className='d-inline-block pr-4'><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                </ul> 
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3 account'>
                            <h4 className='pt-4 mb-4'>my account</h4>
                            <div>
                                <ul className='list-inline'>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> MY ACCOUNT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> MY WISHLIST
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> COMPARE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/Checkout'>
                                            <span>></span> CHECKOUT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> LOGIN
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3 services'>
                            <h4 className='pt-4 mb-4'>customer services</h4>
                            <div>
                                <ul className='list-inline'>
                                    <li>
                                        <Link to='/about'>
                                            <span>></span> ABOUT US
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> SHIPPING & RETURN
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> SHIPPING GUIDE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <span>></span> FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-3'>
                            <h4 className='pt-4 mb-4'>contact us</h4>
                            <p>Keep in touch and register to get our latest news,products and offers</p>
                            <form>
                                <div className='form-group'>
                                    <input 
                                        type='email' 
                                        className='form-control form-control-lg rounded-0' 
                                        placeholder='Enter Email Address'/>
                                </div>
                                <div className='form-group'>
                                    <button
                                        type='submit'
                                        className='btn btn-primary rounded-0'>
                                            JOIN NEWSLETTERS   
                                    </button>        
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
                <div className='col-12 copy-rights pt-3 text-center'>
                    <p>&copy; COPYRIGHT {year} ALL RIGHTS RESERVED | E-shop</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;