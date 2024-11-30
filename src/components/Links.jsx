import React from 'react'
import { NavLink } from 'react-router-dom'

function Links({to, children, onClick}) {
  return (
    <NavLink to={to} onClick={onClick} className="text-black text-[16px] hover:text-grayTheme hover:underline">
      {children}
    </NavLink>
  )
}

export default Links
