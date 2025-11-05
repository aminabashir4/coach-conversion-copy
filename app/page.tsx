import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import StatsSection from './components/stats'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StatsSection/>
    </div>
  )
}

export default page
