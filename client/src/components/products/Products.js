import React,{Component} from 'react';

import Breadcrumb from '../layout/Breadcrumb';

class Products extends Component {
    render(){
        return(
            <div className='products'>

                <Breadcrumb page='Products'/>
                <div className='container'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='d-none d-md-block col-md-4'>

                        </div>
                        {/* Products Show */}
                        <div className='col-12 col-sm-6 col-md-4 col-xl-3'>

                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Products;