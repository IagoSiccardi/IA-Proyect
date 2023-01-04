import React from 'react'
import Navbar from './Navbar'
import './Main.css'
import Shoes from '../assets/shoes.png'

const Main = () => {
  return (
    <main className='main'>
        <section className='description-section'>
            <article className='description-article'>
                <h3>JORDAN DELTA</h3>
            </article>
        </section>
        <section className='nike-section'>
            <div className='nike-shoes'>
                <img src={Shoes} alt="" />
            </div>
        <Navbar/>
        </section>
    </main>
    
  )
}

export default Main