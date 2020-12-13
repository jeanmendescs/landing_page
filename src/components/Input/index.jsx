import React from "react";

const Input = ({ className, name, placeholder, type, pattern, title }) => {
  return (
    <div className={className}>
      <label>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        required
      />
    </div>
  );
};

export default Input;
