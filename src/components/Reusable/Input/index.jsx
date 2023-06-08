import React from "react";

import "./styles.css";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="inputContainer">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
