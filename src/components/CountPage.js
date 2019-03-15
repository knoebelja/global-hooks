import React from "react";

import useCount from "../hooks/useCount";

const CountPage = () => {
  const [count, countDispatchers] = useCount();
  const { increaseCount, decreaseCount, resetCount } = countDispatchers;
  return (
    <div>
      <p>Nothing to count here: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default CountPage;
