// import React from 'react';

import './index.css'

function Specialities() {
  return (
    <>
    <section id='specialities' className='specialities-container'>
        <p className='specialities-para'>why tiffin box</p>
        <h1 className='specialities-heading'>Our Specialties</h1>

        <div className='specialities-top-container'>
            <div className='specialities-left-content'>
                <div className='specialities-left-content-container'>
                    <h2 className='specialities-content-sub-heading'>Authentic South Indian Cuisine</h2>
                    <p className='specialities-content-para'>Our dishes are prepared using traditional recipes to bring you the true flavors of South India.</p>
                </div>
                <div className='specialities-left-content-2-container'>
                    <h2 className='specialities-content-sub-heading'>Expert Chefs</h2>
                    <p className='specialities-content-para'>Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.</p>
                </div>
                <div className='specialities-left-content-container'>
                    <h2 className='specialities-content-sub-heading'>Fresh, Quality Ingredients</h2>
                    <p className='specialities-content-para'>We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.</p>
                </div>

            </div>

            <div className='specialities-image-container'>
                <img src='https://res.cloudinary.com/dj6b0oaa1/image/upload/v1760550129/Frame_36_n4egwr.png' alt='our-specialities-image' className='our-specialities-image' />
            </div>

            <div className='specialities-right-content'>
                <div className='specialities-right-content-container'>
                    <h2 className='specialities-content-sub-heading'>Comfortable Dining Experience</h2>
                    <p className='specialities-content-para'>Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.</p>
                </div>
                <div className='specialities-right-content-2-container'>
                    <h2 className='specialities-content-sub-heading'>Health-Conscious Options</h2>
                    <p className='specialities-content-para'>From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.</p>
                </div>
                <div className='specialities-right-content-container'>
                    <h2 className='specialities-content-sub-heading'>Seamless Online Ordering & Delivery</h2>
                    <p className='specialities-content-para'>Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.</p>
                </div>

            </div>

        </div>

        <div className='specialities-middle-image-container'>
            <img className='specialities-middle-image' alt='spoon-image' src='/images/specialities/image-2.png' />
        </div>

        <p className='specialities-para'>chef</p>
        <h1 className='specialities-heading'>Our brand chef</h1>

        <div className='specialities-middle-container'>
            <div className='specialities-left-middle-image-container'>
                <h1 className='specialities-left-middle-text'>Chef Jomon.</h1>
            </div>

            <div className='specialities-right-content-container'>
                <h2 className='specialities-content-sub-heading'>Chef Jomon</h2>
                <p className='specialities-content-para'>senior chef at tiffin box</p>
                <p className='specialities-content-para'>Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring</p>
                <p className='specialities-content-para'>Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep.</p>
            </div>
        </div>

    </section>
    </>
  );
}

export default Specialities;
