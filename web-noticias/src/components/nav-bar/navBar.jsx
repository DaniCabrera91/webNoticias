import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
          >
            Publish
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
