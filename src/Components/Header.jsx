import React, { useState } from 'react'
import'./Header.css'
import NavCar from '/navCar.png'
import Wifi from '/wifi.png'

function Header() {

  const[classname,setClassName]=useState("mobileMenu")
function addClass(){

setClassName('mobileClickClass')

}
  return <>



  <div className="headContainer">


  <div className="navLogos" >
  <a href="#heroSection" ><img src={Wifi} alt="" id="wifiImg"/></a>
  <a href="#heroSection" ><img src={NavCar} alt="" id="navCar"/></a>

<h1>Rentable</h1>



  </div>

 
  <div className='nav'>

<Navbar value="Home" eleVal="" / >
<Navbar value="About" eleVal="About"/>
<Navbar value="vehicle Models" eleVal="Vehicle"/>
<Navbar value="Testimonials" eleVal="Testimonials"/>
<Navbar value="Out team"eleVal="Team"/>
<Navbar value="Contact" eleVal="Contact"/>

  </div>

<div className="headBtns">

<button id="signIn" >Sign in</button>
<button id='Register' > Register</button>




</div>

<div className="mobileMenuBtn">
<i className="fa-solid fa-bars" onClick={addClass}></i>
<div className={classname}>

<Navbar value="Home" eleVal="" / >
<Navbar value="About" eleVal="About"/>
<Navbar value="vehicle Models" eleVal="Vehicle"/>
<Navbar value="Testimonials" eleVal="Testimonials"/>
<Navbar value="Out team"eleVal="Team"/>
<Navbar value="Contact" eleVal="Contact"/>



</div>
</div>


  </div>
  </>
  
}





function Navbar({value,eleVal}){


  return <>
 <a href={"/"+eleVal} className='navlinks'>{value}</a>
  </>
}

export default Header;