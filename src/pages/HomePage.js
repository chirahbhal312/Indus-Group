import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

import Header from '../Components/Header/navbar';
import Carousel from '../Components/Carousel/Carousel'
import AboutUs from '../Components/About us/Aboutus'
import Blogs from '../Components/Blogs/blogs'
import MovieReel from '../Components/MovieReel/MovieReel'
import Footer from '../Components/Footer/Footer'
import Card from '../Components/Card/Card'

import topimage from './Landingpage.png'
import enterprisecard from './IndusEnterprisesCard.png'
import logisticscard from './logistics.jpg'
import myskillcard from './MySkillsAcademy.png'
import aboutusimg from "./Aboutus.png"

const HomePage = () => {
  return (
    <div>
      <Header/>
      <img src={topimage}/>
      {/* <Carousel/> */}

      <AboutUs
      heading="ABOUT US"
      descript="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sequi reiciendis ut tempore eos dolorem iusto dicta nobis hic cupiditate, at id molestias quisquam explicabo minima molestiae dignissimos error, atque similique nulla! Impedit pariatur eaque similique? Tempora dolor similique aliquam vel provident temporibus, culpa exercitationem omnis iure, recusandae mollitia impedit, eveniet quibusdam tempore necessitatibus eligendi fugiat doloribus ex laudantium. Atque omnis quo facilis ab fugit ipsa eligendi laborum natus dignissimos nemo ut magni voluptatibus aliquam, tempore, velit, perferendis itaque odio maxime molestiae. Libero iure perferendis qui voluptas repellendus et, aut at sapiente hic, iusto dolor explicabo nam quos velit maiores similique numquam officiis ab in? Ea delectus, esse pariatur saepe fugit a dolorem autem, porro dolore eligendi neque repellat, corrupti cupiditate ab voluptatibus nemo maiores."
      photo={aboutusimg}
      />

      <div className='card-wrapper'>
      <Card 
      photo={enterprisecard}
      heading={'Enterprising Solutions'}
      description={'Established in 2011, Indus Enterprises is a leading Indian multinational specializing in infrastructure, energy, trade, and manufacturing. Known for innovation, it offers consulting, legal, marketing, finance, and HR services, driving economic growth.'}
      link="/Indusenterprises"
      />
      <Card
      photo={logisticscard}
      heading={'Logistics Solutions'}
      description={'Indus B2B Solutions, led by Mr. Piyush Kumar Singh, offers comprehensive international logistics—cargo transportation, warehousing, and end-to-end services—with ISO 9001:2008 standards and expert customs compliance.'}
      link="/Indusb2b"
      />
      <Card
      photo={myskillcard}
      heading={'Skill Development'}
      description={'My Skills Academy, part of the Indus Group, offers expert-designed online courses in analytics, business management, IT, and more. Our curriculum blends theory with practical insights, ensuring students excel globally.'}
      link="/MySkillsAcademy"
      />
      </div>
      <MovieReel/>
      {/* <Blogs/> */}
      <Footer/>
    </div>
  );
}

export default HomePage;
