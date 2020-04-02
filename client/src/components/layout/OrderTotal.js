import React from 'react';

import {Link} from 'react-router-dom';

const OrderTotal = ({subtotal,shipping,total}) => 
    <div className='order-total'>
        <div className='order-total-inner d-flex justify-content-end'>
            <div className='table-responsive w-auto'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                Subtotal
                            </td>
                            <td className='sub-total'>
                                <span>$ {subtotal}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shipping
                            </td>
                            <td className='shipping'>
                                <span>{shipping}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='total-label'>
                                Total
                            </td>
                            <td className='total'>
                                <span>$ {total}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='d-flex justify-content-end'>
            <Link to='/'>
                <button className='btn btn-primary'>Place Order</button>
            </Link>
        </div>
    </div>

export default OrderTotal;