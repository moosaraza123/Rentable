import React from 'react'
import './Team.css'
import Header from './../Header'
import person1 from '/person1.png'
import person2 from '/person2.png'
import person3 from '/person3.png'
import Footer from './../Footer'
function Team() {
  return<>
 <div className="DivTop">

<Header/>

<div class="hero-pages__text">
  <h3>Our Team</h3>
  <p><a href="/">Home</a> / About</p>
  </div>




</div>

<div className="members">



<AddMember img={[person1,"Luke Miller","Sales men"]} />
<AddMember img={[person2,"Michael Diaz","Business Owner"]} />
<AddMember img={[person3,"Briana Ross","Photographer"]} />



</div>
<div className="AboutBanner">
<p>Book A Car By Getting In Touch <span>( 0308-19440777 )</span></p>


</div>
  <Footer/>
  
  </> 
}



function AddMember({img}){

return <>

<div className="member">
<div className="memberImg">

<img src={img[0]} alt="" />



</div>
<div className="PerDes">
<h2>{img[1]}</h2>
<h5>{img[2]}</h5>



</div>


</div>




</>



}

export default Team