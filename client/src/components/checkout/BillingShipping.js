import React , {Component} from 'react';
import {Form} from 'react-bootstrap';
import SectionTitle from '../common/SectionTitle';
import {connect} from 'react-redux';
import {changeShippingMethodDispatch} from '../../redux/reducers/productsReducer';


class BillingShipping extends Component {

    shippingChange = shippingMethod => {
        this.props.changeShippingMethod(shippingMethod)
    }

    render(){

        return(
            
            <div className='billing-shipping'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-12 col-md-6'>
                            
                            <div className='billing'>
                                <SectionTitle title={'billing details'}/>
                                <div className='details'>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="First Name" className='rounded-0' name='f_name'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Last Name" className='rounded-0' name='l_name'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Email" className='rounded-0' name='email'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Address" className='rounded-0' name='address'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="City" className='rounded-0' name='city'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Countrey" className='rounded-0' name='countrey'/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Telephone" className='rounded-0' name='telephone'/>
                                        </Form.Group>
                                    </Form>
                                </div>
                            
                            </div>
                        </div>

                        <div className='col-12 col-md-6'>

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
                          
                        </div>

                    </div>

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

export default connect(mapStateToProps,changeShippingMethodDispatch)(BillingShipping);