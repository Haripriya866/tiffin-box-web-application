import './index.css'

const JoinCommunity=()=>{
  return (
    <section id="joinCommunity" className='join-community-container' >
        <p className='join-community-para'>Instagram</p>
        <h1 className='join-community-heading'>JOIN our community</h1>
        <div className='join-community-image-container'>
            <img src='/images/join-community/image-1.png' alt='image-1' className='community-image' />
            <img src='/images/join-community/image-2.png' alt='image-2' className='community-image' />
            <img src='/images/join-community/image-3.png' alt='image-3' className='community-image' />
            <img src='/images/join-community/image-4.png' alt='image-4' className='community-image' />
        </div>
    </section>
  );
}

export default JoinCommunity;
