import React,{Component} from 'react';

import Breadcrumb from '../layout/Breadcrumb';
import CategoriesBar from '../layout/CategoriesBar';
import FilterBox from '../layout/FilterBox';

import Axios from 'axios';

class Products extends Component {

    render(){
        return(

            <div className='products'>
                <Breadcrumb page='Products'/>
                <CategoriesBar />
                <div className='container mt-5'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='col-12 col-md-3'>
                            <FilterBox />
                        </div>
                        {/* Products Show */}
                        <div className='col-12 col-sm-6 col-md-9'>
                            <h2>Products In Here</h2>
                        </div>
                    </div>    
                </div>
            </div>

        );
    }
}

export default Products;