import React from 'react'
import About from '../components/about/About'
import Testimonial from '../components/testimonial/Testimonial'
import Services from '../components/services/Services'
import Hero from '../components/hero/Hero'
import Contact from '../components/contact/Contact'
import SocailShare from '../components/socialShare/Share'
import Meta from '../components/common/Meta'

const Home = () => {
  return (
    <>
      <SocailShare />
      <Meta />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Testimonial />
    </>
  )
}

export default Home
