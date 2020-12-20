import React from "react";
import Skill from "../Skill";
import styles from "./styles.module.scss";
import whoami from "../../img/whoami.png";

const Tech = () => {
  return (
    <section className={styles.tech}>
      <div className={styles.container}>
        <img src={whoami} alt="Technical Knowledges" className={styles.image} />
        <div>
          <h1>Conhecimentos Técnicos</h1>
          <Skill
            className={styles.skill}
            description="JavaScript"
            icon="check"
            size="20px"
          />
          <Skill
            className={styles.skill}
            description="CSS"
            icon="check"
            size="20px"
          />
          <Skill
            className={styles.skill}
            description="HTML"
            icon="check"
            size="20px"
          />
          <Skill
            className={styles.skill}
            description="React"
            icon="check"
            size="20px"
          />
          <Skill
            className={styles.skill}
            description="Redux"
            icon="check"
            size="20px"
          />
          <Skill
            className={styles.skill}
            description="Design Thinking"
            icon="check"
            size="20px"
          />
        </div>
      </div>
    </section>
  );
};

export default Tech;
