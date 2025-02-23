"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2 data-testid="counter">Counter: {count}</h2>
      <button type="button" onClick={increment}>
        Add
      </button>
    </div>
  );
};

export default Counter;
