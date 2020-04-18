import React , {Component} from 'react';

import SectionTitle from '../common/SectionTitle';
import Review from './Review';
import StarRatingComponent from 'react-star-rating-component';

class ProductReview extends Component {

    constructor() {
        super();
     
        this.state = {
          rating: 3
        };

    }
     
    onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    }

    getNextReview = () => console.log('next review')

    getPrevReview = () => console.log('previous review')


    render(){
        return(
            <div className='product-review'>
                <div className='contaienr'>
                    <SectionTitle title={'Product Reviews'}/>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <Review userName={'john'} date={'12/12/12 12:12:12'} rating={2}/>
                            <Review userName={'dan'} date={'12/1/20 12:12:12'} rating={4}/>
                            <div className='prev-next-review text-center d-flex justify-content-between'>
                                <button className='prev-review-btn btn btn-primary disabled' onClick={() => this.getPrevReview()}>
                                    <i className='fas fa-arrow-left'></i>
                                </button>
                                <button className='next-review-btn btn btn-primary' onClick={() => this.getNextReview()}>
                                    <i className='fas fa-arrow-right'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='add-review-form'>
                                <h6 className='font-weight-bolder text-uppercase'>write your review</h6>
                                <p className=''>Your email address will not be published.</p>
                                <form className='form'>
                                    <div className='form-group'>
                                        <input 
                                            type='text' 
                                            className='form-control rounded-0 p-3 pt-4 pb-4 mb-3'
                                            placeholder='Your Name'/>
                                        <input 
                                            type='email' 
                                            className='form-control rounded-0 p-3 pt-4 pb-4 mb-3'
                                            placeholder='Email address'/>
                                        <textarea 
                                            className='form-control rounded-0 p-3 pt-4 pb-4 mb-3' placeholder='Your Review'/>
                                        <div className='form-group d-flex mb-1'>
                                            <label className='d-inline-block font-weight-bolder mr-2 mb-0'>Your Rating : </label>
                                            <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={this.state.rating}
                                                onStarClick={this.onStarClick.bind(this)} />
                                        </div>
                                        <button type='submit' className='btn btn-primary font-weight-bold'>SUBMIT</button>    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductReview;