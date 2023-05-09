import React, { useState } from "react";

function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

function TodoList() {
  //state variables for tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    // Logic for adding a new task to the list
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    // Logic for deleting a task from the list
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (index) => { 
    // Logic for marking a task as completed
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✅ ${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />

      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleCompleteTask(index)}>Complete</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
