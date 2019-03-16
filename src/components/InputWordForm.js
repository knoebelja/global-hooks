import React from "react";

import useWord from "../hooks/useWord";

const InputWordForm = () => {
  const { word, changeWord } = useWord();
  const handleChange = e => {
    changeWord(e.target.value);
  };
  return (
    <form>
      <label>Word:</label>
      <input type="text" value={word} onChange={handleChange} />
    </form>
  );
};

export default InputWordForm;
