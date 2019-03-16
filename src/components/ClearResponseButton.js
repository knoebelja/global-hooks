import React from "react";

import useData from "../hooks/useData";

const ClearResponseButton = () => {
  const { clearData } = useData();
  return <button onClick={clearData}>Clear Response</button>;
};

export default ClearResponseButton;
