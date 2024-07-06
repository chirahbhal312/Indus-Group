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

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <AboutUs/>
      <div className='card-wrapper'>
      <Card />
      <Card />
      <Card />
      </div>
      <MovieReel/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default HomePage;
