import React,{Component} from 'react';

import {connect} from 'react-redux';

import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';
import MyProductView from './MyProductView';
import Spinner from '../common/Spinner';

import {deleteProductDispatch} from '../../redux/reducers/productsReducer';

class MyProducts extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchInput : '',
        }
    }


    handleSearchInput = () => {
        let searchInput = document.getElementById('search').value;
        this.setState({searchInput : searchInput})
    }

    sortAZ = () => {
        this.setState({
            myProducts: this.state.myProducts.sort( (a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                return 0;
            }),
        })
    }
    
    sortZA = () => {
        this.setState({
            myProducts: this.state.myProducts.sort( (a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                return 0;
            }),
        })
    }

    handleDelete = id => {
        this.props.deleteProduct(id)
    }

    render(){

        const { loading , myProducts }  = this.props;

        let productContent = loading ? <Spinner /> : // Loading is true => show spinner
                                                     // Loading is false => show products container
                
                    myProducts.length > 0
                    ?

                    <div>
                        <div className='mb-3 mb-sm-0'>
                            <div className='row'>
                                <div className='col-12 col-sm-6'>
                                    <div className='search-my-products form-group'>
                                        <div className='position-relative'> 
                                            <input 
                                                type='search'
                                                placeholder='Search my products ...' 
                                                className='form-control rounded-0 w-100 p-3'
                                                onKeyUp={this.handleSearchInput}
                                                id='search'
                                            />
                                        </div>                                        
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <div className='sort text-left text-sm-right'>
                                        <button className='btn btn-primary' id='az' onClick={this.sortAZ}>A - Z</button>
                                        <button className='btn btn-primary ml-3' id='za' onClick={this.sortZA}>Z - A</button>
                                    </div>
                                </div>
                            </div> 
                        </div>    
                        {   
                            myProducts.filter(product => {
                                return(product.name.toLowerCase().includes(this.state.searchInput));
                            }).map(product => 
                                    <div key={product.id}>
                                        <MyProductView product={product} handleDelete={this.handleDelete}/>
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
                <div className='container mt-5 mb-5'>
                    {productContent}      
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

export default connect(mapStateToProps,deleteProductDispatch)(MyProducts);