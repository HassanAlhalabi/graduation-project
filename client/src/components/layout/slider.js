import React , {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import Banner1 from './img/banner01.jpg';
import Banner2 from './img/banner02.jpg';
import Banner3 from './img/banner03.jpg';

import {Carousel} from 'react-bootstrap';

class Slider extends Component {
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hot Deal</h3>
                        <p>Up to 50% off</p>
                        <div className='slide-btn'>
                            <Link to='/products'>
                                <button className='btn btn-primary btn-lg'>Shop Now</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Hot Deal</h3>
                        <p>Up to 50% off</p>
                        <div className='slide-btn'>
                            <Link to='/products'>
                                <button className='btn btn-primary btn-lg'>Shop Now</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Hot Deal</h3>
                        <p>Up to 50% off</p>
                        <div className='slide-btn'>
                            <Link to='/products'>
                                <button className='btn btn-primary btn-lg'>Shop Now</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
          </div> 
        );
    }
}

export default Slider;