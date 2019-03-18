import React from "react";

import useData from "../hooks/useData";

const DataGetButton = () => {
  const { getData } = useData();
  return <button onClick={getData}>Get Data</button>;
};

export default DataGetButton;
