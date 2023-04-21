import React from "react";
import { NavLink } from "react-router-dom";


import "./Service.css";

const Services = () => {
  return (

    <div className="mainbody">
    <div className="container1">
      <div className="box">
        <h2>01</h2>
        <h3>Service One</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          repudiandae est saepe aperiam? Assumenda laborum quisquam illum itaque
          deserunt exercitationem minus, 
        </p>
        <button className="btn learnmore-btn">
            <NavLink to="/contact">Learn more </NavLink>
          </button>
      </div>

      <div className="box">
        <h2>02</h2>
        <h3>Service Two</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          repudiandae est saepe aperiam? Assumenda laborum quisquam illum itaque
          deserunt exercitationem minus, 
        </p>
        <button className="btn learnmore-btn">
            <NavLink to="/contact">Learn more </NavLink>
          </button>
      </div>

      <div className="box">
        <h2>03</h2>
        <h3>Service Three</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          repudiandae est saepe aperiam? Assumenda laborum quisquam illum itaque
          deserunt exercitationem minus, 
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
