import React from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import classnames from "classnames";

const Form = () => {
  return (
    <section className={styles.form}>
      <div className={classnames(styles.container, styles.form_container)}>
        <h1>Solicite uma Consultoria</h1>
        <form>
          <Input
            name="Nome"
            placeholder="Seu nome"
            className={styles.container_flex}
          />
          <Input
            className={styles.container_inline_first}
            type="email"
            name="Email"
            placeholder="email@exemplo.com"
          />
          <Input
            className={styles.container_inline_second}
            name="Empresa"
            placeholder="Sua Empresa"
          />
          <Input
            name="Cargo"
            placeholder="Seu Cargo"
            className={styles.container_inline_first}
          />
          <Input
            name="Telefone de Contato"
            placeholder="(DDD) 9 9999-9999"
            className={styles.container_inline_second}
            pattern="[0-9]"
            title="Apenas números"
          />
          <Input
            className={styles.container_flex}
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
