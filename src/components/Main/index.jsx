import React from "react";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.backgroundImg}>
          <div className={styles.backgroundColor}></div>
        </div>
        <div className={styles.textWrapper}>
          <h1>Olá, sou o Jean Carlos! </h1>
          <h1>Seja muito bem-vindo(a)!</h1>
          <p>
            Abaixo você vai conhecer um pouco sobre mim e também poderá
            solicitar uma Consultoria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
