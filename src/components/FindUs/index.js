import './index.css'

const FindUs=()=>{
  return (
    <section id="findUs" className='find-us-container'>
        <div className='find-us'>
            <div className='find-us-content-container'>
                <h2 className='find-us-content-sub-heading'>our locations</h2>
                <h1 className='find-us-content-heading'>Find Us at These Convenient Locations</h1>
                <button type='button' className='our-store-button'>Our Store</button>
            </div>
            <img src='/images/find-us/image-1.png' alt='location' className='location' />
        </div>
    </section>
  );
}

export default FindUs;
