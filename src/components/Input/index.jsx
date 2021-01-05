import React, { forwardRef } from "react";
import Cleave from "cleave.js/react";

const Input = forwardRef(
  ({ id, className, maskOptions, label, textarea, error, ...rest }, ref) => {
    const renderInput = () => {
      const commonProps = { id, ref, ...rest };
      if (textarea) {
        return <textarea {...commonProps}></textarea>;
      }

      if (maskOptions) {
        return <Cleave options={maskOptions} {...commonProps} />;
      }

      return <input {...commonProps} />;
    };
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        {renderInput()}
        {error && <p>{error.message}</p>}
      </div>
    );
  }
);

export default Input;
