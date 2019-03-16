import { useStore } from "../store";
import { changeCount } from "../store/actions";

const useCount = () => {
  const [count, setCount] = useStore("count", changeCount);
  const countSetters = {
    increaseCount: () => {
      const increasedCount = count + 1;
      setCount(increasedCount);
    },
    decreaseCount: () => {
      const decreasedCount = count - 1;
      setCount(decreasedCount);
    },
    resetCount: () => {
      setCount(0);
    }
  };
  return [count, countSetters];
};

export default useCount;
