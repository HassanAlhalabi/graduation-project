import React from 'react';

const Breadcrumb = ({page}) => {
    let lastRoute = page.split('/')
    let homeRoutes = '';
    if(lastRoute.length > 1){
        homeRoutes = page.slice(0,page.lastIndexOf('/'))  + ' / ';
        lastRoute = lastRoute[lastRoute.length - 1];
    } else {
        lastRoute = page
    }   
    
    return(
        <div className='breadcrumb m-0'>
            <div className='container'>
                <div>
                    <p className='m-0'>Home  /  {homeRoutes} <span className='orange-color'>{lastRoute}</span></p>
                </div>
            </div>
        </div>
    );
}
export default Breadcrumb;