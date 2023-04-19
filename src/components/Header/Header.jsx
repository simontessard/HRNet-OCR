import { FaUserTie } from 'react-icons/fa'

import { NavLink } from 'react-router-dom'

import './header.css'

function Header() {
  return (
    <header>
      <NavLink to="/" className="navlink-header">
        <FaUserTie className="logo-header" />
        HRNet
      </NavLink>
    </header>
  )
}

export default Header
