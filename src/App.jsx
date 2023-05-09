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

    </div>
  );
}

export default App;
