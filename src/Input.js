import React from "react";

function Input({ fn, name, type, label }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-control"
        ref={fn()}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  label: "Unidefined"
};

export default Input;
