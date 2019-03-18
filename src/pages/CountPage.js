import React from "react";

import useCount from "../hooks/useCount";
import CountIncreaseButton from "../components/CountIncreaseButton";
import CountDecreaseButton from "../components/CountDecreaseButton";
import CountResetButton from "../components/CountResetButton";

const CountPage = () => {
  const { count } = useCount();
  return (
    <div>
      <p>Nothing to count here: {count}</p>
      <CountIncreaseButton />
      <CountDecreaseButton />
      <CountResetButton />
    </div>
  );
};

export default CountPage;
