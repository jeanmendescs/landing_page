import React, { forwardRef } from "react";

const Input = forwardRef(({ className, name, ...rest }, ref) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} ref={ref} {...rest} />
    </div>
  );
});

export default Input;
