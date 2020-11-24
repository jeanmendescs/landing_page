import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";

const Skill = ({ description, icon, className }) => {
  const icons = {
    roundedCheck: <RiCheckboxCircleFill />,
    check: <FcCheckmark />,
  };

  return (
    <div className={className}>
      {icons[icon]}
      <p>{description}</p>
    </div>
  );
};

export default Skill;
