import React, { useState } from 'react'
import './Closet.css'
import AudiA1 from '/audiA1.jpg'
import Golf from '/Golf.jpg'
import Camry from'/toyotacamry.jpg'
import BmwCar from'/BMWCAR.jpg'
import Benz from '/benz.jpg'
import Passata from'/passsata.jpg'
import Records from './records.json'

function RentalCloset() {




    const[selectedCar,setCar]=useState("Audi A1 S-Line")
    const[year,setYear]=useState("2012")
    const[mark,setMark]=useState("A1")
    const[model,setModel]=useState("Audi")
    const[doors,setDoors]=useState("4/5")
    const[AC,setAC]=useState("yes")
    const[Transmission,setTransmission]=useState("Manual")
    const[fuel,setFuel]=useState("Gasoline")
      const[price,setPrice]=useState(45)


 const appendInfo=(e)=>{

  setCar(e.target.innerText)



  if(e.target.innerText=="VW Golf 6"){
    setYear(Records[1].Year)
    setMark(Records[1].Mark)
    setModel(Records[1].Model)
    setDoors(Records[1].Doors)
    setAC(Records[1].AC)
    setTransmission(Records[1].Transmission)
    setFuel(Records[1].Fuel)
    setPrice(Records[1].price)
  }
  else if(e.target.innerText=="Audi A1 S-Line"){
    setYear(Records[0].Year)
    setMark(Records[0].Mark)
    setModel(Records[0].Model)
    setDoors(Records[0].Doors)
    setAC(Records[0].AC)
    setTransmission(Records[0].Transmission)
    setFuel(Records[0].Fuel)
    setPrice(Records[0].price)
  }
  else if(e.target.innerText=="Toyota Camry"){
    setYear(Records[2].Year)
    setMark(Records[2].Mark)
    setModel(Records[2].Model)
    setDoors(Records[2].Doors)
    setAC(Records[2].AC)
    setTransmission(Records[2].Transmission)
    setFuel(Records[2].Fuel)

    setPrice(Records[2].price)

  }
  else if(e.target.innerText=="BMW 320 ModernLine"){
    setYear(Records[3].Year)
    setMark(Records[3].Mark)
    setModel(Records[3].Model)
    setDoors(Records[3].Doors)
    setAC(Records[3].AC)
    setTransmission(Records[3].Transmission)
    setFuel(Records[3].Fuel)

    setPrice(Records[3].price)

  }
  else if(e.target.innerText=="Mercedes-Benz GLK"){
    setYear(Records[4].Year)
    setMark(Records[4].Mark)
    setModel(Records[4].Model)
    setDoors(Records[4].Doors)
    setAC(Records[4].AC)
    setTransmission(Records[4].Transmission)
    setFuel(Records[4].Fuel)
    setPrice(Records[4].price)


  }
  else if(e.target.innerText=="VW Passat CC"){
    setYear(Records[5].Year)
    setMark(Records[5].Mark)
    setModel(Records[5].Model)
    setDoors(Records[5].Doors)
    setAC(Records[5].AC)
    setTransmission(Records[5].Transmission)
    setFuel(Records[5].Fuel)
    setPrice(Records[5].price)


  }


    }
return <>


<div className="closetMainDiv">






<div className="closetHeadDiv">

<h3>vehicle Models</h3>
<h2>Our Vehicle Closet</h2>
<p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

</div>
<div className="closetDisplay">


<div class="pick-box">
<CreateButton value="Audi A1 S-Line" Append={appendInfo}/>
<CreateButton value="VW Golf 6" Append={appendInfo}/>
<CreateButton value="Toyota Camry" Append={appendInfo}/>
<CreateButton value="BMW 320 ModernLine" Append={appendInfo}/>
<CreateButton value="Mercedes-Benz GLK"Append={appendInfo} />
<CreateButton value="VW Passat CC" Append={appendInfo}/>


    </div>




    <div className="pickedImg">

{selectedCar=="Audi A1 S-Line"?<img src={AudiA1} alt="" />:selectedCar=="VW Golf 6"?<img src={Golf} alt="" />:selectedCar=="Toyota Camry"?<img src={Camry } alt="" />:selectedCar=="BMW 320 ModernLine"?<img src={BmwCar} alt="" />:selectedCar=="Mercedes-Benz GLK"?<img src={Benz } alt="" />:selectedCar=="VW Passat CC"?<img src={ Passata  } alt="" />:<img src={ AudiA1 } alt="" />}





</div>


<div>
<CreateTable data={[year,model,Transmission,mark,doors,AC,fuel,price]}/>


</div>




</div>





</div>
</>
}

export default RentalCloset


function CreateButton({value,Append}){

return  <button className='closetBtns' onClick={Append}>{value}</button>





}
function CreateTable({data}){
console.log(data)


return <>




<div class="pick-description__price"><span> {data[7]}$ /   rent per day</span></div>
<div class="pick-description__table"><div class="pick-description__table__col"><span>Model</span><span>{data[3]}</span></div>
<div class="pick-description__table__col"><span>Mark</span><span>{data[1]}</span></div><div class="pick-description__table__col"><span>Year</span><span>{data[0]}</span></div><div class="pick-description__table__col"><span>Doors</span><span>{data[4]}</span></div><div class="pick-description__table__col"><span>AC</span><span>{data[5]}</span></div><div class="pick-description__table__col"><span>Transmission</span><span>{data[2]}</span></div><div class="pick-description__table__col"><span>Fuel</span><span>{data[6]}</span></div></div>

</>




}