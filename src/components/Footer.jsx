import React from 'react'
import  investment from "../assets/investment.png"
import { NavLink } from 'react-router-dom'
import Links from './Links'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer() {
  return (
    <div className='px-3 py-4 lg:px-16 lg:py-4 w-full bg-cream text-grayTheme flex justify-between 
    flex-col md:flex-row gap-3 items-start'>
        <div className='w-[250px] flex items-start flex-col gap-2'>
        <div className='flex items-center gap-1'>
    <img src={investment} alt='' className='w-[30px]'/>
    <NavLink to="/"><h1 className='text-grayTheme text-lg tracking-[4px] uppercase'>xtra<span className='font-bold'>invest</span></h1></NavLink>
   </div>
   <p className='md:text-start text-grayTheme mb-3'>
        Investors, particualry novices, are often advised to adopt a particular investment strategy and diversify
        their portfolio. Diversification has the statistical effect of reducing overall risk
            </p>
        </div>

        <div className='flex flex-col gap-2 items-start'>
            <h1 className='font-bold text-[20px]'>About Company</h1>
            <Links to="/">Home</Links>
           <Links to="/about">About</Links>
           <Links to="/services">Services</Links>
           <Links to="/contact">Contact</Links>
        </div>

        <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
         <FaFacebookF size={25} color='#000'/>
         <FaTwitter size={25} color='#000'/>
         <FaLinkedinIn size={25} color='#000'/>
        </div>
        <p className='mb-3'>&copy;2024</p>
        </div>
      
    </div>
  )
}

export default Footer
