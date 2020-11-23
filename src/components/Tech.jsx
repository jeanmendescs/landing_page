import React from "react";
import Skill from "./Skill";

const Tech = () => {
  return (
    <section className="tech">
      <div>
        <img
          src="https://landen.imgix.net/edmyisgcymym/assets/gt1kjbf6.png?w=1200&h=900&fit=max"
          alt="Technical Knowledges"
        />
      </div>
      <div>
        <h1>Conhecimentos Técnicos</h1>
        <div>
          <Skill description="JavaScript" icon="check" />
        </div>
        <div>
          <Skill description="CSS" icon="check" />
        </div>
        <div>
          <Skill description="HTML" icon="check" />
        </div>
        <div>
          <Skill description="React" icon="check" />
        </div>
        <div>
          <Skill description="Redux" icon="check" />
        </div>
        <div>
          <Skill description="Design Thinking" icon="check" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
