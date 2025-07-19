import React, { useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increament":
        return { count: state.count + 1 };
      case "decreament":
        return { count: state.count + 1 };
      default:
        return state;
    }
  };
  const [initialstate, dispach] = useReducer(reducer, { count: 0 });
  return <div>Counter
    {initialstate.count}
    <button onClick={() =>{
        dispach({type : "increament"})
    } }>+</button> 
    <button onClick={() =>{
        dispach({type : "increament"})
    } }>-</button>
  </div>;
};

export default Counter;
