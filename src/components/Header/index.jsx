import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <a href="/">
          <img
            src="https://landen.imgix.net/edmyisgcymym/assets/i0hj6b4f.png?w=200"
            alt="Optme Logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
