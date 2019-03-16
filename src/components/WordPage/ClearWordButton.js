import React from "react";

import useWord from "../../hooks/useWord";

const ClearWordButton = () => {
  const { clearWord } = useWord();
  return <button onClick={clearWord}>Clear Word</button>;
};

export default ClearWordButton;
