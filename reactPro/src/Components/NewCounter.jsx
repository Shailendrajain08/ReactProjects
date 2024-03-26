import { useState } from "react";

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [incrementByValue, setIncrementByValue] = useState(1);

  const handleInc = () => {
    setCount(count + incrementByValue);
  };

  const handleDec = () => {
    setCount(count - incrementByValue);
  };

  const handleIncrementBy = () => {
    setIncrementByValue(incrementByValue + 1)
  }

  const handleIncrementByValue = () => {
    setIncrementByValue(incrementByValue - 1)
  }

  return (
    <div>
      <h1>Counter Value is: {count}</h1>

      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>decrement</button>

      <h1>We are Incrementing Value by: {incrementByValue}</h1>

      <button onClick={handleIncrementBy}>Increase Increment</button>
      <button onClick={handleIncrementByValue}>Decrease Increment</button>
    </div>
  );
}
