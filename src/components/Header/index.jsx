import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <ul>
          <li>
            <a href="#main">Capa</a>
          </li>
          <li>
            <a href="#presentation">Histórico</a>
          </li>
          <li>
            <a href="#tech">Conhecimentos Técnicos</a>
          </li>
          <li>
            <a href="#partner">Diferenciais</a>
          </li>
          <li>
            <a href="#form">Formulário</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
