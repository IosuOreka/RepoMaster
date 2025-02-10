// 7. Agregar elementos dinámicamente
// Usa un useState para almacenar una lista de nombres.
// Usa un input y un botón para agregar nuevos nombres a la lista.

import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    background: "linear-gradient(135deg, #007bff, #00d4ff)",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    color: "black",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#ff5733",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    background: "white",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
    cursor: "grab",
  },
};

const SortableItem = ({ id, nombre }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    ...styles.listItem,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {nombre}
    </li>
  );
};

const Ejercicio7 = () => {
  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");

  const handleAgregarNombre = () => {
    if (nombre.trim() !== "" && !nombres.includes(nombre)) {
      setNombres([...nombres, nombre]);
      setNombre("");
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = nombres.indexOf(active.id);
      const newIndex = nombres.indexOf(over.id);
      setNombres(arrayMove(nombres, oldIndex, newIndex));
    }
  };

  return (
    <div style={styles.container}>
      <h2>Lista Dinámica</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          placeholder="Escribe un nombre..."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAgregarNombre()}
        />
        <button style={styles.button} onClick={handleAgregarNombre}>
          Agregar
        </button>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={nombres} strategy={verticalListSortingStrategy}>
          <ul style={styles.list}>
            {nombres.map((nombre) => (
              <SortableItem key={nombre} id={nombre} nombre={nombre} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Ejercicio7;
