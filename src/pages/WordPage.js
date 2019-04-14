import React from "react";

import InputForm from "../components/InputForm";
import Button from "../components/Button";
import { useStore } from "../store";

const WordPage = () => {
  const [word, setWord] = useStore("word");
  const clearWord = () => {
    setWord("");
  };
  return (
    <div>
      <p>Length of Word: {word.length}</p>
      <InputForm label="Word" value={word} setValue={setWord} />
      <Button label="Clear" onClick={clearWord} />
    </div>
  );
};

export default WordPage;
