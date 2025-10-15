import React from 'react';

import './index.css'

function DiscoverPopularDishes() {
  return (
    <>
    <section className='discover-popular-dishes-container' id='discoverPopularDishes'>
        <p className='discover-para'>Featured Menu</p>
        <h2 className='discover-heading'>Discover our most popular dishes</h2>

        <div className='discover-top-image-container'>
            <img className='chicken-image' alt='chicken-1' src='/images/discover-popular-dishes/image-1.png' />
            <div className='chicken-container'>
                <img className='chicken-image' alt='chicken-2' src='/images/discover-popular-dishes/image-2.png' />
            </div>
            <img className='chicken-image' alt='chicken-3' src='/images/discover-popular-dishes/image-3.png' />
        </div>

        <div className='explore-full-menu-button-container'>
            <button type='button' className='explore-full-menu-button'>Explore Full Menu</button>
        </div>

        <div className='discover-middle-container'>
            <div className='discover-middle-left-content-container'>
                <h2 className='discover-content-sub-heading'>ONLINE ORDER</h2>
                <h1 className='discover-content-heading'>Fresh South Indian Flavors Delivered!</h1>
                <p className='discover-content-para'>Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time</p>
                <button type='button' className='order-online-button'>Order Online</button>
            </div>
            <div className='discover-middle-right-image-container'>
                <img className='discover-middle-image-1' alt='image-5' src='/images/discover-popular-dishes/image-5.png' />
                <img className='discover-middle-image-2' alt='image-6' src='/images/discover-popular-dishes/image-6.png' />
            </div>
        </div>


        <div className='discover-bottom-container'>
            <img  className='discover-bottom-left-image' src='/images/discover-popular-dishes/image-7.png' alt='image-7' />
            <div className='discover-bottom-right-content-container'>
                <h2 className='discover-content-sub-heading'>BOOK TABLE</h2>
                <h1 className='discover-content-heading'>Planning a meal at The Tiffin Box?</h1>
                <p className='discover-content-para'>Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious</p>
                <button type='button' className='order-online-button'>Book Table</button>
            </div>
        </div>
    
    </section>
    </>
  );
}

export default DiscoverPopularDishes;
