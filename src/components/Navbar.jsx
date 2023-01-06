import React from 'react'
import Logotype from "../assets/nikeIcon.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='navbar-header'>
        <img src={Logotype} alt="Nike LogoType"/>
        <ul className='navbar-ul'>
            <li>Style</li>
            <li>Purchase</li>
            <li>More</li>
        </ul>
    </header>
  )
}

export default Navbar