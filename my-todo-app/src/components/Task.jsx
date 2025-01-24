// src/components/Task.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Task.css";

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span className="task-text" onClick={() => toggleComplete(task.id)}>
        {task.text}
      </span>
      <div className="task-icons">
        <FontAwesomeIcon
          icon={faCheck}
          className="icon complete-icon"
          onClick={() => toggleComplete(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="icon delete-icon"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
