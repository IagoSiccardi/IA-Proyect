import React from "react";
import "./Description.css";
import Shoes from "../assets/shoesDesc.png";

const Description = () => {
  return (
    <section className="mainDescription">
      <div className="description-shoes">
        <img src={Shoes} alt="" />
      </div>
      <div className="description-div">
        <p>
        The new Jordan Delta represents a new era of comfort and style. with its lightweight, breathable upper and cushioned sole, these sneakers provide a comfortable and secure fit all day long. The Jordan Delta also features a sleek, modern design with bold accents and colorways, making it the perfect addition to any outfit. <span>Elevate your style and comfort with The Jordan Delta</span>.
        </p>
        <h3>Trevor Jogger</h3>
      </div>
    </section>
  );
};

export default Description;
