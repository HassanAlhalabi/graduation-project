import React , {Component} from 'react';

import SectionTitle from '../layout/SectionTitle';

import {Form} from 'react-bootstrap';

class Shipping extends Component {

    render(){

        return(

            <div className='Shipping-payment'>

                <SectionTitle title={'Shipping Methods'}/>
                <div className='details'>
                    <Form method='post'>
                    <Form.Check
                        type="radio"
                        label="Free Shippping - $0.00"
                        name="shipping_method"
                        id="formHorizontalRadios1"
                        className='pb-3 font-weight-bold'
                        />
                        <Form.Check
                        type="radio"
                        label="Standard - $4.00"
                        name="shipping_method"
                        id="formHorizontalRadios2"
                        className='pb-3 font-weight-bold'
                        />
                        
                    </Form>
                </div>
                <SectionTitle title={'Payment Methods'}/>
                <div className='details'>
                    <Form method='post'>
                        <Form.Check
                            type="radio"
                            label="Direct Bank Transfer"
                            name="payment_method"
                            id="formHorizontalRadios3"
                            className='pb-3 font-weight-bold'
                            />
                        <Form.Check
                            type="radio"
                            label="Paypal System"
                            name="payment_method"
                            id="formHorizontalRadios4"
                            className='pb-3 font-weight-bold'
                            />
                    </Form>
                </div>
            </div>

        );

    }


}

export default Shipping;