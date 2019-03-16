import React from "react";

import useCount from "../hooks/useCount";

const DecreaseCountButton = () => {
  const { decreaseCount } = useCount();
  return <button onClick={decreaseCount}>Decrease Count</button>;
};

export default DecreaseCountButton;
