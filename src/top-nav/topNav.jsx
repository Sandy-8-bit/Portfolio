import React from "react";
import "./topNav.css";
// Import images
import git from "./assets/git.png";
import linkedin from "./assets/linkedin.png";
import gmail from "./assets/gmail.png";
import wp from "./assets/wp.png";

// CV file (Make sure to add your CV in the "public" folder and rename it as "cv.pdf")
const CV_URL = "/resume.pdf";

// Social media links
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/santhosh-v-p/",
  github: "https://github.com/Sandy-8-bit",
  gmail: "mailto:santhoshvenugopal2004@gmail.com",
  whatsapp: "https://wa.me/9715524124", // Replace with your number (e.g., ?phone=1234567890)
};

const TopNavBar = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV_URL;
    link.download = "Your_CV.pdf";
    link.click();
  };

  return (
    <div className="whole-top">
      <div className="top-nav">
        {/* CV Download Button */}
        <button className="download-cv-button" style={{cursor:"pointer"}} onClick={handleDownloadCV}>
          Download CV
        </button>

        {/* Social Icons */}
        <div className="social-icons-row">
          <button
          style={{cursor:"pointer"}}
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
          >
            <img src={linkedin} alt="LinkedIn" className="social-icon" width="47.866px" />
          </button>
          <button
          style={{cursor:"pointer"}}
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.github, "_blank")}
          >
            <img src={git} alt="GitHub" className="social-icon" width="47.866px" />
          </button>
          <button
          style={{cursor:"pointer"}}
            className="social-icon-button"
            onClick={() => window.location.href = SOCIAL_LINKS.gmail}
          >
            <img src={gmail} alt="Gmail" className="social-icon" width="47.866px" />
          </button>
          <button
          style={{cursor:"pointer"}}  
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
          >
            <img src={wp} alt="WhatsApp" className="social-icon" width="47.866px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
