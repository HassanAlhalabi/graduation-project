import React from 'react';

const Order = ({
        id,
        name,
        image,
        size,
        color,
        price,
        pre_price,
        availableQuantity,
        quantity,
        removeProduct,
        updateQuantity,
    }) => 

    <tr className='order' id={'order'+id}>
        <td className='p_details'>
            <div className='float-left'>
                <img src={image} alt='Order Image' />
            </div>
            <div>
                <h4 className='p_name'>{name}</h4>
                <p className='size default-color m-0 pt-1'>{size}</p>
                <div>
                    <div className='order-color' style={{backgroundColor : color}}>     
                    </div>
                </div>
            </div>
            <div className='clearfix'></div>
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
                    min='1'
                    max={availableQuantity} 
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
