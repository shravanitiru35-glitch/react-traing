import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput(""); // Clear input
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleDelete(index)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;