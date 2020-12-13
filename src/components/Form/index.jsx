import React from "react";
import Input from "../Input";
import styles from "./styles.module.scss";

const Form = () => {
  return (
    <section id="form" className={styles.form}>
      <div className={styles.container}>
        <h1>Solicite uma Consultoria</h1>
        <form>
          <Input name="Nome" placeholder="Seu nome" className={styles.flex} />
          <Input
            className={styles.inlineFirst}
            type="email"
            name="Email"
            placeholder="email@exemplo.com"
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
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
          <div className={styles.flex}>
            <label for="proposal">Envie-nos sua proposta ou dúvida</label>
            <textarea
              required
              id="proposal"
              name="proposal"
              rows="5"
              cols="33"
            ></textarea>
          </div>
          <div>
            <button value="submit" type="submit">
              Quero falar com um consultor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
