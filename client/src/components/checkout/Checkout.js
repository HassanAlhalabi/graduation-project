import React , {Component} from 'react';

import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';
import BillingShipping from './BillingShipping';
import OrderReview from './OrderReview';

class Checkout extends Component {


    render(){

        return(
            <div className='checkout'>

                <CategoriesBar />
                <Breadcrumb page={'Checkout'}/>
                <BillingShipping />
                <OrderReview />

            </div>
        );

    }

}

export default Checkout;