import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Optme = () => {
  return (
    <footer className="footer">
      <div>
        <span>© OPTME - OTIMIZAÇÃO DIGITAL</span>
      </div>
      <div className="div-footer">
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

export default Optme;
