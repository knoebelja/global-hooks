import { useStore } from "../store";
import { changeWord } from "../store/actions";

const useWord = () => {
  const [word, setWord] = useStore("word", changeWord);
  return {
    word,
    changeWord: newWord => {
      setWord(newWord);
    },
    clearWord: () => {
      setWord("");
    }
  };
};

export default useWord;
