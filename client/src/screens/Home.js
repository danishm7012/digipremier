import React from 'react'
import About from '../components/about/About'
import Testimonial from '../components/testimonial/Testimonial'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Testimonial />
    </>
  )
}

export default Home
