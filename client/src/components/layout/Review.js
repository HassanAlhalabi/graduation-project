import React from 'react';

const Review = ({userName,date,rating,text}) => {

    let ratingFull = [];
    let ratingEmpty = [];
    for (let index = 0; index < rating; index++) {
        ratingFull.push(<i className='fa fa-star'></i>)
    }
    for (let index = 0; index < (5 - rating); index++) {
        ratingEmpty.push(<i className='far fa-star empty'></i>)
    } 

    return(
        <div className='review mb-5'>
            <div className='review-details d-flex mb-2'>
                <div className='row'>
                    <div className='col-12 col-md-8 mb-2 d-flex'>
                        <div className='user-name mr-4 text-capitalize'>
                            <i className='fas fa-user'></i>
                            {userName}
                        </div>
                        <div className='review-date'>
                            <i className='fas fa-clock'></i>
                            {date}
                        </div>
                    </div>
                    <div className='col-12 col-md-4 mb-2 text-left text-md-right'>
                        <div className='review-rate d-inline-block'>
                            {ratingFull}{ratingEmpty}
                        </div>
                    </div>
                </div>    
            </div>
            <div className='review-text'>
                <p className='justify'>
                    {Text}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );    
} 

export default Review;    