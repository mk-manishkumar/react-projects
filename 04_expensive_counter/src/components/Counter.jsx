import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ value }) => {
  // Destructure the 'value' prop
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount(count - value);
  };

  return (
    <div className="wrap">
      <h3>Jump by {value}</h3>
      <div className="countValue">
        <h2>Count Value : {count}</h2>
      </div>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
