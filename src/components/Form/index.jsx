import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
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
            label="Nome"
            id="name"
            placeholder="Seu nome"
            className={styles.flex}
            ref={register}
          />
          <Input
            className={styles.inlineFirst}
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            ref={register}
          />
          <Input
            className={styles.inlineSecond}
            label="Empresa"
            id="company"
            name="company"
            ref={register}
            placeholder="Sua Empresa"
          />
          <Input
            id="job"
            label="Cargo"
            name="job"
            placeholder="Seu Cargo"
            ref={register}
            className={styles.inlineFirst}
          />
          <Input
            className={styles.inlineSecond}
            label="Telefone de contato"
            ref={register}
            id="phone"
            name="phone"
            placeholder="(99) 99999-9999"
            title="Apenas números"
            maskOptions={{
              numericOnly: true,
              blocks: [0, 2, 0, 5, 4],
              delimiters: ["(", ")", " ", "-"],
            }}
          />
          <Input
            id="proposal"
            label="Envie-nos sua proposta ou dúvida"
            name="proposal"
            ref={register}
            cols="33"
            rows="5"
            className={styles.flex}
            textarea
          />
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
