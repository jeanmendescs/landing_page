import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <section className="form">
      <div className="container form-container">
        <h1>Solicite uma Consultoria</h1>
        <form>
          <Input name="Nome" placeholder="Seu nome" className="div-flex" />
          <Input
            className="div-inline-first"
            type="email"
            name="Email"
            placeholder="email@exemplo.com"
          />
          <Input
            className="div-inline-second"
            name="Empresa"
            placeholder="Sua Empresa"
          />
          <Input
            name="Cargo"
            placeholder="Seu Cargo"
            className="div-inline-first"
          />
          <Input
            name="Telefone de Contato"
            placeholder="(DDD) 9 9999-9999"
            className="div-inline-second"
            pattern="[0-9]"
            title="Apenas números"
          />
          <Input
            className="div-flex"
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
