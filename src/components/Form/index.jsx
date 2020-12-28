import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Classnames from "classnames";

const Form = () => {
  const addressSchema = yup.object().shape({
    email: yup.string().email().required(),
    phone: yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    }),
  });

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(addressSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <h1>Solicite uma Consultoria</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.name}
            name="name"
            label="Nome"
            id="name"
            placeholder="Seu nome"
            className={Classnames(styles.flex, styles.flexHeight)}
            ref={register}
          />
          <Input
            error={errors.email}
            className={Classnames(styles.inlineFirst, styles.flexHeight)}
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="email@exemplo.com"
            ref={register}
          />
          <Input
            error={errors.company}
            className={Classnames(styles.inlineSecond, styles.flexHeight)}
            label="Empresa"
            id="company"
            name="company"
            ref={register}
            placeholder="Sua Empresa"
          />
          <Input
            error={errors.job}
            id="job"
            label="Cargo"
            name="job"
            placeholder="Seu Cargo"
            ref={register}
            className={Classnames(styles.inlineFirst, styles.flexHeight)}
          />
          <Controller
            defaultValue=""
            name="phone"
            control={control}
            as={
              <Input
                error={errors.phone}
                className={Classnames(styles.inlineSecond, styles.flexHeight)}
                label="Telefone de contato"
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
            }
          />
          <Input
            error={errors.proposal}
            id="proposal"
            label="Envie-nos sua proposta ou dúvida"
            name="proposal"
            ref={register}
            cols="33"
            rows="5"
            className={Classnames(styles.flex, styles.proposal)}
            textarea
          />
          <div className={styles.submit}>
            <button className={styles.btnSubmit} value="submit" type="submit">
              Quero falar com um consultor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
