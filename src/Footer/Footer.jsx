import React from "react";
import "./Footer.css";

const Footer = () => {
  const sanatoriaStyle = { fontFamily: "Satoshi, sans-serif" };

  return (
    <div className="wholeee" style={sanatoriaStyle}>
      <div className="footer">
        <div className="makeitc">
          <div className="footer-content">
            <div className="ft-one">
              <a href="/terms" className="footer-link" style={sanatoriaStyle}>
                Terms & conditions
              </a>
              <a href="/privacy" className="footer-links" style={sanatoriaStyle}>
                Privacy policy
              </a>
            </div>
            <div className="ft-two">
              <p className="footer-text" style={sanatoriaStyle}>
                Made by <span className="footer-author" style={sanatoriaStyle}>@Santhosh V P</span> | ©
                2022 - 2025 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
