import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <ul>
          <li>
            <a href="#presentation">Apresentação</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
