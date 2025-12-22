import { useState } from "react";
const Input = () => {
  const [input, setInput] = useState("");

  const type = (event) => {
    let value = event.target.value;
    setInput(value);
  };
  const reset = () => {
    let value = "";
    setInput(value);
  };

  return (
    <>
      <h1>{input}</h1>
      <input type="text" onChange={type}></input>
      <button onClick={reset} id="reset">
        Reset
      </button>
    </>
  );
};
export default Input;
