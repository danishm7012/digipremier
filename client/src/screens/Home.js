import React from 'react'
import About from '../components/about/About'
import Testimonial from '../components/testimonial/Testimonial'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />

      <Testimonial />
    </>
  )
}

export default Home
