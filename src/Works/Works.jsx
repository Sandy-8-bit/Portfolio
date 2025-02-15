import React from "react";
import "./Works.css";
import link from "./Link.png";
import git from "./Git.png";

const works = [
  {
    id: 1,
    title: "GitHub",
    username: "@Sandy-8-bit",
    image: git,
    alt: "GitHub",
    url: "https://github.com/Sandy-8-bit",
  },
  {
    id: 2,
    title: "LinkedIn",
    username: "@SANTHOSH VP",
    image: link,
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/santhosh-vp",
  },
];

const Works = () => {
  return (
    <div className="makeitcentre">
      <div className="cent">
        <div className="heading">
          <h2 style={{ fontFamily: "Sanatori, sans-serif" }}>05 Works & Certifications</h2>
        </div>
        <div className="sec-ff">
          {works.map((work) => (
            <div className="content-edus" key={work.id}>
              <div
                className="first-edu"
                style={{ fontFamily: "Sanatori, sans-serif", fontWeight: 300 }}
              >
                <p>({work.id})</p>
              </div>
              <div className="second-edu">
                <div className="somethings">
                  <div
                    className="sec-fir"
                    style={{ fontFamily: "Sanatori, sans-serif", fontWeight: 500 }}
                  >
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "Sanatori, sans-serif",
                        fontWeight: 500,
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {work.title}
                    </a>
                  </div>
                  <div
                    className="sec-sec"
                    style={{
                      fontFamily: "Sanatori, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <p>{work.username}</p>
                  </div>
                </div>
                <div
                  className="something2"
                  style={{
                    fontFamily: "Sanatori, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  <img src={work.image} alt={work.alt}></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
