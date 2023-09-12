import React from 'react'
import './Testimonials.css'
import Ben from '/ben.png'
import Bat from '/Batman.png'
import Header from '../Header'
import Footer from './../Footer'

function Testimonials() {
  return <>

 <div className="DivTop">

<Header/>

<div class="hero-pages__text">
  <h3>About</h3>
  <p><a href="/">Home</a> / About</p>
  </div>




</div>







  <div className="TestimonialSection">
  <h4>Reviewed by People</h4>
  <h2>Client's Testimonials</h2>
  
  <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>



<div className="allTests">
<div className="testBox1">
<p>"I Booked a Car and process was quite easy"</p>
<i class="fa-solid fa-quote-right"></i>
<div className="TestImgDiv">

<img src={Bat} alt="" />
<h5>Batman<p>Gotham</p></h5>

  
</div>
</div>

<div className="testBox2">

<p>"I Booked a Van and process was quite easy"  </p>
<i class="fa-solid fa-quote-right"></i>

<div className="TestImgDiv">
<img src={Ben} alt="" />

<h5>Ben <p>Bellwood</p> </h5>


</div>

</div>




</div>



  </div>
  <div className="AboutBanner">
<p>Book A Car By Getting In Touch <span>( 0308-19440777 )</span></p>


</div>
<Footer/>
  
  

  </>
   
  
}

export default Testimonials