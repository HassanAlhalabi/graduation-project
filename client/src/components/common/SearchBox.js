import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import {withRouter} from 'react-router-dom';

class SearchBox extends Component {

    constructor(){
        super();
        this.state = {
            searchTerm: ' ',
        }
    }

    handleSearchInput = e => {
        this.setState({searchTerm: e.target.value});
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.history.push('/products/search-products/'+this.state.searchTerm)
    }

    render(){
        return(
            <div className='search-box mt-md-4 d-flex'>
                <div className=' flex-grow-1'>
                    <form onSubmit={this.handleOnSubmit}> 
                        <div className='position-relative'> 
                            <input 
                                type='search'
                                placeholder='Search products ...' 
                                className='form-control rounded-0 w-100 p-3'
                                onKeyUp={this.handleSearchInput}
                            />
                            <button className='rounded-0 position-absolute'>
                                <Link to={'/products/search-products/'+this.state.searchTerm}>
                                    <i className='fas fa-search'></i>
                                </Link>    
                            </button>
                        </div> 
                    </form>
                </div>           
                <div className='voice-search'>
                    <button className='rounded-0 h-100'>
                        <i className='fas fa-microphone'></i>
                    </button>
                </div>
                <div className='img-search position-relative text-center'>
                    <div  className='position-absolute w-100 h-100'>
                        <input type='file' accept='image/*' className='w-100 h-100'/>
                    </div>
                    <div className='position-absolute w-100 h-100n'>
                        <i className='fas fa-image w-100 h-100'></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBox);