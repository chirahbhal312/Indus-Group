import React from 'react';
import Header from '../Components/Header/navbar'
import Carousel from '../Components/Carousel/Carousel'
import AboutUs from '../Components/About us/Aboutus'
import MovieReel from '../Components/MovieReel/MovieReel'
import IndusB2BSolutions from '../Components/Blogs/blogs';
import Footer from '../Components/Footer/Footer';
import Card from '../Components/Card1/cards';
import Mainimg from './enterprisemainimg.png'
import aboutus from './enterprisesaboutus.png'
import inclorporation from './incorploration.png'
import compliances from './compliance.png'
import itsupport from './itsupport.png'
import legalassistance from './legalassistance.png'
import gsttaxation from './gsttaxation.png'
import fundraising from './fundraising.png'

const Page1 = () => {
  return (
    <div>
       
       <Header/>
       
       {/* <Carousel/> */}
       
       <img className='image' src={Mainimg} alt="Main" />
      
      
      <AboutUs 
      heading={'ABOUT US'}
      photo={aboutus}
      descript={'Established in 2011, Indus Enterprises is a prominent Indian multinational company specializing in infrastructural development, energy, trade, and manufacturing. With a reputation for flexibility and innovation, Indus has successfully implemented high-profile projects across India, significantly contributing to the countrys economic growth. Indus offers a comprehensive range of services, including startup consulting, legal assistance, digital marketing, trade finance, and HR solutions. The company is committed to excellence and strategic expansion, enhancing infrastructure, energy profiles, trade relations, and manufacturing capabilities both locally and globally.'}
      />
      <h1>OUR SERVICES</h1>

      <div className="card-wrap">
      <Card text= "INCORPLORATION OF STARTUP" 
      bgImage={inclorporation}
      />
      <Card text= "CORPORATE COMPLIANCES" 
      bgImage={compliances}
      />
        <Card text= "IT-SUPPORT AND VAS" 
        bgImage={itsupport}
        />
    </div>

     <div className="card-wrap">
      <Card text= "LEGAL ASSISTANCE AND CONSULTING" 
      bgImage={legalassistance}
      />
      <Card text= "GST/ACCOUNTING AND TAXATION CONSULTING" 
      bgImage={gsttaxation}
      />
      <Card text= "FUND RAISING ASSISTANCE" 
      bgImage={fundraising}
      />
    </div>
     
      <MovieReel/>
      {/* <IndusB2BSolutions/> */}
      <Footer/>
    </div>
  );
}

export default Page1;
