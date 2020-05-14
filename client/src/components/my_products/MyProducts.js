import React,{Component} from 'react';

import {connect} from 'react-redux';

import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';
import FilterBox from '../common/FilterBox';
import Spinner from '../common/Spinner';

class MyProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterParams: {
                price : 1000,
                colors: this.props.myProducts.map(product => product.color),
                brand : 'all',
                size  : 'all',
            },
        }
    }

    getFilterParameters = params => {
        this.setState({filterParams : params})
    }

    render(){

        const { loading , myProducts }  = this.props;
        console.log(this.state.filterParams.colors)

        let productContent = loading ? <Spinner /> : // Loading is true => show spinner
                                                     // Loading is false => show products container
                
                    myProducts.length > 0
                    ?
                    <div className="row"> 
                        {
                            myProducts.filter( product => 
                                
                                // Filter Parameters
                                product.price <= this.state.filterParams.price
                                
                                
                                ).map(product => 
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        {product.title}
                                    </div>    
                            )
                        }
                    </div>    
                    : 
                    <div>
                        <p className='alert alert-orange rounded-0'>No Products !!</p>
                    </div>
                

        return(

            <div className='products'>
                <CategoriesBar />
                <Breadcrumb page='My Products'/>
                <div className='container mt-5'>
                    <div className='row'>
                        {/* Filter Box */}
                        <div className='col-12 col-md-3'>
                            <FilterBox filterParams={ this.getFilterParameters} colors={this.state.filterParams.colors}/>
                        </div>
                        {/* Products Show */}
                        <div className='col-12 col-sm-6 col-md-9'>
                            {productContent}
                        </div>
                    </div>    
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return({
        myProducts : state.products.userProducts,
        loading: false
    })
}

export default connect(mapStateToProps,null)(MyProducts);