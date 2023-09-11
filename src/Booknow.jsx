import React, { useState } from 'react'
import "./Booknow.css"
import CarType from "/car-solid.png"
import Location from "/locate.png"
import Calender from "/calender.png"
import BookCarForm from './Components/bookCarForm'
// import Plan from './Components/plan'


function Booknow() {
    const[val,setVal]=useState([])
    const[error,setError]=useState('')
  
function handleEvent(e){
val.push(e.target.value)


}

function validateForm(){


    if(val.length<5 ){
        setError('* Fill all fields to continue *')

       
    }
    else if(val.length>5){
        setError('* Fill all fields again Accurately *')

    }
    else if(val.length==5){
        setError(" ")
        
    }

    }


    
    


    




  return <>

<div className="BookmainContainer">
<div className="BookContent">
<h2>Book <span> Car</span> here</h2>
<div className="bookForm">



    <form >

 

<div className="firstThree">

    <div className="carType" >
    <label htmlFor="CarType"><img src={CarType} alt="" /></label>
<select id='CarType' onChange={handleEvent}>
    <option >Select your car type</option>
    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
    <option value="VW Golf 6">VW Golf 6</option>
    <option value="Toyota Camry">Toyota Camry</option>
    <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
    <option value="VW Passat CC">VW Passat CC</option></select>
    </div>

    <div className="PickUp">
<label htmlFor="PickUp"><img src={Location} alt="" /></label>
<select onChange={handleEvent} >
    <option>Select pick up location</option>
    <option value="Belgrade">Belgrade</option>
    <option value="Novi Sad">Novi Sad</option>
    <option value="Nis">Nis</option>
    <option value="Kragujevac">Kragujevac</option>
    <option value="Subotica">Subotica</option></select>
    </div>

    <div className="PickUp">
<label htmlFor="PickUp"><img src={Location} alt="" /></label>
<select onChange={handleEvent}>
<option>Select Drop off location</option>
<option value="Belgrade">Belgrade</option>
    <option value="Novi Sad">Novi Sad</option>
    <option value="Nis">Nis</option>
    <option value="Kragujevac">Kragujevac</option>
    <option value="Subotica">Subotica</option></select>
    </div>


</div>
<div className="lastTwo"><div className="PickUp">
<label htmlFor="pickTime"><img src={Calender} alt="" /></label>
<input type="date" name="" id="pickTime" onChange={handleEvent}/>
</div>
<div className="PickUp">
<label htmlFor="dropTime"><img src={Calender} alt="" /></label>
<input type="date" name="" id="dropTime" onChange={handleEvent}/>
</div>
</div>
</form>



</div>


<div className='BookSearch'>
<button type='submit' id='Book_sub' onClick={validateForm}>Search</button>
<div className="errorMsg">
</div>
<p style={{color:"red"}}>{error}</p>

</div>



</div>



{val.length==5 && <BookCarForm arr1={val}/>}
  
  
  </div>


  <div>




</div>





  
  </>
}







export default Booknow