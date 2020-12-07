import React from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import classnames from "classnames";

const Form = () => {
  return (
    <section className={styles.form}>
      <div className={classnames(styles.container, styles.cta)}>
        <h1>Solicite uma Consultoria</h1>
        <form>
          <Input name="Nome" placeholder="Seu nome" className={styles.flex} />
          <Input
            className={styles.inlineFirst}
            type="email"
            name="Email"
            placeholder="email@exemplo.com"
          />
          <Input
            className={styles.inlineSecond}
            name="Empresa"
            placeholder="Sua Empresa"
          />
          <Input
            name="Cargo"
            placeholder="Seu Cargo"
            className={styles.inlineFirst}
          />
          <Input
            name="Telefone de Contato"
            placeholder="(DDD) 9 9999-9999"
            className={styles.inlineSecond}
            pattern="[0-9]"
            title="Apenas números"
          />
          <Input
            className={styles.flex}
            name="Envie-nos sua proposta ou dúvida"
            placeholder="Envie-nos sua proposta ou dúvida"
          />
          <div>
            <button type="submit">Quero falar com um consultor</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
