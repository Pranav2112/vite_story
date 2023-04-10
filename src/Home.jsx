import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Services from './Services';
import About from './About';



const Home = () => {

  // const data={
  //   name:"Stock Story",
  //   image:"./images/hero.svg",
  // };
  return (
    <>
      <HeroSection />
      <About/>
      <Services />
      </>
  );
};

export default Home