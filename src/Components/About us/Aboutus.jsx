import React from 'react';
import './Aboutus.css';
import photo from "./aboutus.jpg"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>ABOUT US</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
      </div>
      <div className="image-container">
        
          <img src= {photo}/>
        </div>
      </div>
   
  );
};

export default AboutUs;
