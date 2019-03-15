import { useGlobalState, useGlobalDispatch } from "../store";
import { changeWord } from "../store/actions";

const useWord = () => {
  const word = useGlobalState("word");
  const dispatch = useGlobalDispatch();
  const wordDispatchers = {
    changeWord: newWord => {
      dispatch(changeWord(newWord));
    },
    clearWord: () => {
      dispatch(changeWord(""));
    }
  };
  return [word, wordDispatchers];
};

export default useWord;
