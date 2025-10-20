import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/Homelayout/LeftAside';
import RightAside from '../components/Homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
  <header>
    <Header></Header>
    <section className='mx-auto w-11/12 my-3'>
        
        <LatestNews></LatestNews>
        
        </section>

<section>
    <Navbar></Navbar>
</section>

    </header>  
            
<main className='w-11/12 mx-auto my-3  grid grid-cols-12'>
<aside className='col-span-3 sticky top-0 h-fit'>
    <LeftAside></LeftAside>
</aside>


<section className='col-span-6'>
    <Outlet></Outlet>
</section>
<aside className='col-span-3 sticky top-0 h-fit'>
    <RightAside></RightAside>
</aside>


</main>

        </div>
    );
};

export default HomeLayout;