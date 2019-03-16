import React from "react";

import useWord from "../../hooks/useWord";

const WordLengthParagraph = () => {
  const { word } = useWord();
  return <p>Length of Word: {word.length}</p>;
};

export default WordLengthParagraph;
