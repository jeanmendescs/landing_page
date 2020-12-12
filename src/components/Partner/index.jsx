import React from "react";
import styles from "./styles.module.scss";

const Partner = () => {
  return (
    <section id="partner" className={styles.partner}>
      <h1>Diferenciais:</h1>
      <div className={styles.differentials}>
        <div className={styles.differentialsUnity}>
          <h3>Bom ouvinte</h3>
          <p>Sempre atento ao que os outros têm a dizer</p>
        </div>
        <div className={styles.differentialsUnity}>
          <h3>Autodidata</h3>
          <p>Manter-me atualizado como meta</p>
        </div>
        <div className={styles.differentialsUnity}>
          <h3>Movido a desafios</h3>
          <p>Em busca de motivação adicional</p>
        </div>
        <div className={styles.differentialsUnity}>
          <h3>Prestativo</h3>
          <p>Um olhar para além do individual</p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
