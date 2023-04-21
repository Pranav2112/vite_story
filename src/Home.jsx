import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Services from "./components/Services/Services";
import About from './About';
import Footer from './components/Footer/Footer';
import NumbersCount from './components/NumbersCount/NumbersCount';




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
      <NumbersCount/>
     
      </>
  );
};

export default Home