import React from "react";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.background_img}>
          <div className={styles.background_color}></div>
        </div>
        <div>
          <h1>OTIMIZANDO RESULTADOS NAS ORGANIZAÇÕES</h1>
          <div className={styles.optme_img}>
            <img
              src="https://landen.imgix.net/edmyisgcymym/assets/050wj6kt.png?w=1200&h=900&fit=max"
              alt="Work background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
