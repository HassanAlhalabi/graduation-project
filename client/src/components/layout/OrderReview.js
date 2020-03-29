import React , {Component} from 'react';

import SectionTitle from  './SectionTitle';

import Order from './Order';

class OrderReview extends Component {

    constructor(props){
        super(props);

        this.state = {
            productsInCart : [
                {
                    id: 1,
                    title: 'p1',
                    price: 5.4,
                    pre_price: 10,
                    size: 'xl',
                    color: 'red',
                    quantity: 3,
                },
                {
                    id: 2,
                    title: 'p2',
                    price: 15.4,
                    pre_price: 20,
                    size: 'xl',
                    color: 'red',
                    quantity: 1,
                },
                {
                    id: 3,
                    title: 'p3',
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
    updateQuantity = e => console.log(e.target.value)

    render(){
        if(this.state.productsInCart.length > 0) { 
        
            return (

                <div className='order-review'>
                    <div className='container'>
                        
                        <SectionTitle title={'Order Review'}/>
                        <div className='table-responsive'>
                            <table className='table'>
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
                                                        key            = {product.id}
                                                        name           = {product.title}
                                                        size           = {product.size}
                                                        color          = {product.color}
                                                        price          = {product.price}
                                                        pre_price      = {product.pre_price}
                                                        quantity       = {product.quantity} 
                                                        removeProduct  = {() => this.removeProduct(product.id)}
                                                        updateQuantity = { this.updateQuantity } />
                                                );
                                            
                                            
                                        }) 
                                }
                            </tbody>
                        </table>
                    </div>
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