  import React from 'react'
  import './Hero.css'


  const Shop = ()=> {
    return (
      <div className="card">
        <h2>FOOD DELIVERY</h2>
        <h3>FROM RESTAURANTS</h3>
        <h5>UPTO 60% OFF</h5>

      </div>
    )
  }


  const Hero = () => {
    return (
      <div className="hero"> 
          <img className='left' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="left image" />
          <p>Order food & groceries. Discover <br/>best restaurants. Swiggy it!</p>

          <div className="search">
            <div className="location-box">
              <img src="/location.png" alt="My Photo" />
               <input type="search" placeholder='Enter your delivery location' />
            </div>
           <div className="search2">
             <div className="search-box">
              <input type="search" placeholder='Search for restaurants, items or more'/>
              <img src="search.png" alt="" />
           </div>
           </div>
          </div>

          <img  className="right" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />   


          <div className="cards">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
          </div> 
      </div>
    )
  }

  export default Hero 