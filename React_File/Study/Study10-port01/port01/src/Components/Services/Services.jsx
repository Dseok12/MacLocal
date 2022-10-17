import React from 'react';
import './Services.css';
import Cards from "../Cards/Cards";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';

const Services = () => {
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nulla vel cupiditate in.
          <br/>
          Aspernatur quidem quia sed cumque accusamus aliquid.
        </span>
        <a href={Resume} className="s-link" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards ">
        <div style={{left: '14rem'}}>
          <Cards
            emoji = {HeartEmoji}
            heading = {"Design"}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
          />
        </div>
        <div style={{top: '12rem', left: '-4rem'}}>
          <Cards
            emoji = {Glasses}
            heading = {"Developer"}
            detail = {"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        <div style={{top: "19rem", left: "25rem"}}>
          <Cards
            emoji = {Humble}
            heading = {"UI/UX"}
            detail = {"Lorem ispum dummy text are usually use in section where we need some random text"}
          />
        </div>
      </div>
    </div>
  )
}

export default Services