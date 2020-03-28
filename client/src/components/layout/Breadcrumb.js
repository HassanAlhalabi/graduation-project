import React from 'react';

const Breadcrumb = ({page}) =>
    <div className='breadcrumb m-0'>
        <div className='container'>
            <div>
                <p className='m-0'>Home  /    {page}</p>
            </div>
        </div>
    </div>

export default Breadcrumb;