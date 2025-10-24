import './index.css'

const Cuisine=()=>{
  return (
   <>
    <section className='cuisine-container' id='cuisine'>
        <div className='cuisine-top-container'>
            <div className='cuisine-top-left-container'>
                <img src='/images/cuisine/image-1.png' alt='tiffin-box' className='cuisine-tiffin-box' />
                <h1 className='cuisine-top-left-heading'>Authentic South Indian Cuisine</h1>
                <button type='button' className='order-now-button'>Order Now</button>
            </div>
            <div className='cuisine-top-right-container'>
                <img  className='cuisine-top-right-image' src='/images/cuisine/image-2.png' alt='cuisine-top-right-image' />
                <div className='cuisine-top-right-icons-container'>
                    <img className='instagram-icon'  src='/images/cuisine/image-3.png' alt='instagram-icon' />
                    <img className='facebook-icon' src='/images/cuisine/image-4.png' alt='facebook-icon' />
                    <img className='twitter-icon' src='/images/cuisine/image-5.png' alt='twitter-icon' />
                </div>
            </div>
        </div>
        <div className='cuisine-bottom-container'>
            <img className='cuisine-bottom-image' src='/images/cuisine/image-6.png' alt='cuisine-bottom-image' />
            <div className='cuisine-bottom-right-content-container'>
                <h1 className='cuisine-bottom-right-content-heading'>ABOUT US</h1>
                <p className='cuisine-bottom-right-content-para'>Experience Authentic South Indian Flavors at The Tiffin Box</p>
                <button className='know-more-button' type='button'>Know More</button>
            </div>
        </div>      
    </section>
   </>
  );
}

export default Cuisine;
