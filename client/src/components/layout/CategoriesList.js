import React , {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class CategoriesList extends Component {
    render(){
        return(
            <ul className='list-inline upper-text category-list m-0'>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        women's clothing
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        men's clothing
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        phone's & accessories
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        computer & office
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        consumer electronics
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        jewlery & watches
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        bags & shoes
                    </Link>
                </li>
                <li className='pl-0 pr-0'>
                    <Link to='/products'>
                        view all
                    </Link>
                </li>
            </ul>
        );
    }
}

export default CategoriesList;