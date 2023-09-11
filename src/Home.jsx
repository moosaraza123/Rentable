import { useState } from 'react'
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"
import Team from "./Components/Pages/Team"
import Testimonials from "./Components/Pages/Testimonials"
import Vehicle from "./Components/Pages/Vehicle"
import './Home.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import {BrowserRouter,Routes,Route}from "react-router-dom"

function Home() {
 

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route element={<Hero/>} path='/'/>
      <Route element={<About/>} path='/About'/>
      <Route element={<Contact/>} path='/Contact'/>
      <Route element={<Team/>} path='/Team'/>
      <Route element={<Testimonials/>} path='/Testimonials'/>
      <Route element={<Vehicle/>} path='/Vehicle'/>



    </Routes>
  
    
    
    </BrowserRouter>
    </>
  )
}

export default Home
