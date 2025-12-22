import { use, useState } from "react";
import "./App.css";
import Input from "./input";

function App() {
  const [todolist, settodolist] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;
    settodolist([...todolist, input]);
    setInput("");
  };
  console.log(settodolist);

  const type = (event) => {
    let value = event.target.value;
    setInput(value);
  };

  return (
    <>
      <h1>{input}</h1>
      <input
        value={input}
        type="text"
        placeholder="Enter todo list"
        onChange={type}
      ></input>
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todolist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// if (showCounter) {
//   hello;
// } else {
//   bye;
// }

// 3.push,pull,1.add,2.commit(git hub )
//boot.dev

export default App;
