import React from "react";

import InputWordForm from "./InputWordForm";
import WordLengthParagraph from "./WordLengthParagraph";
import ClearWordButton from "./ClearWordButton";

const WordPage = () => {
  return (
    <div>
      <WordLengthParagraph />
      <InputWordForm />
      <ClearWordButton />
    </div>
  );
};

export default WordPage;
