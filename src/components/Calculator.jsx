import React, { useState } from "react";

const Calculator = () => {
  const [inputVal, setInputVal] = useState("");
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = () => {
    const result = eval(inputVal);
    setInputVal(result);
  };
  const handleBtn = (e) => {
    setInputVal(inputVal + e);
  };
  return (
    <div
      style={{
        maxWidth: "260px",
        margin: "40px auto",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 50px)",
          gap: "10px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <input type="text" onChange={handleInput} value={inputVal} />
        <button onClick={() => handleBtn("7")}>7</button>
        <button onClick={() => handleBtn("8")}>8</button>
        <button onClick={() => handleBtn("9")}>9</button>
        <button onClick={() => handleBtn("/")}>/</button>
        <button onClick={() => handleBtn("4")}>4</button>
        <button onClick={() => handleBtn("5")}>5</button>
        <button onClick={() => handleBtn("6")}>6</button>
        <button onClick={() => handleBtn("*")}>*</button>
        <button onClick={() => handleBtn("1")}>1</button>
        <button onClick={() => handleBtn("2")}>2</button>
        <button onClick={() => handleBtn("3")}>3</button>
        <button onClick={() => handleBtn("-")}>-</button>
        <button onClick={() => handleBtn("0")}>0</button>
        <button onClick={() => handleBtn("C")}>C</button>
        <button onClick={handleSubmit}>=</button>
        <button onClick={() => handleBtn("+")}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
