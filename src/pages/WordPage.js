import React from "react";

import useWord from "../hooks/useWord";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

const WordPage = () => {
    const { word, setWord, clearWord } = useWord();
    return (
        <div>
            <p>Length of Word: {word.length}</p>
            <InputForm label="Word" value={word} setValue={setWord} />
            <Button label="Clear" onClick={clearWord} />
        </div>
    );
};

export default WordPage;
