import React from "react";
import { motion } from "framer-motion"; // ✅ Import framer-motion
import "./ProjectList.css";
import roll from "./Roll1.png"; 
import roll2 from "./net.png";
import roll3 from "./Ret.svg";

const projects = [
  {
    id: "01",
    name: "Cinema Booking System",
    link: "#",
    photo: roll,
    description:
      "As a Frontend Developer, I built the Cinema Booking System using React.js and Tailwind CSS. Designed a responsive and engaging interface for seat booking, movie browsing, and secure user login with a seamless UX across all devices.",
  },
  {
    id: "02",
    name: "Payroll Management System",
    link: "#",
    photo: roll,
    description:
      "Developed the complete frontend of the Payroll Management System using React.js, TypeScript, and Tailwind CSS. Implemented employee dashboards, payroll summaries, and admin panels with clean layouts and efficient state management.",
  },
  {
    id: "03",
    name: "POS Billing Software",
    link: "#",
    photo: roll3,
    description:
      "Built the frontend for a POS Billing Software using React.js and Tailwind CSS. Focused on real-time billing, product listing, and responsive invoice generation with a modern, intuitive user experience.",
  },
];

const ProjectList = () => {
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ fontFamily: "Satoshi" }}
    >
      <div className="sub" style={{ fontFamily: "Satoshi" }}>
        <div className="heading" style={{ fontFamily: "Satoshi" }}>
          <h2 className="section-title" style={{ fontFamily: "Satoshi" }}>
            01 Projects
          </h2>
        </div>
        <div className="content" style={{ fontFamily: "Satoshi" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ fontFamily: "Satoshi" }}
            >
              <div className="project-left" style={{ fontFamily: "Satoshi" }}>
                <div className="serial-num" style={{ fontFamily: "Satoshi" }}>
                  <h4 className="project-id" style={{ fontFamily: "Satoshi" }}>
                    ({project.id})
                  </h4>
                </div>
                <div className="image" style={{ fontFamily: "Satoshi" }}>
                  <motion.img
                    src={project.photo}
                    alt="Project Icon"
                    className="project-icon"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className="project-right" style={{ fontFamily: "Satoshi" }}>
                <div className="project-title" style={{ fontFamily: "Satoshi" }}>
                  <div className="names" style={{ fontFamily: "Satoshi" }}>
                    <h2 style={{ fontFamily: "Satoshi" }}>{project.name}</h2>
                  </div>
                  <div className="links" style={{ fontFamily: "Satoshi" }}>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      style={{ fontFamily: "Satoshi" }}
                    >
                      Link
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="desc" style={{ fontFamily: "Satoshi" }}>
                <p
                  className="project-desc"
                  style={{ fontFamily: "Satoshi" }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectList;
