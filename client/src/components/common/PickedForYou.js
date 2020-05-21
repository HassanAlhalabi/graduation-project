import React,{Component} from 'react';

import {connect} from 'react-redux';
import {getProducts} from '../../redux/reducers/productsReducer';

import SectionTitle from './SectionTitle';
import ProductCard from '../product/ProductCard';

class Pickedforyou extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products,
        }
    }
    
    getRandomProducts = (productsList,totalNmber) => {
        let keyList = [];
        let newProductsList = [];
        let i = totalNmber;
        while( i > 0 ){
            let randomValue = ( Math.floor(Math.random() * 10) % productsList.length );
            if(keyList.indexOf(randomValue) === -1){
                keyList.push(randomValue)
                newProductsList.push(productsList[randomValue])
                --i
            } else {
                continue;
            }  
        }
        return newProductsList;
    }

    render(){

        const products = this.props.products;
        console.log(products)

        return( 

            <div className='picked-for-you pt-5 pb-5'>
                <div className='container'>
                    <SectionTitle title={"picked for you"}/>
                     <div className='row'>
                        {products.length > 0
                            ? this.getRandomProducts(products,2).map(product => (
                                    <div className='col-12 col-md-4 col-lg-3' key={product._id}>
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

const mapStateToProps = state => ({
    products: state.products.products,
    loading: state.products.loading
});

export default connect(mapStateToProps,getProducts )(Pickedforyou)