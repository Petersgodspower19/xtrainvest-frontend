import React from 'react';
import { NavLink } from 'react-router-dom';

function ServiceCard({ icon, heading, text }) {
  return (
    <div className='flex flex-col items-center gap-4 bg-grayTheme text-cream p-6 rounded-lg shadow-lg
     w-[300px] hover:scale-105 transition-transform duration-300'>
      <div>{icon}</div>
      <h1 className='text-xl font-bold'>{heading}</h1>
      <p className='text-sm text-center'>{text}</p>
      <button className='bg-cream text-grayTheme px-6 py-2 rounded'>
        <NavLink to="/services" className=''>
          Learn More
        </NavLink>
      </button>
    </div>
  );
}

export default ServiceCard;
