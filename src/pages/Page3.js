import React from 'react';
import Navbar from '../Components/Header/navbar';
import Mainimg from './msamainimg.png'
import aboutusimg from './msaaboutus.png'
import AboutUs from '../Components/About us/Aboutus'
import Card from '../Components/Card1/cards';
import MovieReel from '../Components/MovieReel/MovieReel'
import Footer from '../Components/Footer/Footer';
import IndusB2BSolutions from '../Components/Blogs/blogs';
import aircourse from './aircourse.png'
import startupcourse from './startupcourse.png'
import digitalmarket from './digitalmarket.png'
import fcard from './fcard.png'
import basiclog from './basiclog.png'
import ecomlog from './ecomlog.png'
import airfrecourse from './aircourse.png'
import incoterms from './incoterms.png'
import exim from './exim.png'
import salestraining from './salestraining.png'
import eximproc from './eximproc.png'
import demandfore from './demandforce.png'
import inventory from './inventory.png'

const Page3 = () => {
  return (
    <div>
      <Navbar/>
      <img className='image' src={Mainimg} alt="Main" />
      <AboutUs
      photo={aboutusimg}
      heading={'ABOUT US'}
      descript={'My Skills Academy, part of the Indus Group, offers meticulously crafted online courses and workshops in fields like analytics, business management, IT, and more. Designed by industry experts, our curriculum combines theoretical knowledge with practical insights, preparing students for real-world challenges through interactive workshops, case studies, and simulations. Our emphasis on experiential learning and career support services ensures students excel in competitive job markets globally. Join My Skills Academy to embark on a transformative educational journey and unlock your professional potential.'}
      />
      <h1>CERTIFICATE COURSES OFFERED</h1>

      <div className="card-wrap">
      <Card 
      bgImage={aircourse}
      text= "INTERNATIONAL FREIGHT FORWARDING" />
      <Card 
      bgImage={startupcourse}
      text= "START-UP $ SCALE-UP IN INTERNATIONAL TRADE "/>
      <Card 
      bgImage={digitalmarket}
      text= "DIGITAL MARKETING "/>
    </div>
    <div className="card-wrap">
      <Card 
      bgImage={fcard}
      text= "F-CARD CUSTOMS EXAM PREPARATIONS" />
      <Card 
      bgImage={basiclog}
      text= "BASIC LOGISTICS & FREIGHT FORWARDING"/>
      <Card 
      bgImage={ecomlog}
      text= "E-COMMERCE LOGISTICS CERTIFIED PROFESSIONAL "/>
    </div>
<div className="card-wrap">
      <Card 
      bgImage={airfrecourse}
      text= "AIR FREIGHT BASICS " />
      <Card 
      bgImage={incoterms}
      text= "MASTERCLASS ON INCOTERMS "/>
      <Card 
      bgImage={exim}
      text= "EXIM DOCUMENTATION & PROCEDURES "/>
    </div>

     <div className="card-wrap">
      <Card 
      bgImage={salestraining}
      text= "SALES TRAINING" />
      <Card 
      bgImage={eximproc}
      text= "EXIM PROCEDURES & GLOBAL TRADE SUPPLY CHAIN"/>
      <Card 
      bgImage={demandfore}
      text= "DEMAND FORECASTING IN SUPPLY CHAIN MANAGEMENT"/>
    </div>

    <div className="card-wrap">
      <Card 
      bgImage={inventory}
      text= "INVENTORY MANAGEMENT" />

      </div>
     
    
      <MovieReel/>

      {/* <IndusB2BSolutions/> */}

      <Footer/>
    </div>
  );
}

export default Page3;
