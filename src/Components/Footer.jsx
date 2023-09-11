import React from 'react'
import './footer.css'

function Footer() {
    return <>

        <div class="Footcontainer">
            <div className="miniContainer1">
                <h2>  <span>Rentable</span>    </h2>
                <h3>We offers a big range of vehicles for all your driving needs.
                     We have the perfect car to meet your needs.</h3>
                

                   <a href="tel:3333"><i class="fa-solid fa-phone"></i>03081944099</a>
                  <a href="mailto:razamoosa538@gmail.com"><i className="fa-solid fa-envelope"></i>moosa.rizvi@yahoo.com</a>
                  <a href="">Designed by Moosa Rizvi</a>

              



                
            </div>
            <div className="miniContainer2">

          <h2>Company</h2>
           <a href="#heroSection">NewYork</a>
           <a href="#heroSection">Careers</a>
           <a href="#heroSection">Mobile</a>
           <a href="#heroSection">Blog</a>
           <a href="#heroSection">How we work</a>


            </div>
            <div className="miniContainer3">
            <h2>Working hours</h2>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>

            </div>
            <div className="miniContainer4">
                <h2>subscription</h2>
                <p>Subscribe your email address for latest news and updates</p>
                <input type="email" placeholder='Enter Email Here'/>
                <button>submit</button>
            </div>
            
            




           
        </div>
      
      
   


    </>
}

export default Footer