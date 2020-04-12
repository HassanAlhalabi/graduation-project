import React , {Component } from 'react'
import { Link } from 'react-router-dom';

class CategoriesBar extends Component {

    showList = () => {
        document.querySelector('.pages-dropdown').classList.toggle('active');
    }

    render(){
        return(
            <div className='categories'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 pt-3 pb-2 d-none d-xl-flex'>
                            <span>CATEGORIES</span>
                            <span className=''><i className='fas fa-list-alt'></i></span>
                        </div>
                        <div className='col-12 col-xl-9 pt-3 pb-3'>
                            <ul className='list-inline m-0'>
                                <li className='list-item d-inline-block pr-4'>
                                    <Link to='/'>HOME</Link>
                                </li>
                                <li className='list-item d-inline-block pr-4'>
                                    <Link to='/products'>SHOP</Link>
                                </li>
                                <li className='list-item d-inline-block pr-4'>
                                    <Link to='/products'>WOMEN</Link>
                                </li>
                                <li className='list-item d-inline-block pr-4'>
                                    <Link to='/products'>MEN</Link>
                                </li>
                                <li className='list-item d-inline-block pr-4 position-relative'>
                                    <a href='#' className='pages-dropdown-click' onClick={() => this.showList()}>
                                        PAGES <i className='fas fa-caret-down'></i>
                                    </a>
                                    <div className='pages-dropdown position-absolute' >
                                        <ul className='m-0 list-group'>
                                            <Link to='/'>
                                                <li className='list-group-item'>Home</li>
                                            </Link>
                                            <Link to='/Products'>
                                                <li className='list-group-item'>Products</li>
                                            </Link>
                                            <Link to='/Productdetails'>
                                                <li className='list-group-item'>Product Details</li>
                                            </Link>
                                            <Link to='/Checkout'>
                                                <li className='list-group-item'>Checkout</li>
                                            </Link>
                                            <Link to='/About'>
                                                <li className='list-group-item'>About</li>
                                            </Link> 
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriesBar; 
