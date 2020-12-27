import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import Cleave from "cleave.js/react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <h1>Solicite uma Consultoria</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            placeholder="Seu nome"
            className={styles.flex}
            ref={register}
          />
          <Input
            className={styles.inlineFirst}
            type="email"
            name="Email"
            placeholder="email@exemplo.com"
            ref={register}
          />
          <Input
            className={styles.inlineSecond}
            name="company"
            ref={register}
            placeholder="Sua Empresa"
          />
          <Input
            name="job"
            placeholder="Seu Cargo"
            ref={register}
            className={styles.inlineFirst}
          />
          <div className={styles.inlineSecond}>
            <label>Telefone de contato</label>
            <Cleave
              ref={register}
              name="phone"
              placeholder="(99) 99999-9999"
              title="Apenas números"
              options={{
                numericOnly: true,
                blocks: [0, 2, 0, 5, 4],
                delimiters: ["(", ")", " ", "-"],
              }}
            />
          </div>
          <div className={styles.flex}>
            <label htmlFor="proposal">Envie-nos sua proposta ou dúvida</label>
            <textarea
              // required
              id="proposal"
              name="proposal"
              rows="5"
              ref={register}
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
