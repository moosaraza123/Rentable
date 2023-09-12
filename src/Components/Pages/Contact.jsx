import React from 'react'
import './Contact.css'
import Header from './../Header'
import Footer from'./../Footer'
function Contact() {
  return <>
  
  <div className="DivTop">

<Header/>

<div class="hero-pages__text">
  <h3>Contact</h3>
  <p><a href="/">Home</a> / Contact</p>
  </div>





</div>

<div className="FormNDInfo">

<div className="Information">
<h2>Need additional information?</h2>

<p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>


<a href="tel:3333"><i class="fa-solid fa-phone"></i>03081944099</a>
<a href="mailto:razamoosa538@gmail.com"><i className="fa-solid fa-envelope"></i>moosa.rizvi@yahoo.com</a>


              




</div>
<div className="InformationForm">

<form action="">
<div className="fname">
<label htmlFor="FullName">Full Name<span>*</span></label>
<input type="text" name="" id="FullName" />

</div>
<div className="Email">
<label htmlFor="Mail" >Email<span>*</span></label>
<input type="email"name="" id="Mail" placeholder='youremail@example.com'/>

</div>
<div className="tell">
<label htmlFor="Tellme">Tell us about it<span>*</span></label>
<textarea name="" id="Tellme" cols="40" rows="10" placeholder='Write Here . .'></textarea>

</div>

</form>






</div>




</div>
<div className="AboutBanner">
<p>Book A Car By Getting In Touch <span>( 0308-19440777 )</span></p>


</div>
<Footer/>
  </>
}

export default Contact