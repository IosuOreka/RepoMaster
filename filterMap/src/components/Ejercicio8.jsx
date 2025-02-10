// 8. Eliminar elementos de una lista
// Dado un array de tareas, usa map para mostrarlas con un botón "Eliminar".
// Usa filter para quitar la tarea cuando se presiona el botón.

import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai"; // Ícono de eliminar
import "./Ejercicio8.css"; // Importamos el archivo de estilos

const Ejercicio8 = () => {
  const data = ["📖 Leer", "📚 Estudiar", "🏋️ Hacer ejercicio", "🍽️ Comer", "😴 Dormir"];
  const [tareas, setTareas] = useState(data);

  const handleEliminarTarea = (tareaAEliminar) => {
    setTareas(tareas.filter((tarea) => tarea !== tareaAEliminar));
  };

  return (
    <div className="container">
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea">
            <span>{tarea}</span>
            <button className="eliminar" onClick={() => handleEliminarTarea(tarea)}>
              <AiOutlineDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio8;
