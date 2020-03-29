import React from 'react';

const Breadcrumb = ({page}) =>
    <div className='breadcrumb m-0'>
        <div className='container'>
            <div>
                <p className='m-0'>Home  /    <span className='orange-color'>{page}</span></p>
            </div>
        </div>
    </div>

export default Breadcrumb;