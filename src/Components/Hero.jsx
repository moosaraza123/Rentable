import React, { useState } from 'react'
import BMW from '/heroCar.png'
import Check from'/check.png'
import Right from'/right.png'
import HeroImg from '/hero.png'
import './Hero.css'
import Booknow from '../Booknow'
import Plan from './plan'
import RentalCloset from './Closet'
import SaveBigBanner from './SaveBigBanner'
import WhyChoose from './whyChoose'
import Testimonials from './Pages/Testimonials'
import FAQ from './FAQ'
import Download from './Download'
import Header from './Header'
import Footer from './Footer'
function Hero() {











  return <>

  <section id='heroSection'> 


  <div className="heroMainDiv">
    <Header/>
  
  <div className="mainContainer">




  <div className="heroDiscription">
      <h4>plan your trip now</h4>
      <h2>With our <span>Rental </span> service</h2>
      <p>Affordable adventures await explore the world with our budget-friendly car rentals. <br />
         Drive more,spend less <br />
         unlock unbeatable savings on economical car rental</p>
         <div className="heroBtns">
         <a href="#BookNow"><button id='bookNow'>bookNow <img src={Check} alt="" /></button></a>
         <button id='learnMore'>Learn More<img src={Right} alt="" /></button>
         </div>


    </div>


<div className="HeroImg">
<img src={HeroImg} alt="" id="bgImg"/>

    <img src={BMW} alt="" />
 
 
</div>

 

  </div>
  
  </div>
  
  
  
  </section>
  
<section id='BookNow'><Booknow  />
</section>

<section id='PlanSec'> 
<Plan/>




</section>


<section id='rentalCloset'> 
<RentalCloset/>




</section>
<section id='SaveBigBanner'> 
<SaveBigBanner/>




</section>

<section id='whyChoose'> 
<WhyChoose/>




</section>

<section id='Testimonials'> 
<Testimonials/>



</section>
<section id='FAQ'> 
<FAQ/>



</section>
 <section id='DownloadSection'> 
<Download/>



</section> 
<Footer/>

  </>


}

export default Hero