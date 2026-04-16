import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdColorWand } from "react-icons/io";
function Todolist() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) return;

    setTodoList([...todoList, input]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <>
      <input
        value={input}
        placeholder="Enter todo list"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>
              <MdDelete />
              <IoMdColorWand />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todolist;
