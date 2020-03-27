import React , {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

class CategoryList extends Component {
    render(){
        return(
            <ul class='list-inline upper-text category-list m-0'>
                <li>
                    <Link to='/'>
                        women's clothing
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        men's clothing
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        phone's & accessories
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        computer & office
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        consumer electronics
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        jewlery & watches
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        bags & shoes
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        view all
                    </Link>
                </li>
            </ul>
        );
    }
}

export default CategoryList;