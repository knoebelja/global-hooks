import React from "react";

const InputForm = ({ label, value, setValue }) => {
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

export default InputForm;
