import React from 'react'
import Directors from './Directors'
import Reviews from '../../components/Reviews'
import Details from './Details'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className='md:px-14 mb-5 mt-16 md:py-14 pt-16 text-center md:text-start'>
        <h1 className='text-grayTheme text-2xl font-bold'>Our History</h1>
        <h3 className='text-grayTheme font-light'>Our Mission and Visions</h3>
        <br />
        <p>
          At <span className='text-grayTheme text-lg tracking-[4px] uppercase'>xtra<span className='font-bold'>invest</span></span>, our vision is to revolutionize the way people connect with [your product/service] by fostering innovation and delivering exceptional value. We aim to be a leader in our industry, continuously evolving to meet the needs of our customers while maintaining the highest standards of quality, creativity, and sustainability. Our ultimate goal is to create lasting positive change and inspire others to pursue their passions and goals with confidence.
        </p>
        <p>
          Our mission is to provide unparalleled [products/services] that empower individuals and businesses to achieve their fullest potential. We are committed to excellence in everything we do, from the products we create to the experiences we deliver. By combining cutting-edge technology with thoughtful design and user-centered solutions, we strive to make a tangible impact on our customers' lives and contribute to a brighter future.
        </p>
        <p>
          We believe in building strong, authentic relationships with our customers, employees, and partners. Integrity, innovation, and collaboration are at the core of our values, guiding our decisions and actions every day. We prioritize customer satisfaction, creativity, and sustainability, ensuring that every aspect of our business aligns with our commitment to making a positive difference in the world.
        </p>
      </div>

      <div className='bg-cream p-12'>
        <h1 className='text-2xl font-bold text-grayTheme mb-3'>Our Expert Team Members</h1>
        <Directors />
        <Reviews />
      </div>

      <div className='bg-darkCream p-12 text-center'>
        <h1 className='text-6xl font-bold text-grayTheme'>37</h1>
        <h3 className='uppercase text-grayTheme tracking-[4px]'>Years of Experience</h3>
        <Details />
      </div>
      <div className='bg-grayTheme text-center text-cream p-[10px]'>
        <h1 className='text-[24px] mt-4 font-semibold capitalize'>Looking for an advisor?</h1>
        <button className='uppercase btn mt-4 mb-6'><NavLink to="/contact">Contact</NavLink></button>
      </div>
    </div>
  )
}

export default About
