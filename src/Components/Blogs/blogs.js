import React from 'react';
import './blogs.css';
import image1 from './images/business.jpg'; 
import image2 from './images/finance.jpg'; 
import image3 from './images/analytics.jpg'; 

const IndusB2BSolutions = () => {
  return (
    <div className="container">
        <div className="left-blog">
          <div className="main-image">
          <img src={image1} alt="Main" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p className='learn-more'>Learn more </p>
        </div>
        <div className="right-blog">
          <div className="right-top">
            <img src={image1} alt="Image 1" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
          </div>
          <div className='right-bott'>
          <div className="right-bottom">
            <img src={image2} alt="Image 2" />
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          <div className="right-bottom">
            <img src={image3} alt="Image 3" />
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          </div>
        </div>
    </div>
  );
};

export default IndusB2BSolutions;
