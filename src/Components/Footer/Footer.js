import React from "react";
import "./Footer.css";
import Contact from "../Contact/Contact";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul className="quicklinks">
              <li>
              <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/event'>Events</Link>
              </li>
              <li>
              <Link to='/team'>Team</Link>
              </li>
              <li>
              <Link to='/gallery'>Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Contact Info</h3>
            <div>
              <p>
               PRESIDENT : AMAN TRIPATHI
              </p>
              <p>VICE PRESIDENT : HARSH SHARMA</p>
            </div>
          </div>
          <div className="footer-social">
            <h3>Find Us here</h3>
            <div className="social-icons">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2023 JIIT OPTICA CHAPTER | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

