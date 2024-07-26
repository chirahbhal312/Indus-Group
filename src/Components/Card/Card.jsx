import React from "react";
import "./Card.css";
import {Link} from 'react-router-dom';

const Card = ({heading, description, photo, link}) => {
  return (
    <div className="card-container">
      <img src={photo} alt="" />
      <h2>{heading}</h2>
      <p>{description}</p>
      <Link to={link} className="routing">Learn More</Link>
    </div>
  );
};

export default Card;
