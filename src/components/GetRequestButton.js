import React from "react";

import useData from "../hooks/useData";

const GetRequestButton = () => {
  const { fetchGetResponse } = useData();
  return <button onClick={fetchGetResponse}>Get Request</button>;
};

export default GetRequestButton;
