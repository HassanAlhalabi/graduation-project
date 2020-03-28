import React from "react";

import Breadcrumb from '../layout/Breadcrumb';
import CategoriesBar from '../layout/CategoriesBar';

import AboutImg1 from '../layout/img/about-img-1.jpg';
import AboutImg2 from '../layout/img/about-img-2.jpg';

const About  = () =>

    <div className="about">

    <Breadcrumb page={'About'}/>
    <CategoriesBar />

      <div className="about-info container">
        <h2 className="text-center mt-5 mb-5 about-header">About Our Store</h2>
        <div className="text-weight-bold">
          <div className='row  mb-5'>
            <div className='col-12 col-md-6'>
              <h4 className='pt-4 pb-4'>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                justo in mauris lobortis bibendum nec nec tellus. Morbi est ipsum,
                pretium nec est vel, maximus congue metus. Proin eu euismod turpis,
                eget ornare nunc. Suspendisse id aliquet justo, eget ornare ligula.
                Nunc eu pretium nisi, vel maximus leo. Ut tempus risus quis
                ultricies dictum. Donec at mauris justo. Vestibulum ut lorem vitae
                tellus facilisis volutpat vitae quis purus. Suspendisse lobortis
                fermentum placerat.
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <div className=''>
                <img src={AboutImg1} alt="about-img" className='img-fluid'/>
              </div>
            </div>
            
          </div>
          <div className='row  mb-5'>
          <div className='col-12 col-md-6'>
              <div className=''>
                <img src={AboutImg2} alt="about-img" className='img-fluid'/>
              </div>
            </div>
            <div className='col-12 col-md-6 mb-5'>
              <h4 className='pt-4 pb-4'>Lorem ipsum dolor</h4>
              <p>
                Nam efficitur dui et urna ullamcorper rhoncus. Proin porta aliquet
                ipsum, ac volutpat diam auctor eu. Ut tristique odio ligula, ut
                aliquam ex consequat rutrum. In vel magna a velit rhoncus ornare.
                Phasellus arcu felis, consectetur non nunc nec, finibus rutrum
                libero. Nulla consequat lorem et felis semper, ut tempus orci
                lacinia. Sed molestie mi sodales lacinia scelerisque. Pellentesque
                tellus augue, molestie non sagittis sed, eleifend ac eros. Vivamus
                tortor quam, viverra sit amet libero a, dignissim auctor odio. In
                erat nulla, molestie a urna eu, porttitor euismod felis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien,
                fermentum sit amet eleifend eget, consequat a lacus. Sed nulla odio,
                laoreet ut dictum sit amet, ornare quis augue. Nam blandit et metus
                ut vestibulum. Maecenas bibendum diam laoreet urna sollicitudin, in
                pellentesque diam condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


export default About;
