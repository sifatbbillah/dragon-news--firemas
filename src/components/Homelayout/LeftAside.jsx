import React, { Suspense } from 'react';
import Categories from '../categories/Categories';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback ={<span className=" loading loading-dots loading-xl"></span> }>
            
            <Categories></Categories>  

            </Suspense>
        </div>
    );
};

export default LeftAside;