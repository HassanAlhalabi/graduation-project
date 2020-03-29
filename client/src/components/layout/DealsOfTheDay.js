import React,{Component} from 'react';

import SectionTitle from './SectionTitle';

class DealsOfTheDay extends Component {

    render(){

        return( 

            <div className='latest-products mt-5 mb-5'>
                <div className='container'>
                    <SectionTitle title={"deals of the day"}/>
                     <div className='row'>
                        <h2>
                            Products In Here ....
                        </h2>
                     </div>
                </div>
            </div>
        
        );

    }

}

export default DealsOfTheDay