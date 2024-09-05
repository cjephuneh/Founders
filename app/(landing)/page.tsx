import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function page() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default page