import React from 'react';
import './HeroSection.css';
import photo from "./FINAL.svg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="text-group">
          <div className="line">
            <div className="text-block">
              <img src={photo} alt="pic" />
              <span 
                className="sub-text" 
                style={{ fontFamily: "Satoshi Variable, sans-serif" }}
              >
                Beauty in simplicity.
              </span>
            </div>
          </div>

          <div className="text-block">
            <h2 
              className="main-text develop" 
              style={{ fontFamily: "Satoshi Variable, sans-serif" }}
            >
              DEVELOP
            </h2>
            <span 
              className="sub-text" 
              style={{ fontFamily: "Satoshi Variable, sans-serif" }}
            >
              Seamless Apps & Websites.
            </span>
          </div>

          <div className="text-block">
            <h2 
              className="main-text deliver" 
              style={{ fontFamily: "Satoshi Variable, sans-serif" }}
            >
              DELIVER
            </h2>
            <span 
              className="sub-text" 
              style={{ fontFamily: "Satoshi Variable, sans-serif" }}
            >
              Exceptional Experiences.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
