import React , {Component} from 'react';

import SectionTitle from '../common/SectionTitle';

import {Form} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeShippingMethodDispatch} from '../../redux/reducers/productsReducer';

class Shipping extends Component {


    shippingChange = shippingMethod => {
        this.props. changeShippingMethod(shippingMethod)
    }

    

    render(){

        return(

            <div className='Shipping-payment'>

                <SectionTitle title={'Shipping Methods'}/>
                <div className='details'>
                    <Form>
                        <Form.Check
                            type="radio"
                            label="Free Shippping - $0.00"
                            name="shipping_method"
                            id="formHorizontalRadios1"
                            className='pb-3 font-weight-bold'
                            checked={this.props.shippingMethod === 'free'}
                            defaultValue='free'
                            onChange={() => this.shippingChange('free')}
                            />
                            <Form.Check
                            type="radio"
                            label="Standard - $4.00"
                            name="shipping_method"
                            id="formHorizontalRadios2"
                            className='pb-3 font-weight-bold'
                            checked={this.props.shippingMethod === 'standard'}
                            defaultValue='standard'
                            onChange={() => this.shippingChange('standard')}
                            />
                    </Form>
                </div>
                
                <div>
                <SectionTitle title={this.props.shippingMethod + ' Shipping'} headerClass={'small'}/>
                    {this.props.shippingMethod === 'free' ?
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempnim id est laborum. free</p>
                    : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi llum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ollit anim id est laborum.</p>
                    }
                </div>
                
            </div>

        );

    }
}

const mapStateToProps = state => {
    return({
        shippingMethod : state.products.shippingMethod
    })
}

export default connect(mapStateToProps,changeShippingMethodDispatch)(Shipping);