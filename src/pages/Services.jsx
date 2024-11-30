import React from 'react'
import HomeServices from '../components/HomeServices'

function Services() {
  return (
    <div>
      <div className='md:px-14 mb-5 mt-16 md:py-14 pt-16 text-center md:text-start'>
      <h1 className='text-grayTheme text-2xl font-bold'>Our Services</h1>
      <h1 className='text-[20px] text-grayTheme font-semibold capitalize'>
        Its Personal, every person who walks, through our door is important to us, experience and knowlegde when you need it most.
      </h1>
      <p className='font-light text-grayTheme text-[17px]'>To create a better everyday life for the many people</p>
      </div>
      <HomeServices />
      
    </div>
  )
}

export default Services
