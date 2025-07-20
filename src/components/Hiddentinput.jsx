import React, { useState } from "react";

const Hiddentinput = () => {
  const [input, setInput] = useState(true);
  const toggleInput = () => {
    setInput(input === true ? false : true);
  };
  return (
    <div>
      Hiddentinput
      <button
        onClick={toggleInput}
        style={{
          display: input === true ? "block" : "none",
        }}
      >
        🔍
      </button>
      <input type="text" style={{
        display: input === true ? "none" : "block"
      }} onClick={toggleInput} />
    </div>
  );
};

export default Hiddentinput;
