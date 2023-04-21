import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import "./HeroSection.css";
import Faq from "./components/FAQ/Faq";

const About = () => {
  return (
    <>
    <Wrapper>
      <div className="container grid grid-two-column">
        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img
              src="./images/about1.svg"
              alt="About image"
              className="hero-img "
            />
          </picture>
        </div>

        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS</p>
          <h1 className="hero-heading">Rushikesh Abhale</h1>
          <p className="hero-para">
            I'm Rushi. A Full stack Developer, youtuber and freelancer. A Full
            stack Developer, youtuber and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/about">Know More</NavLink>
          </Button>

          <div className="i-icons">
           <a href="https://www.instagram.com/_stock.story/"> <img src="./images/instagram.png" alt="hero image" /></a>
            <a href="https://www.youtube.com/@stockstory3816"><img src="./images/linkedin.png" alt="hero image" /></a>
            <a href="https://www.youtube.com/@stockstory3816"><img src="./images/github.png" alt="hero image" /></a>
          </div>
        </div>
      </div>


      <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Why Choose Us </p>
          <h1 className="hero-heading"> Welcome to Stock Story Academy</h1>
          <p className="hero-para">
          Booming Bulls is an initiative for the young generation interested in making more, willing to step forward and be free from financial situations. We provide knowledge based on self-learning, experience, and theoretical implications on the market.

In general, trading is considered a business not suitable for everyone, but this is just a hoax which we clear by letting you learn about the strategies that can provide a good profit.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Know More</NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="./images/hero.svg" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
    </Wrapper>
    <Faq/>
    </>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  background-color: rgb(236, 236, 255);

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default About;
