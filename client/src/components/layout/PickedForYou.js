import React,{Component} from 'react';

import SectionTitle from './SectionTitle';
import ProductCard from '../product/ProductCard';

class Pickedforyou extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    render(){

        const products = this.state.products;

        return( 

            <div className='picked-for-you mt-5 mb-5'>
                <div className='container'>
                    <SectionTitle title={"picked for you"}/>
                     <div className='row'>
                        {products.length > 0
                            ? products.map(product => (
                                <div className='col-12 col-md-4 col-lg-3'>
                                    <ProductCard key={product._id} product={product} />
                                </div>
                                ))
                        : null}
                     </div>
                </div>
            </div>
        
        );

    }

}

export default Pickedforyou