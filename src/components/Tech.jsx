import React from "react";
import Skill from "./Skill";

const Tech = () => {
  return (
    <section className="tech">
      <div className="container">
        <img
          src="https://landen.imgix.net/edmyisgcymym/assets/gt1kjbf6.png?w=1200&h=900&fit=max"
          alt="Technical Knowledges"
          className="image"
        />
        <div>
          <h1>Conhecimentos Técnicos</h1>
          <Skill className="skill" description="JavaScript" icon="check" />
          <Skill className="skill" description="CSS" icon="check" />
          <Skill className="skill" description="HTML" icon="check" />
          <Skill className="skill" description="React" icon="check" />
          <Skill className="skill" description="Redux" icon="check" />
          <Skill className="skill" description="Design Thinking" icon="check" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
