import React from 'react';

const Order = ({name,size,color,price,pre_price,quantity,removeProduct,updateQuantity}) => 

    <tr className='order'>
        <td className='p_details'>
            <h4 className='p_name'>{name}</h4>
            <p className='size default-color m-0 pt-1'>{size}</p>
            <p className='color default-color m-0 pt-1'>{color}</p>
        </td>
        <td className='pricing'>
            <h5 className='price'>$ {price.toFixed(2)}</h5>
            <p className='pre_price default-color'>$ {pre_price.toFixed(2)}</p>
        </td>
        <td className='quantity'>
            <div className='form-group'>
                <input 
                    type='number' 
                    name='quantity' 
                    className='quantity form-control rounded-0'
                    defaultValue={quantity} 
                    onChange={updateQuantity}
                    />
            </div>
        </td>
        <td className='total'>
            <h4 className='orange-color'>
                $ {(price * quantity).toFixed(2)}
            </h4>
        </td>
        <td className='delete-product'>
            <button className='btn btn-priamry block-center' onClick={removeProduct}>
                <i className='fas fa-trash'></i>
            </button>
        </td>
    </tr>

export default Order;
