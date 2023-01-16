import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import './Footer.css'



const Footer = () => {
  return (
    <footer className='footer'>
        <section className='footer-section'>
            <a href="https://www.linkedin.com/in/iago-siccardi-329076235/" target="blank">
                <FaLinkedin size="2.5rem" color='white'/>
            </a>
            <a href="https://github.com/IagoSiccardi/IA-Proyect" target="blank">
                <FaGithub size="2.5rem" color='white'/>
            </a>
            <a href="mailto:iago.siccardi@gmail.com?subject=Hi%Iago!" target="blank">
                <FaEnvelope size="2.5rem" color='white'/>
            </a>
        </section>
    </footer>
  )
}

export default Footer