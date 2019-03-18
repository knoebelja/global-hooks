import React from "react";

import useCount from "../hooks/useCount";

const CountIncreaseButton = () => {
  const { increaseCount } = useCount();
  return <button onClick={increaseCount}>Increase Count</button>;
};

export default CountIncreaseButton;
