import { FaListAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './button.css'

function ButtonCurrentEmployee() {
  return (
    <NavLink to="/employees" className="navlink-employees">
      <button className="button-current-employee">
        <FaListAlt />
        <p> List of registered employees </p>
      </button>
    </NavLink>
  )
}

export default ButtonCurrentEmployee
