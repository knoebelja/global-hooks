import React from "react";

import useData from "../hooks/useData";

const DataPostButton = () => {
  const { postData } = useData();
  return <button onClick={postData}>Post Data</button>;
};

export default DataPostButton;
