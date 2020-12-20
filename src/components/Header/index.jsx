import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <h3>© Jean Carlos</h3>
        </div>
      </div>
    </nav>
  );
};

export default Header;
