import React , {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class CategoriesList extends Component {
    render(){
        return(
            <ul className='list-inline upper-text category-list m-0'>
                <li className='pl-0 pr-0'>
                    <Link to="/products/products-categories/women clothing">
                        women's clothing
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to="/products/products-categories/men clothing">
                        men's clothing
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products/products-categories/phones & accessories'>
                        phones & accessories
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products/products-categories/computer & office'>
                        computer & office
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products/products-categories/consumer electronics'>
                        consumer electronics
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products/products-categories/jewlery-&-watches'>
                        jewlery & watches
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products/products-categories'>
                        view all ...
                    </Link>
                </li>
            </ul>
        );
    }
}

export default CategoriesList;