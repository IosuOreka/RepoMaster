// 15. Alternar entre vistas filtradas
// Crea un botón "Ver completadas / Ver pendientes" que alterne entre tareas completadas y pendientes.
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const Ejercicio15 = () => {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") return;
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const cambiarFiltro = () => {
    setFiltro(filtro === "todas" ? "completadas" : filtro === "completadas" ? "pendientes" : "todas");
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;
    return true;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lista de Tareas</h2>
      <section>
        <h4>Agregar Tarea</h4>
        <form onSubmit={agregarTarea} style={styles.form}>
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}><FaPlus /></button>
        </form>
      </section>
      <section>
        <h4>Ver Tareas</h4>
        <button onClick={cambiarFiltro} style={styles.toggleButton}>
          {filtro === "todas" ? "Ver Completadas" : filtro === "completadas" ? "Ver Pendientes" : "Ver Todas"}
        </button>
        <ul style={styles.list}>
          {tareasFiltradas.map((tarea, index) => (
            <li key={index} style={styles.listItem}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => toggleCompletada(index)}
              />
              <span style={tarea.completada ? styles.completed : {}}>{tarea.texto}</span>
              <button onClick={() => eliminarTarea(index)} style={styles.deleteButton}><FaTimes /></button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  title: {
    color: "#333",
  },
  form: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggleButton: {
    marginBottom: "10px",
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px 0",
  },
  completed: {
    textDecoration: "line-through",
    color: "gray",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
  },
};

export default Ejercicio15;
