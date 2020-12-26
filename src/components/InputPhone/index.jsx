import React, { useState } from "react";
import { mask, unMask } from "remask";

const InputPhone = ({ className, name, placeholder, type, title }) => {
  const [value, setValue] = useState("");

  const onHandleChange = (e) => {
    const originalValue = unMask(e.target.value);
    const maskedValue = mask(originalValue, ["(99) 99999-9999"]);
    setValue(maskedValue);
  };

  return (
    <div className={className}>
      <label>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        title={title}
        required
        onChange={onHandleChange}
        value={value}
      />
    </div>
  );
};

export default InputPhone;
