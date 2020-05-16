import React , {Component} from 'react';

import { Link } from 'react-router-dom';


// class MyProductView extends Component { 

//     constructor(props) {
//         super(props)

//         this.state = {
//             product : this.props.product
//         }

//     }

//     deleteProduct = id =>  {
//         this.props.handleDelete(id)
//     }

//     render(){

//         const { product } = this.state;

//         return(

//             <div className='my-product-view mb-4 p-2'>
//                 <div className='row'>
//                     <div className='col-6 col-lg-2'>
//                         <img 
//                             src={product.image} 
//                             alt='My Product Image' 
//                             width='150px'
//                             height='150px'/>
//                     </div>
//                     <div className='col-6 col-lg-2'>
//                         <div className='d-flex h-100'>
//                             <div className='d-flex flex-column justify-content-around h-100'>
//                                 <div className='product-name'>
//                                     <strong>{product.name}</strong>
//                                 </div>
//                                 <div className='d-flex'>
//                                     <div className='pr-2 price'>
//                                         ${product.price}
//                                     </div>
//                                     <div className='prev-price'>
//                                         <strike>${product.prevPrice}</strike>
//                                     </div>
//                                 </div> 
//                                 <div>Size: <span className='text-uppercase'>{product.size}</span></div>   
//                                 <div className='d-flex'>
//                                     <div className='pr-2'>Color:</div>
//                                     <div style={{
//                                         backgroundColor : product.color,
//                                         width : '25px',
//                                         height: '25px',
//                                         border: '1px solid #FFF'
//                                         }}>     
//                                     </div>
//                                 </div>
//                             </div>
//                             <div></div>    
//                         </div>
//                     </div>
//                     <div className='col-12 d-lg-none'>
//                         <hr />
//                     </div>
//                     <div className='col-6 col-lg-2'>
//                         <div className='h-100 d-flex'>
//                             <div className='d-flex flex-column justify-content-around h-100'>
//                                 <div className='text-capitalize'>{product.category}</div>
//                                 <div>Brand: {product.brand}</div>
//                                 <div><span className='orange-color'>{product.availableQuantity}</span> available</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-6 col-lg-4'>
//                         <div className='h-100 pt-3 pb-3'>
//                             <p>{product.description}</p>
//                         </div>
//                     </div>
//                     <div className='col-12 d-lg-none'>
//                         <hr />
//                     </div>
//                     <div className='col-12 col-lg-2'>
//                         <div className='h-100 d-flex justify-content-center'>
//                             <div className='d-flex flex-lg-column justify-content-around h-100 w-100 p-3'>
//                                 <div>
//                                     <Link to={'./updateproduct/'+product.id}>
//                                         <button className='btn btn-primary'>Modify</button>
//                                     </Link>   
//                                 </div>
//                                 <div>
//                                     <button className='btn btn-danger rounded-0' onClick={() => this.deleteProduct(product.id)}>Delete</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }    

// }

const MyProductView = ({product,handleDelete}) => { 

    const deleteProduct = id => {
        handleDelete(id)
    }

    return(
        <div>
            {product.pending ? <div className='pending-tag p-2'>Pending</div> : null}
            <div className='my-product-view mb-4 p-2'>
                <div className='row'>
                    <div className='col-6 col-lg-2'>
                        <img 
                            src={product.image} 
                            alt='My Product Image' 
                            width='150px'
                            height='150px'/>
                    </div>
                    <div className='col-6 col-lg-2'>
                        <div className='d-flex h-100'>
                            <div className='d-flex flex-column justify-content-around h-100'>
                                <div className='product-name'>
                                    <strong>{product.name}</strong>
                                </div>
                                <div className='d-flex'>
                                    <div className='pr-2 price'>
                                        ${product.price}
                                    </div>
                                    <div className='prev-price'>
                                        <strike>${product.prevPrice}</strike>
                                    </div>
                                </div> 
                                <div>Size: <span className='text-uppercase'>{product.size}</span></div>   
                                <div className='d-flex'>
                                    <div className='pr-2'>Color:</div>
                                    <div style={{
                                        backgroundColor : product.color,
                                        width : '25px',
                                        height: '25px',
                                        border: '1px solid #FFF'
                                        }}>     
                                    </div>
                                </div>
                            </div>
                            <div></div>    
                        </div>
                    </div>
                    <div className='col-12 d-lg-none'>
                        <hr />
                    </div>
                    <div className='col-6 col-lg-2'>
                        <div className='h-100 d-flex'>
                            <div className='d-flex flex-column justify-content-around h-100'>
                                <div className='text-capitalize'>{product.category}</div>
                                <div>Brand: {product.brand}</div>
                                <div><span className='orange-color'>{product.availableQuantity}</span> available</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-lg-4'>
                        <div className='h-100 pt-3 pb-3'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='col-12 d-lg-none'>
                        <hr />
                    </div>
                    <div className='col-12 col-lg-2'>
                        <div className='h-100 d-flex justify-content-center'>
                            <div className='d-flex flex-lg-column justify-content-around h-100 w-100 p-3'>
                                <div>
                                    <Link to={'./updateproduct/'+product.id}>
                                        <button className='btn btn-primary'>Modify</button>
                                    </Link>   
                                </div>
                                <div>
                                    <button className='btn btn-danger rounded-0' onClick={() => deleteProduct(product.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )        
}
export default MyProductView;    