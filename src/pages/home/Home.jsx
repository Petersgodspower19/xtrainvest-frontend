import React from 'react'
import HeroSection from './HeroSection'
import Mission from './Mission'
import HomeServices from '../../components/HomeServices'
import HomeAbout from './HomeAbout'
import Reviews from '../../components/Reviews'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <div>
      <HeroSection />
      <Mission />
      <HomeServices />
      <HomeAbout />
      <Reviews />
      <div className='bg-grayTheme text-center text-cream p-[10px]'>
        <h1 className='text-[24px] mt-4 font-semibold capitalize'>Looking for an advisor?</h1>
        <button className='uppercase btn mt-4'><NavLink to="/contact">Contact</NavLink></button>
      </div>
    </div>
  )
}

export default Home
