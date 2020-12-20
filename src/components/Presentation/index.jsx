import React from "react";
import Skill from "../Skill";
import styles from "./styles.module.scss";
import know_how from "../../img/know_how.png";

const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.container}>
        <div>
          <div>
            <h1>Histórico</h1>
          </div>
          <div>
            <div className={styles.whoami}>
              <div>
                <h3>Quem sou eu?</h3>
              </div>
              <Skill
                description="Sou um profissional que está migrando do setor público para a área
              de desenvolvimento front-end"
                icon="roundedCheck"
                className={styles.skillWrapper}
                color="rgb(198, 208, 227)"
                size="45px"
              />
            </div>
            <div>
              <div>
                <h3>Experiência</h3>
              </div>
              <Skill
                description="Atuei no setor privado nos ramos de telemarketing, usinagem, e também no setor público."
                icon="roundedCheck"
                className={styles.skillWrapper}
                color="rgb(198, 208, 227)"
                size="45px"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={know_how} alt="Partner" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
