import React from 'react'
import RatingStars from './RatingStars';
import AOS from 'aos';
import Background from '../assets/phoneShoes2.png'
import 'aos/dist/aos.css'; 
import './TechSection.css'

AOS.init({
  delay: 0
});

const TechSection = () => {
  return (
    <section className="tech-section">
      <div className="tech-description" data-aos="zoom-out">
        <p>Combines style and comfort with the latest technology.</p>
        <RatingStars/>
      </div>
      <div className="background-container">
        <img src={Background} alt="" />
      </div>
    </section>
  );
}

export default TechSection