import React from "react";
import "./Card.css";
import photo from '../Blogs/images/finance.jpg'
import {Link} from 'react-router-dom';

const Card = () => {
  return (
    <div className="card-container">
      <img src={photo} alt="" />
      <h2>Indus Group</h2>
      <p>Indus Group is a leading financial services company in India. It is a part Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi fugit iure porro officiis rerum illo.</p>
      <Link to='/Indusenterprises' className='routing' >Learn More</Link>
    </div>
  );
};

export default Card;
