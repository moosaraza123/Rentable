
import './bookCarForm.css'
import React, { useState } from 'react'
import AudiA1 from '/audiA1.jpg'
import Golf from '/Golf.jpg'
import Camry from'/toyotacamry.jpg'
import BmwCar from'/BMWCAR.jpg'
import Benz from '/benz.jpg'
import Passata from'/passsata.jpg'
function bookCarForm({arr1}) {

  const[close,setClose]=useState("false")
function closeForm(e){

setClose("true")

}


  return (

        <div className={close=='true'?'block':'Reservation'}>
            <div className="headReservation">
               <h4>

                Complete Reservation
              

               </h4>
               <i className="fa-solid fa-x" onClick={closeForm}></i>


 


            </div>
            <div className="headResNotification">
            <i className="fa-solid fa-circle-info"> Upon completing this reservation enquiry, you will receive:
            </i>
            
            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>



            </div>
            <div className="detailCar">
                <div className="LocationNDate">
                  <h5>Location & Date</h5>
                <span><i className="fa-solid fa-location-dot"></i><div>
                  <h6>Pick-Up Date &amp; Time</h6>
                  <p>{arr1[3]}/ <input type="time" name="" id="" /></p></div></span>
               
                <span><i className="fa-solid fa-location-dot"></i><div>
                  <h6>Drop-Off Date & Time Date &amp; Time</h6>
                  <p>{arr1[4]} / <input type="time" name="" id="" /></p></div></span>

                  <span><i className="fa-solid fa-calendar-days"></i><div><h6>Pick-Up Location</h6><p>{arr1[1]}</p></div></span>
                  <span><i className="fa-solid fa-calendar-days"></i><div><h6>Drop-Off-Date</h6><p>{arr1[2]}</p></div></span>




                </div>
                <div className="carDisplay">
                {arr1[0]=='Audi A1 S-Line' ? <img src={AudiA1} alt="" srcset="" />   :arr1[0]=='VW Golf 6' ? <img src={Golf}
                 />     : arr1[0]=='Toyota Camry' ? <img src={Camry}  />      : arr1[0]=='BMW 320 ModernLine' ? <img src={BmwCar} />     : arr1[0]=='Mercedes-Benz GLK' ? <img src={Benz}  /> : arr1[0]=='VW Passat CC' ? <img src={Passata}  />  : <h1>No Car</h1>  }




                </div>

        </div>

        <div className="personalInfo">
          <h4 >Personal Information</h4>
      <form action="" className='infoForm'>
      <div class="info-form__2col">
        <div id='firstTwo'>
        <span><label>First Name <b>*</b></label><input type="text" placeholder="Enter your first name" value="" /><p class="error-modal">This field is required.</p></span>
        <span><label>Last Name <b>*</b></label><input type="text"  placeholder="Enter your last name" value=""/><p class="error-modal ">This field is required.</p></span>
        </div>
        <div>
        <span><label>Phone Number <b>*</b></label><input type="tel" placeholder="Enter your phone number" value="" /><p class="error-modal">This field is required.</p></span>
        <span><label>Age <b>*</b></label><input type="number" placeholder="18" value="" /><p class="error-modal ">This field is required.</p></span>
        </div>
        </div>
      

        <div class="info-form__1col">
          <span><label>Email <b>*</b></label><input type="email" placeholder="Enter your email address" value="" /><p class="error-modal">This field is required.</p></span>
          <span><label>Address <b>*</b></label><input type="text"  placeholder="Enter your street address" value="" /><p class="error-modal ">This field is required.</p></span>
          </div>
          <div class="info-form__2col">
            <span><label>City <b>*</b></label><input type="text"placeholder="Enter your city" value="" /><p class="error-modal">This field is required.</p></span>
            <span><label>Zip Code <b>*</b></label><input type="text"  placeholder="Enter your zip code" value="" /><p class="error-modal ">This field is required.</p></span>
            </div>


      </form>

      <span class="info-form__checkbox"><input type="checkbox"  /><p>Please send me latest news and updates</p></span>
      <div className='reserveDiv'>
        <button type='submit' onClick={closeForm}>Reserve Now </button>

      </div>



        </div>

       

    </div>
  )
}

export default bookCarForm