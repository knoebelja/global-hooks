import React from "react";

import useWord from "../hooks/useWord";

const WordClearButton = () => {
  const { clearWord } = useWord();
  return <button onClick={clearWord}>Clear Word</button>;
};

export default WordClearButton;
