import React , {Component} from 'react';

import SectionTitle from  '../layout/SectionTitle';

import Order from './Order';
import OrderTotal from './OrderTotal'

class OrderReview extends Component {

    constructor(props){
        super(props);

        this.state = {
            products : [
                {
                    id: 1,
                    title: 'Product name 1',
                    image: 'https://via.placeholder.com/450',
                    price: 5.4,
                    pre_price: 10,
                    category: 'menclothing',
                    rating: 4,
                    availability: 1,
                    brand: 'brand',
                    size: 'xl',
                    color: 'red',
                    quantity: 3,
                }],
            productsInCart : [
                {
                    id: 1,
                    title: 'Product name 1',
                    image: 'https://via.placeholder.com/100',
                    price: 5.4,
                    pre_price: 10,
                    size: 'xl',
                    color: 'red',
                    quantity: 3,
                },
                {
                    id: 2,
                    title: 'Product name 2',
                    image: 'https://via.placeholder.com/100',
                    price: 15.4,
                    pre_price: 20,
                    size: 'xl',
                    color: 'red',
                    quantity: 1,
                },
                {
                    id: 3,
                    title: 'Product name 3',
                    image: 'https://via.placeholder.com/100',
                    price: 54,
                    pre_price: 60,
                    size: 'xl',
                    color: 'red',
                    quantity: 5,
                },
            ]
        }

    }

    // Remove product function
    removeProduct = id => this.setState({
        productsInCart:this.state.productsInCart.filter(product => product.id !== id )
    })

    // *********** Update quantity function ***************** //

    updateQuantity = (pid) => {
        let newQuntity = document.querySelector('#order' + pid + ' input[type="number"]').value;
        this.setState({
            productsInCart: this.state.productsInCart.map(product => 
                product.id === pid ? {...product,quantity : newQuntity} : product
            )
        })
    }

    getSubtotal = () => {
        let subtotal = 0;
        this.state.productsInCart.map( product => subtotal += ( product.price * product.quantity ))
        return(subtotal.toFixed(2))
    }

    render(){
        console.log(this.state.productsInCart)
        if(this.state.productsInCart.length > 0) { 
        
            return (

                <div className='order-review'>
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
                    
                                        this.state.productsInCart.map(product => {
                                            
                                                return(
                                                    <Order 
                                                        id             = {product.id}
                                                        name           = {product.title}
                                                        image          = {product.image}
                                                        size           = {product.size}
                                                        color          = {product.color}
                                                        price          = {product.price}
                                                        pre_price      = {product.pre_price}
                                                        quantity       = {product.quantity} 
                                                        removeProduct  = {() => this.removeProduct(product.id)}
                                                        updateQuantity = {() => this.updateQuantity(product.id)} 
                                                        />
                                                );  
                                            
                                        }) 
                                }
                            </tbody>
                        </table>
                    </div>
                    <OrderTotal 
                                subtotal={this.getSubtotal()} shipping={'Free Shipping'} 
                                total={(this.getSubtotal()*1 + 4)}/>
                </div>
            </div>

        ) } else {
            return(

                <div className='order-review'>
                    <div className='container'>
                        <SectionTitle title={'Order Review'}/>
                        <div>
                            <p className='alert alert-orange rounded-0'>No Products Ordrs In Cart !!</p>
                        </div>
                    </div>
                </div>        
            )
        }
    }

}

export default OrderReview;