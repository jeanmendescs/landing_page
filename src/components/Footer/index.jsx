import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <span>© Jean Carlos</span>
        <ul>
          <li>
            <a href="https://github.com/jeanmendescs" target="_blank">
              <FaGithub size="25px" />
            </a>
          </li>
          <a href="https://www.linkedin.com/in/jean-mendes/" target="_blank">
            <li>
              <FaLinkedin size="25px" />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
