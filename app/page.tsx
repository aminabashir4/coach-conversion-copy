import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import StatsSection from './components/stats'
import ProblemSolutionSection from './components/problem-solution'
import Services from './components/services'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StatsSection/>
      <ProblemSolutionSection/>
      <Services/>
    </div>
  )
}

export default page
