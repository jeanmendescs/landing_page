import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>© OPTME - OTIMIZAÇÃO DIGITAL</span>
        <ul>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
