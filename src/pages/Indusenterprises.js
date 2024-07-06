import React from 'react';
import Header from '../Components/Header/navbar'
import Carousel from '../Components/Carousel/Carousel'
import AboutUs from '../Components/About us/Aboutus'
import MovieReel from '../Components/MovieReel/MovieReel'
import IndusB2BSolutions from '../Components/Blogs/blogs';
import Footer from '../Components/Footer/Footer';


const Page1 = () => {
  return (
    <div>
       
       <Header/>
       
       <Carousel/>
       
        
      
      
      <AboutUs/>
      <MovieReel/>
      
      <IndusB2BSolutions/>
      <Footer/>
    </div>
  );
}

export default Page1;
