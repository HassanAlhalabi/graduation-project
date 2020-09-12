import React , {Component} from 'react';

import SectionTitle from '../common/SectionTitle';

import {Form} from 'react-bootstrap';

class Billing extends Component {

    render(){

        return(

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

                <div>

                </div>
            </div>

        );

    }


}

export default Billing;
