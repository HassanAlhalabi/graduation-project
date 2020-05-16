import React , {Component} from 'react';
import {connect} from 'react-redux';
import {productInCartDispatch} from '../../redux/reducers/productsReducer'
import SectionTitle from  '../common/SectionTitle';

import Order from './Order';
import OrderTotal from './OrderTotal'

class OrderReview extends Component {

    // Remove product function
    removeProduct = id => this.props.removeProductFromCart(id)

    // *********** Update quantity function ***************** //

    updateQuantity = (pid) => {
        let newQuntity = document.querySelector('#order' + pid + ' input[type="number"]').value;
        this.props.updateProduct(pid,newQuntity)
        
    }

    getSubtotal = () => {
        let subtotal = 0;
        this.props.productsInCart.map( product => subtotal += ( product.price * product.quantity ))
        return(subtotal.toFixed(2))
    }

    render(){

        let {productsInCart,shippingMethod} = this.props; 
        let shippingValue = shippingMethod === 'free' ? 0 : 4;
        
        if(productsInCart.length > 0) { 
        
            return (

                <div className='order-review mb-5'>
                    <div className='container'>
                        
                        <SectionTitle title={'Order Review'}/>
                        <div className='table-responsive'>
                            <table className='table mb-0'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {  
                    
                                        productsInCart.map(product => {
                                            
                                                return(
                                                    <Order 
                                                        id                = {product.id}
                                                        name              = {product.title}
                                                        image             = {product.image}
                                                        size              = {product.size}
                                                        color             = {product.color}
                                                        price             = {product.price}
                                                        pre_price         = {product.pre_price}
                                                        availableQuantity = {product.availableQuantity}
                                                        quantity          = {product.quantity}
                                                        updateQuantity    = {() => this.updateQuantity(product.id)}
                                                        removeProduct     = {() => this.removeProduct(product.id)} 
                                                        />
                                                );  
                                            
                                        }) 
                                }
                            </tbody>
                        </table>
                    </div>
                    <OrderTotal 
                                subtotal={this.getSubtotal()} shippingDesc={shippingMethod === 'free' ? 'Free' : 'Standard'} 
                                total={(this.getSubtotal()*1 + shippingValue)}/>
                </div>
            </div>

        ) } else {
            return(

                <div className='order-review'>
                    <div className='container'>
                        <SectionTitle title={'Order Review'}/>
                        <div>
                            <p className='alert alert-orange rounded-0'>No Products In Cart !!</p>
                        </div>
                    </div>
                </div>        
            )
        }
    }
}

const mapStateToProps = state => {
    return({
        productsInCart : state.products.productsInCart,
        shippingMethod : state.products.shippingMethod,
        loading : state.products.loading
    })
}



export default connect(mapStateToProps,productInCartDispatch)(OrderReview);