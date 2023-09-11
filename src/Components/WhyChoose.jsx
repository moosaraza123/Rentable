import React from 'react'
import './WhyChoose.css'
import Jeeps from'/jeeps.png'
import Right from'/right.png'

function WhyChoose() {
 return <>
 <div className="whyChooseMainDiv">
    <img src= {Jeeps }alt="" />


<div className="textContainer">


<div className="left">

<h4>Why Choose Us</h4>

<h2>Best valued deals you will ever find</h2>
<p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
<button><a href="#heroSection">Find Details<img src={Right} alt="" /> </a></button>

</div>


<div className="right">
    <div>
<i className="fa-solid fa-car-tunnel"></i>
<h4>Cross Country Drives <p><p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p></p>  </h4>

</div>
<div>
<i className="fa-solid fa-dollar-sign"></i>
<h4>All inclusive Pricing <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p></h4>
</div>
<div>
<i className="fa-solid fa-user-ninja"></i>
<h4>No hidden Charges <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p></h4>
</div>
</div>




</div>







 </div>
 
 
 </>
}

export default WhyChoose