import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <div className="whole">
        <div className="heading-edu" style={{ fontFamily: "Satoshi Variable",fontWeight:500 }}  >04 Education</div>
        <div className="content-edu">
          <div className="first-edu" style={{ fontFamily: "Satoshi Variable",fontWeight:300 }}>
            <p>(01)</p>
          </div>
          <div className="second-edu">
            <div className="something">
            <div className="sec-fir">
              <p style={{ fontFamily: "Satoshi Variable",fontWeight:500 }}>2022 - Present</p>
            </div>
            <div className="sec-sec" style={{ fontFamily: "Satoshi Variable",fontWeight:500 }}>
              <p >SNS College of <br></br>
                 Technology</p>
            </div>
            </div>
            <div className="something2" style={{ fontFamily: "Satoshi Variable", fontWeight: 300 }}>
            I am currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning (B.Tech AIML) at SNS College of Technology.Alongside my coursework, I specialize in web development using .NET and the MERN stack, integrating AI-driven functionalities into modern applications.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
