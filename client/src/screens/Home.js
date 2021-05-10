import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Hero from '../components/hero/Hero'
import Meta from '../components/common/Meta'
import Ranking from '../components/rankingSatisfaction/RankingSatisfaction.js'
import React from 'react'
import Services from '../components/services/Services'
import SocailShare from '../components/socialShare/Share'
import Testimonial from '../components/testimonial/Testimonial'
import TestmonialSlider from '../components/testmonialSlider/TestmonialSlider'

const Home = () => {
  return (
    <>
      <SocailShare />
      <Meta />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Ranking />
      <TestmonialSlider />
      <Testimonial />
    </>
  )
}

export default Home
