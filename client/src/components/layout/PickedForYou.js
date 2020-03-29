import React,{Component} from 'react';

import SectionTitle from './SectionTitle';

class Pickedforyou extends Component {

    render(){

        return( 

            <div className='picked-for-you mt-5 mb-5'>
                <div className='container'>
                    <SectionTitle title={"picked for you"}/>
                     <div className='row'>
                        <h2>Products In Here</h2>
                     </div>
                </div>
            </div>
        
        );

    }

}

export default Pickedforyou