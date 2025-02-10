import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartPlusFill, BsFillTrashFill } from "react-icons/bs";
import { FaLaptop, FaTshirt, FaGem, FaFemale } from "react-icons/fa"; // Iconos de categorías

const Ejercicio10 = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  // Filtrar productos por precio, categoría y búsqueda
  const productosFiltrados = productos.filter(
    (prod) =>
      prod.price > 50 &&
      (categoriaSeleccionada === "all" || prod.category === categoriaSeleccionada) &&
      prod.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.price);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    setTotal(total - nuevoCarrito[index].price);
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  // Iconos y colores por categoría
  const categorias = {
    "electronics": { color: "#3498db", icon: <FaLaptop /> },
    "jewelery": { color: "#e74c3c", icon: <FaGem /> },
    "men's clothing": { color: "#2ecc71", icon: <FaTshirt /> },
    "women's clothing": { color: "#9b59b6", icon: <FaFemale /> },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🛍️ Tienda Online de Karla</h2>

      {/* Buscador y filtros */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "8px",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="all">Todas las categorías</option>
          {Object.keys(categorias).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Carrito */}
      <div
        style={{
          padding: "10px",
          background: "#f8f9fa",
          borderRadius: "10px",
          marginBottom: "15px",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>
          <AiOutlineShoppingCart /> Carrito: {carrito.length} productos - Total: ${total.toFixed(2)}
        </h3>
        {carrito.length > 0 && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {carrito.map((item, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0" }}>
                <span>{item.title}</span>
                <button
                  onClick={() => eliminarDelCarrito(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <BsFillTrashFill />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lista de productos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {productosFiltrados.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: `3px solid ${categorias[producto.category]?.color || "#777"}`,
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={producto.image}
              alt={producto.title}
              style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "10px" }}
            />
            <h4>{producto.title}</h4>
            <p style={{ fontWeight: "bold", color: "#333" }}>${producto.price}</p>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: categorias[producto.category]?.color || "#777",
                color: "#fff",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {categorias[producto.category]?.icon} {producto.category}
            </span>
            <br />
            <button
              onClick={() => agregarAlCarrito(producto)}
              style={{
                marginTop: "10px",
                padding: "8px",
                border: "none",
                background: "#28a745",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <BsFillCartPlusFill /> Agregar
            </button>
          </div>
        ))}
      </div>

      {/* Contador de productos filtrados */}
      <h4 style={{ marginTop: "20px", textAlign: "center" }}>
        Productos mostrados: {productosFiltrados.length}
      </h4>
    </div>
  );
};

export default Ejercicio10;
