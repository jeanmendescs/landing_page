import React from "react";
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
