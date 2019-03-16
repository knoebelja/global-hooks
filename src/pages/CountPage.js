import React from "react";

import useCount from "../hooks/useCount";
import IncreaseCountButton from "../components/IncreaseCountButton";
import DecreaseCountButton from "../components/CountPage/DecreaseCountButton";
import ResetCountButton from "../components/ResetCountButton";

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
