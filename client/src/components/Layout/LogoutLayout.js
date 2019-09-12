import React from 'react'
import { NavLink } from 'react-router-dom'

const LogoutLayout = (props) => {
  console.log("Props value is "+ props);

  return (
      <ul className="right">
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
      </ul>
  )
}

export default LogoutLayout
