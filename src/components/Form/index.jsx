import React from "react";
import styles from "./styles.module.scss";
import Input from "../Input";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Classnames from "classnames";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const addressSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    phone: yup
      .string()
      .required("Campo obrigatório")
      .length(15, "Telefone inválido"),
    name: yup.string().required("Campo obrigatório"),
    proposal: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const toastNotification = (data) => {
    console.log(data);
    if (data) {
      toast.configure();
      toast.success("Dados enviados com sucesso!");
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toastNotification(data);
  };

  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <h1>Solicite uma Consultoria</h1>
        <form
          action="https://formsubmit.co/coaster_mendes@hotmail.com"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            placeholder="exemplo@exemplo.com"
            ref={register}
            title="exemplo@exemplo.com"
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
          <button className={styles.btnSubmit} value="submit" type="submit">
            Quero falar com um consultor
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
