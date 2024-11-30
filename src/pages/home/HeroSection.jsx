import React from 'react'
import hero from "../../assets/hero.jpg"
import Button from '../../components/Button'

function HeroSection() {
  return (
    <div className='md:px-13 mb-5  md:py-13 pt-15 flex flex-col md:flex-row items-center justify-around' id='home'>
         <div className='w-full md:w-[500px] text-center md:text-start px-3'>
    <h1 className='text-2xl md:text-4xl font-bold h1 mb-5 text-grayTheme'>We will take you through Each step till the end.</h1>
        <p className='md:text-start text-grayTheme mb-3'>
                Investors, particualry novices, are often advised to adopt a particular investment strategy and diversify
                their portfolio. Diversification has the statistical effect of reducing overall risk
            </p>
        <Button to="/about">Our Solutions</Button>
        </div>
        <img src={hero} alt='' className='w-[510px] mix-blend-multiply' />
      
    </div>
  )
}

export default HeroSection
