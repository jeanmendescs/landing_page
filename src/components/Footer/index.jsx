import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>© OPTME - OTIMIZAÇÃO DIGITAL</span>
        <ul>
          <li>
            <FaTwitter size="25px" />
          </li>
          <li>
            <FaLinkedin size="25px" />
          </li>
          <li>
            <FaFacebookSquare size="25px" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
