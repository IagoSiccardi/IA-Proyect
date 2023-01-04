import React from 'react'
import Logotype from "../assets/nikeIcon.png"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-div'>
        <ul className='navbar-ul'>
            <li>Style</li>
            <li>Purchase</li>
            <li>More</li>
        </ul>
        <img src={Logotype} alt="Nike LogoType"/>
    </div>
  )
}

export default Navbar