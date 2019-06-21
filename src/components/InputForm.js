import React from "react";

const InputForm = ({ label, value, setValue }) => {
    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <form>
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange} />
        </form>
    );
};

export default InputForm;
