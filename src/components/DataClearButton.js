import React from "react";

import useData from "../hooks/useData";

const DataClearButton = () => {
  const { clearData } = useData();
  return <button onClick={clearData}>Clear Response</button>;
};

export default DataClearButton;
