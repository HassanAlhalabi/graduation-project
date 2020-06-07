import React from 'react';

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
                            <td>
                                {subtotal}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shipping
                            </td>
                            <td>
                                {shipping}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total
                            </td>
                            <td>
                                {total}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

export default OrderTotal;