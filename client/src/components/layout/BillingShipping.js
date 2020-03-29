import React , {Component} from 'react';

import Billing from './Billing';
import Shipping from './Shipping';

class BillingShiping extends Component {

    render(){

        return(
            
            <div className='billing-shipping'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-12 col-md-6'>
                            <Billing />
                        </div>
                        <div className='col-12 col-md-6'>
                            <Shipping />
                        </div>

                    </div>

                </div>


            </div>

        );

    }

}

export default BillingShiping;