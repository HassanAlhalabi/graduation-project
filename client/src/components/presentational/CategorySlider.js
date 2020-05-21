import React from 'react';

import CategoriesList from './CategoriesList';
import Slider from './Slider';

const CategorySlider = () => 
    <div className='category-slider mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='d-none d-md-block col-md-3'>
                    <CategoriesList />
                </div>
                <div className='col-12 col-md-9 pl-0 pr-0'>
                    <Slider />
                </div>
            </div>
        </div>
    </div>

export default CategorySlider    