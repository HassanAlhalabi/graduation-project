import React , {Component} from 'react';

import Breadcrumb from '../layout/Breadcrumb';
import CategoriesBar from '../layout/CategoriesBar';

class Checkout extends Component {


    render(){

        return(
            <div className='checkout'>

                <Breadcrumb page={Checkout}/>
                <CategoriesBar />

                <div>
                    checkout
                </div>
            </div>
        );

    }

}

export default Checkout;