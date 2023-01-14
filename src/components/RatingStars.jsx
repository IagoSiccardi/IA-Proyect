import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './RatingStar.css'



const RatingStars = () => {

    
    const [rating, setRating] = useState(localStorage.getItem('rating') ? localStorage.getItem('rating') : null)
    const [hover, setHover] = useState(null)

    useEffect(() => {
        localStorage.setItem('rating',rating)
    },[rating])


  return (
      <div className='ratingStars'>
        {
            [...Array(5)].map((start,i) => {
                
                const ratingValue = +i + 1
                
                return (
                    <label key={i} data-aos="zoom-in" data-aos-delay="300">
                     
                   <input
                     type="radio"
                     name={rating}
                     value={ratingValue}
                     onClick={() => setRating(ratingValue)}
                   />
                   <FaStar 
                    className={ratingValue <= (hover || rating) ? 'star' : 'starBlack'} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                 </label>
               );
            })
        }

    </div>
  )
}

export default RatingStars