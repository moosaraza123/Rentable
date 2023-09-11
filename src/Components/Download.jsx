import React from 'react'
import "./Download.css"
import Apple from "/apple.svg"
import Google from "/google.svg"
import Mobile from "/Mobile.jpg"
function Download() {
  return <>
  <div className="DownloadDiv">
    <div className="DownOptions">
  <h2>Download our app to get most out of it</h2>
  <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>

<div className="downloadBtns">
    <img src={Apple} alt="" />
    <img src={Google} alt="" />
    </div>

    </div>

    <div className="DownImg">

<img src={Mobile} alt="" />



    </div>

  </div>
  
  
  
  </>
}

export default Download