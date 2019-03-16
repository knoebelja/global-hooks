import React from "react";

import useWord from "../hooks/useWord";
import InputWordForm from "../components/InputWordForm";
import ClearWordButton from "../components/ClearWordButton";

const WordPage = () => {
  const { word } = useWord();
  return (
    <div>
      <p>Length of Word: {word.length}</p>
      <InputWordForm />
      <ClearWordButton />
    </div>
  );
};

export default WordPage;
