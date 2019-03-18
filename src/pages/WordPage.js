import React from "react";

import useWord from "../hooks/useWord";
import WordInputForm from "../components/WordInputForm";
import WordClearButton from "../components/WordClearButton";

const WordPage = () => {
  const { word } = useWord();
  return (
    <div>
      <p>Length of Word: {word.length}</p>
      <WordInputForm />
      <WordClearButton />
    </div>
  );
};

export default WordPage;
