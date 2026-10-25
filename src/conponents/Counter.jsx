"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-3xl">Counter</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment: Add {count}
      </button>
    </div>
  );
};

export default Counter;
