import React from "react";

import "./styles.css";

const Input = ({ label, type, name }) => {
  return (
    <div className="inputContainer">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input id={name} className="input" type={type} name={name} />
      <p className="error">Error</p>
    </div>
  );
};

export default Input;
