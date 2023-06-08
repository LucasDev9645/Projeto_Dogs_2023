import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function onChange(e) {
    if (error) validate(e.target.value);
    setValue(e.target.value);
  }

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha o campo.");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
