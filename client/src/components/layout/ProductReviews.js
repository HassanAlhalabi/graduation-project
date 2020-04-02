import React , {Component} from 'react';

import SectionTitle from '../layout/SectionTitle';
import Review from '../layout/Review';

class ProductReview extends Component {

    render(){
        return(
            <div className='product-review'>
                <div className='contaienr'>
                    <SectionTitle title={'Product Reviews'}/>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='review'>
                                <Review />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductReview;