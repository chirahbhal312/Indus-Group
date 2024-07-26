import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import Navbar from '../Components/Header/navbar';
import iimage from './truckimg.png';
import mainimg from './logistictopimg.png';
import Card from '../Components/Card1/cards.jsx'
import Footer from '../Components/Footer/Footer';
import water from './Waterfreight.png';
import land from './Landfreight.png';
import air from './Airfreight.png';
import stars from './Starphotos.png';
import '../App.css';

const Page2 = () => {
  return (
    <div>
      <Navbar />

      <img className='image' src={mainimg} alt="Main" />

      <div className='immage-container'>
      <img className='immage' src={iimage} alt="Secondary" />
      </div>

      <br/>
      <br/>

      <div className="card-wrap">
      <Card 
      text= "Land"
      bgImage= {land}
      />
      <Card text= "Air" 
      bgImage= {air}
      />
      <Card text= "Water" 
      bgImage= {water}
      />
    </div>

    <div className='iimmage-container'>
      <img className='iimmage' src={stars} alt="Secondary" />
      </div>

    <Footer/>
    </div>
  );
}

export default Page2;
