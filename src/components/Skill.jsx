import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";

const Skill = ({ description, icon, className, color, size }) => {
  const icons = {
    roundedCheck: <RiCheckboxCircleFill color={color} size={size} />,
    check: <FcCheckmark size={size} />,
  };

  return (
    <div className={className}>
      {icons[icon]}
      <p>{description}</p>
    </div>
  );
};

export default Skill;
