import { useStore } from "../store";
import { changeWord } from "../store/actions";

const useWord = () => {
  const [word, setWord] = useStore("word", changeWord);
  const wordSetters = {
    changeWord: newWord => {
      setWord(newWord);
    },
    clearWord: () => {
      setWord("");
    }
  };
  return [word, wordSetters];
};

export default useWord;
