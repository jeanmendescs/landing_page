import React from "react";
import styles from "./styles.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#main">Capa</a>
            </li>
            <li>
              <a href="#presentation">Histórico</a>
            </li>
            <li>
              <a href="#tech">Conhecimentos</a>
            </li>
            <li>
              <a href="#partner">Diferenciais</a>
            </li>
            <li>
              <a href="#form">Formulário</a>
            </li>
          </ul>
          <GiHamburgerMenu
            className={styles.burger}
            size="35px"
            color="black"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
