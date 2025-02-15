import React, { useState } from "react";
import "./Contact.css";
import linkedinIcon from "../Asset/link.svg";
import gmailIcon from "../Asset/Mail.svg";
import whatsappIcon from "../Asset/Whats.svg";
import githubIcon from "../Asset/github.svg";

const ContactSection = () => {
  const sanatoriStyle = { fontFamily: "Sanatori, sans-serif" };
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "5265f392-bacd-495a-9875-30bf1aea38a1", // Replace with your Web3Forms API key
        email: "santhoshvenugopal2004@gmail.com", // Replace with your receiving email
        message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setMessage(""); // Clear the input after sending
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setStatus("");
      }, 5000);
    } else {
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="profile-section">
        <h2 className="profile-name">
          <span className="code-symbol" >&lt;/&gt;</span> SANTHOSH V P
        </h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sabarishvs" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="mailto:sabarishvs@gmail.com">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://github.com/sabarishvs" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>

      <div className="message-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="message" style={sanatoriStyle}>Write a message</label>
          <div className="input-container">
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="inpt"
              style={sanatoriStyle}
              required
            />
            <button type="submit" className="send-btn" style={sanatoriStyle}>Send</button>
          </div>
          {status && <p className="status" style={sanatoriStyle}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
