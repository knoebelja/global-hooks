import React from "react";

import useCount from "../../hooks/useCount";
import IncreaseCountButton from "./IncreaseCountButton";
import DecreaseCountButton from "./DecreaseCountButton";
import ResetCountButton from "./ResetCountButton";

const CountPage = () => {
  const { count } = useCount();
  return (
    <div>
      <p>Nothing to count here: {count}</p>
      <IncreaseCountButton />
      <DecreaseCountButton />
      <ResetCountButton />
    </div>
  );
};

export default CountPage;
