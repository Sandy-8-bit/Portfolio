import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Hero.css";
import heroPic from "./hpic.svg";

const HeroSections = () => {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:santhoshvenugopal2004@gmail.com"; // Replace with your email
  };

  return (
    <CSSTransition 
      in={show} 
      timeout={500} 
      classNames="fade" 
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className="picker" ref={nodeRef}>
        <div className="mover">
          <div className="hero-container-profile">
            <div className="img-profile">
              <img src={heroPic} alt="pic" />
            </div>

            <div className="hero-text-container-profile">
              <div className="hero-text-profile">
                <h1>A Full Stack Web Developer<br />based in Tamil Nadu, India</h1>
                <p>Crafting Scalable Web Solutions | A Design Enthusiast</p>
              </div>
              <div className="buttons-row-profile">
                <button className="contact-button-profile" style={{cursor:"pointer"}} onClick={handleContactClick}>
                  Contact Me
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HeroSections;
