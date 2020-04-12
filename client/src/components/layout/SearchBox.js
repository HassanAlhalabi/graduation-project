import React , { Component } from 'react';

class SearchBox extends Component {
    render(){
        return(
            <div className='search-box mt-md-4'>
                <form className='form-inline position-relative'>  
                    <input 
                        type='search'
                        placeholder='Search products ...' 
                        className='form-control rounded-0 w-100 p-3' 
                    />
                    <button type='submit' className='rounded-0 position-absolute'>
                        <i className='fas fa-search'></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;