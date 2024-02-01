import React from 'react'
import Navbar from "../components/Navbar"
import Slider from "../components/homepage/Slider"
import HomePageMain from "../components/homepage/HomePageMain"
import Testinomial  from '../components/homepage/Testinomial'
import  Footer from "../components/Footer"
import Section from "../components/homepage/Section"



const Home = () => {
  return (
    <>
   
    <Navbar></Navbar>
    <HomePageMain></HomePageMain>
    <Section></Section>
   <Slider/>
<Testinomial></Testinomial>

 
  <Footer/>
    </>
  )
}

export default Home