import React, { Component } from 'react';

class UpperBar extends Component {
    render(){
        return(
            <div className='upper-bar p-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-4'>
                            <span>Welcome to E-shop</span>
                        </div>
                        <div className='col-12 col-sm-8'>
                            <ul className='list-inline text-sm-right m-0'>
                                <li className='d-inline-block'>
                                    <a href='#'>Store</a>
                                </li>
                                <li className='d-inline-block pl-4'>
                                    <a href='#'>Newsletter</a>
                                </li>
                                <li className='d-inline-block pl-4'>
                                    <a href='#'>FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpperBar;