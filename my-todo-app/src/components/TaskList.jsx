// src/components/TaskList.js
import React, { useState } from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (taskId) => {
    console.log('Pruebas de las buenas');
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="task-list">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Escribe nueva tarea.."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        
        />
        {/* <>{newTask}</> */}
        <button onClick={addTask}>Agregar</button>
      </div>
      <div className="tasks">
        {tasks.map((tarea) => (
          <Task
            // Este nos indica como representar las tareas
            key={tarea.id}
            // Esto nos va a permitir representar los datos al pasarlo por props.
            task={tarea}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Borrar todo
        </button>
      )}
    </div>
  );
};

export default TaskList;
