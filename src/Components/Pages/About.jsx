import React from 'react'
import Header from './../Header'
import './About.css'
import People from '/AboutPeople.jpg'
import Plan from './../Plan'
import Footer from './../Footer'
function About() {
  return<>
  <div className="DivTop">

  <Header/>

  <div class="hero-pages__text">
    <h3>About</h3>
    <p><a href="/">Home</a> / About</p>
    </div>




  </div>
  <div className="About">
<div className="Aboutdiv">

<img src={People} />
<div>
<h3>About Our Company</h3>
<h2>By starting engine your Journey Begins</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus, aperiam laudantium esse adipisci accusamus cumque ex, quaerat repellendus, eveniet quia obcaecati quisquam velit quidem sint! Nam iste totam quidem?</p>

<div className="AboutIcons">

  <div className="truck">
  <i className="fa-solid fa-truck" style={{color:"2954ea"}}> </i>
 <h4>20<span> Car Types</span>  </h4> 


  </div>

  <div className="building">
  <i className="fa-solid fa-building" style={{color:"2954ea"}}></i>

  <h4>85<span> Outlets</span>  </h4> 
  </div>

  <div className="box">
  <i className="fa-solid fa-toolbox" style={{color:"2954ea"}}></i>
  <h4>75<span> Repair shops</span>  </h4> 

  </div>




</div>


</div>

</div>
</div>
<div className="planNow">

<Plan/>
</div>

<div className="AboutBanner">
<p>Book A Car By Getting In Touch <span>( 0308-19440777 )</span></p>


</div>

<div className="footerAbout">
<Footer/>


</div>

  
  </>

}

export default About