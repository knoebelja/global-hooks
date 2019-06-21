import { useState } from "react";

const useWord = () => {
    const [word, setWord] = useState("");

    const clearWord = () => {
        setWord("");
    };

    return { word, setWord, clearWord };
};

export default useWord;
