import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";


import "./Service.css";

const Services = () => {
  return (

    <div className="mainbody">
    <div className="container1">
      <div className="box">
        <h2>01</h2>
        <h3>Learn From Scratch</h3>
        <p>
        Learn the basics of the stock market, to enhance the understanding of how does the Stock market works and what makes you earn in the market. 
        </p>
        <button className="btn learnmore-btn">
            <NavLink to="/contact">Learn more </NavLink>
          </button>
      </div>

      <div className="box">
        <h2>02</h2>
        <h3>Revision Classes</h3>
        <p>
        Over 300+ revision classes to help you cover any topic you miss in your live class. You will never be left behind 
        </p>
        <button className="btn learnmore-btn">
            <NavLink to="/contact">Learn more </NavLink>
          </button>
      </div>

      <div className="box">
        <h2>03</h2>
        <h3>Live Q/A Session</h3>
        <p>
        We have Live Q/A interaction sessions with Anish Singh Thakur, where students ask their queries directly to him. 
        </p>
        <button className="btn learnmore-btn">
            <NavLink to="/contact">Learn more </NavLink>
          </button>
      </div>
    </div>

    
  </div>



    
    
  );
};

 

export default Services;
