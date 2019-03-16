import React from "react";

import useData from "../hooks/useData";
import GetRequestButton from "../components/GetRequestButton";
import PostRequestButton from "../components/PostRequestButton";
import ClearResponseButton from "../components/ClearResponseButton";

const DataPage = () => {
  const { data } = useData();
  return (
    <div>
      <p>Status: {data.status}</p>
      <p>Url: {data.url}</p>
      <GetRequestButton />
      <PostRequestButton />
      <ClearResponseButton />
    </div>
  );
};

export default DataPage;
