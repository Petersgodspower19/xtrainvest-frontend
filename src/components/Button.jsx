import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({to, children}) {
  return (
    <button className='text-cream bg-grayTheme p-[6px] w-[150px]
    capitalize font-semibold rounded-[1px]'>
        <NavLink to={to}>{children}</NavLink>
    </button>
  )
}

export default Button
