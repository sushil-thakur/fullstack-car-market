import React from 'react'
import { Button } from './components/ui/button'
import {  SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/infoSection'
import Footer from './components/Footer'

function home() {
  return (
    <div >
      {/*Header */}
      <Header/>
      {/* {hero} */}
      <Hero/>
      {/* {category} */}
      <Category/>
      {/* {MOst searched car} */}
      <MostSearchedCar/>
      {/* {infosection} */}
      <InfoSection/>
      {/* {Footer} */}
      <Footer/>
   
    </div>
  )
}

export default home