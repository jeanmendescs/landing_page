import React, { Fragment } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";

const Skill = ({ description, icon }) => {
  const icons = {
    roundedCheck: <RiCheckboxCircleFill />,
    check: <FcCheckmark />,
  };

  return (
    <Fragment>
      {icons[icon]}
      <p>{description}</p>
    </Fragment>
  );
};

export default Skill;
