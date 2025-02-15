import React from "react";
import "./Provide.css";

const projects = [
  {
    id: "01",
    name: "UI/UX Design",
    link: "https://transport-landing-page-mu.vercel.app/",
    description:
      "Crafting intuitive and visually appealing user experiences that enhance usability and engagement. This includes user research, wireframing, prototyping, and final UI design to ensure a seamless experience.",
  },
  {
    id: "02",
    name: "Prototype & Design system",
    link: "#",
    description:
      "Developing interactive prototypes to validate ideas before development. Creating scalable design systems with reusable components, typography, color schemes, and design principles to maintain consistency across platforms.",
  },
  {
    id: "03",
    name: "Cross-Platform Applications",
    link: "#",
    description:
      "Building high-performance applications that work seamlessly across web and various devices. Ensuring a consistent UI/UX across platforms using .NET and MERN stack technologies.",
  },
  {
    id: "04",
    name: "Websites & Interactive web-apps",
    link: "#",
    description:
      "Designing and developing responsive, dynamic, and engaging websites or web applications. Implementing modern web technologies to enhance interactivity, accessibility, and performance.",
  },
];

const Provide = () => {
  return (
    <div 
      className="project-container-sec"
      style={{ fontFamily: "Satoshi Variable, sans-serif" }}
    >
      <div className="sub-sec">
        <div className="heading-sec">
          <h2 
            className="section-title-sec"
            style={{ fontFamily: "Satoshi Variable, sans-serif" }}
          >
            03 What Can I Provide?
          </h2>
        </div>
        <div className="content-sec">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card-sec"
              style={{ fontFamily: "Satoshi Variable, sans-serif" }}
            >
              <div className="project-left-sec">
                <div className="serial-num-sec">
                  <h4 
                    className="project-id-sec"
                    style={{ fontFamily: "Satoshi Variable, sans-serif" }}
                  >
                    ({project.id})
                  </h4>
                </div>
              </div>
              <div className="project-right-sec">
                <div className="project-title-sec">
                  <div className="names-sec">
                    <h2 
                      style={{ fontFamily: "Satoshi Variable, sans-serif" }}
                    >
                      {project.name}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="desc-sec">
                <p 
                  className="project-desc-sec"
                  style={{ fontFamily: "Satoshi Variable, sans-serif" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
