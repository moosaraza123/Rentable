import React from 'react'
import Header from './../Header'
import './vehicle.css'
import Footer from '../Footer'
import model1 from "/model1.png"
import model2 from "/model2.png"
import model3 from "/model3.png"
import model4 from "/model4.png"
import model5 from "/model5.png"
import model6 from "/model6.png"

function Vehicle() {
  return <>
    <div className="DivTop">

<Header/>

<div class="hero-pages__text">
  <h3>About</h3>
  <p><a href="/">Home</a> / About</p>
  </div>




</div>

<div className="models">

<div className="firstRow">

<CreateBox img={model1} price="35" addition="Audi" trans="petrol" gear="auto" Model="Audi A1" / >

<CreateBox img={model2} price="40" addition="VW" trans="diesel"  gear="manual" Model="Golf 6"/>

<CreateBox img={model3} price="45" addition="Camry" trans="petrol"  gear="auto" Model="Toyota" />




</div>
<div className="firstRow">
<CreateBox img={model4} price="50" addition="Modernline" trans="petrol"  gear="manual" Model="BMW 320"/>
<CreateBox img={model4} price="55" addition="Benz"trans="diesel" gear="auto" Model="Mercedes"/>
<CreateBox img={model6} price="60" addition="CC" trans="petrol"  gear="auto" Model="VW passata"/>

</div>



<div className="AboutBanner">
<p>Book A Car By Getting In Touch <span>( 0308-19440777 )</span></p>


</div>

<Footer/>




</div> 



  
  </>
}

function CreateBox ({img,price,addition,trans,gear,Model}){

return<>
<div className="Modelbox">
  <div className="boxImg">
<img src={img} alt="" />
</div>
<div className="boxDes">
<div className="box_price">
<div className="NamenStar">
<h1>{Model}</h1>

<span><i className="fa-regular fa-star" style={{color:"295ead"}}></i><i className="fa-regular fa-star" style={{color:"295ead"}}></i><i className="fa-regular fa-star" style={{color:"295ead"}}></i><i className="fa-regular fa-star" style={{color:"295ead"}}></i><i className="fa-regular fa-star" style={{color:"295ead"}}></i></span>

<div className="seats"><i class="fa-solid fa-car-side"></i> {addition}</div>
<div className="trans"><i class="fa-solid fa-car-side"></i> {gear}</div>




</div>
<div className="price">
<h1>{price} <span>$</span>  </h1>
<h2>per day</h2>

<div className="seatno">
<h5>4/5 <i class="fa-solid fa-car-side"></i></h5>




</div>

<div className="diesel">

<h6>{trans}<i class="fa-solid fa-car-side"></i> </h6>

</div>


</div>





</div>



</div>
<div className="bookRide">
<button>Book Ride</button>




</div>


</div>



</>




}





export default Vehicle
