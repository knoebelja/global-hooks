import React from "react";

import useWord from "../hooks/useWord";

const WordInputButton = () => {
  const { word, setWord } = useWord();
  const handleChange = e => {
    setWord(e.target.value);
  };
  return (
    <form>
      <label>Word</label>
      <input type="text" value={word} onChange={handleChange} />
    </form>
  );
};

export default WordInputButton;
