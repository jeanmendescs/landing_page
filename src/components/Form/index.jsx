import React from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import InputPhone from "../InputPhone";

const Form = () => {
  return (
    <section className={styles.form}>
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
          <InputPhone
            name="Telefone de Contato"
            className={styles.inlineSecond}
            title="Apenas números"
            placeholder="(99) 99999-9999"
          />
          <div className={styles.flex}>
            <label htmlFor="proposal">Envie-nos sua proposta ou dúvida</label>
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
