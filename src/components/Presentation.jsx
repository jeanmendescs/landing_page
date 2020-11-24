import React from "react";
import Skill from "./Skill";

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation-text">
        <div>
          <h1>Olá, sou Jean Carlos!</h1>
        </div>
        <div>
          <div className="whoami">
            <div>
              <h3>Quem sou eu?</h3>
            </div>
            <Skill
              description="Sou um profissional que está migrando do setor público para a área
              de desenvolvimento front-end"
              icon="roundedCheck"
              className="skill-wrapper"
            />
          </div>
          <div>
            <div>
              <h3>Experiência</h3>
            </div>
            <Skill
              description="Atuei no setor privado nos ramos de telemarketing, usinagem, e também no setor público."
              icon="roundedCheck"
              className="skill-wrapper"
            />
          </div>
        </div>
      </div>
      <div className="presentation-img">
        <img
          src="https://landen.imgix.net/edmyisgcymym/assets/aqjx17xs.png?w=1200&h=900&fit=max"
          alt="Partner"
        />
      </div>
    </section>
  );
};

export default Presentation;
