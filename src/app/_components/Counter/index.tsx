"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2 data-testid="counter">Counter: {count}</h2>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
