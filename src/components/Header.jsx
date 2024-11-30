import React, { useState } from 'react'
import  investment from "../assets/investment.png"
import { NavLink } from 'react-router-dom'
import Links from './Links'
import { IoMenu } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full flex items-center justify-between px-3 py-4 lg:px-16 
      lg:py-4 fixed z-10 bg-white shadow-lg'>
   
   <div className='flex items-center gap-1'>
    <img src={investment} alt='' className='w-[30px]'/>
    <NavLink to="/"><h1 className='text-grayTheme text-lg tracking-[4px] uppercase'>xtra<span className='font-bold'>invest</span></h1></NavLink>
   </div>

         <div className='hidden md:flex items-center gap-3'>
           <Links to="/">Home</Links>
           <Links to="/about">About</Links>
           <Links to="/services">Services</Links>
           <Links to="/contact">Contact</Links>
         </div>
        <IoMenu  size={38} className='md:hidden cursor-pointer' onClick={toggleMenu}/>
        <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-white text-grayTheme flex flex-col items-center gap-4 py-4 shadow-lg`}
      >
        <Links to="/" onClick={toggleMenu}>
          Home
        </Links>
        <Links to="/about" onClick={toggleMenu}>
          About
        </Links>
        <Links to="/services" onClick={toggleMenu}>
         Services
        </Links>
        <Links to="/contact" onClick={toggleMenu}>
          Contact
        </Links>
        </div>
        
    </div>
  )
}

export default Header
