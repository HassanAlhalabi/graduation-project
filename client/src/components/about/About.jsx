import React from "react";

import Breadcrumb from '../common/Breadcrumb';
import CategoriesBar from '../common/CategoriesBar';

import AboutImg1 from '../common/img/about-img-1.jpg';
import AboutImg2 from '../common/img/about-img-2.jpg';

const About  = () =>

    <div className="about">

    <CategoriesBar />
    <Breadcrumb page={'About'}/>

      <div className="about-info container">
        <h2 className="text-center mt-5 mb-5 about-header">About Our Store</h2>
        <div className="text-weight-bold">
          <div className='row  mb-5'>
            <div className='col-12 col-md-6'>
              <h4 className='pt-4 pb-4'>Lorem ipsum dolor</h4>
              <p className='pr-5 mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                justo in mauris lobortis bibendum nec nec tellus. Morbi est ipsum,
                eu euismod turpis,
                eget ornare nunc. Suspendisse id aliquet justo, eget ornare ligula.
                Nunc eu pretium nisi. 
              </p>
              <p>
                vel maximus leo. Ut tempus risus quis
                ultricies dictum. Donec at mauris justo. Vestibulum ut lorem vitae
                tellus facilisis volutpat vitae quis purus. Suspendisse lobortis
                fermentum placerat.
              </p> 
            </div>
            <div className='col-12 col-md-6'>
              <div className='img-holder'>
                <img src={AboutImg1} alt="about-img" className='img-fluid'/>
              </div>
            </div>
            
          </div>
          <div className='row  mb-5'>
          <div className='col-12 col-md-6'>
              <div className='img-holder'>
                <img src={AboutImg2} alt="about-img" className='img-fluid'/>
              </div>
            </div>
            <div className='col-12 col-md-6 mb-5'>
              <h4 className='pt-4 pb-4 pl-md-5'>Lorem ipsum dolor</h4>
              <p className='pl-md-5 mb-4'>
                Nam efficitur dui et urna ullamcorper rhoncus. Proin porta aliquet
                ipsum, ac volutpat diam auctor eu. Ut tristique odio ligula, ut
                In vel magna a velit rhoncus ornare.
                Phasellus arcu felis, consectetur non nunc nec, finibus rutrum
                libero. Nulla consequat lorem et felis semper, ut tempus orci
                lacinia.
              </p>  
              <p className='pl-md-5'>
                Nam blandit et metus
                ut vestibulum. Maecenas bibendum diam laoreet urna sollicitudin, in
                pellentesque diam condimentum. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


export default About;
