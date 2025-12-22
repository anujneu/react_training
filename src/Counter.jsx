import React from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const reset = () => {};

  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{state}</h1>
      <button onClick={decrement}>-</button>
      <button conclick={reset}>reset</button>
    </>
  );
};
export default Counter;
