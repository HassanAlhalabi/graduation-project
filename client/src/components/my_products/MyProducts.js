import React,{Component} from 'react';

import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';
import FilterBox from '../common/FilterBox';

class MyProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterParams: {
                price : 1000,
                colors: [],
                brand : 'all',
                size  : 'all',
            },
        }
    }

    getFilterParameters = params => {
        this.setState({filterParams : params})
    }

    render(){
        return(

            <div className='products'>
                <CategoriesBar />
                <Breadcrumb page='My Products'/>
                <div className='container mt-5'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='col-12 col-md-3'>
                            <FilterBox filterParams={ this.getFilterParameters } />
                        </div>
                        {/* Products Show */}
                        <div className='col-12 col-sm-6 col-md-9'>
                            <h2>My Products In Here</h2>
                        </div>
                    </div>    
                </div>
            </div>

        );
    }
}

export default MyProducts;