import React, { useState, useEffect } from "react";
import Ejercicio5 from "./components/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9";
import Ejercicio10 from "./components/Ejercicio10";
import Ejercicio11 from "./components/Ejercicio11";
import Ejercicio12 from "./components/Ejercicio12";
import Ejercicio13 from "./components/Ejercicio13";
import Ejercicio14 from "./components/Ejercicio14";
import Ejercicio15 from "./components/Ejercicio15";
import Ejercicio16 from "./components/Ejercicio16";
import Ejercicio17 from "./components/Ejercicio17";
import Ejercicio18 from "./components/Ejercicio18";
import Ejercicio19 from "./components/Ejercicio19";
import Ejercicio20 from "./components/Ejercicio20";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
  },
  listItem: {
    backgroundColor: "white",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
  },
  button: {
    padding: "8px 12px",
    margin: "5px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

// 1. Lista de Usuarios
const UserList = () => {
  const users = [
    { name: "Ana", age: 15 },
    { name: "Luis", age: 22 },
    { name: "Carlos", age: 30 },
    { name: "Sofía", age: 17 },
  ];
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Lista de Usuarios</h3>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              color: user.age < 18 ? "red" : "black",
            }}
          >
            {user.name} - {user.age} años
          </li>
        ))}
      </ul>
    </div>
  );
};

// 2. Filtro de búsqueda
const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const products = ["Laptop", "Teclado", "Mouse", "Monitor", "Audífonos"];
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Filtro de búsqueda</h3>
      <input
        type="text"
        placeholder="Buscar producto..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index} style={styles.listItem}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

// 3. Contador en una lista
const ProductCounter = () => {
  const [cart, setCart] = useState({});
  const products = ["Laptop", "Mouse", "Teclado", "Monitor"];

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product]: (prevCart[product] || 0) + 1,
    }));
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Carrito de compras</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={styles.listItem}>
            {product} - {cart[product] || 0} en carrito
            <button style={styles.button} onClick={() => addToCart(product)}>
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* <UserList />
      <SearchFilter />
      <ProductCounter /> */}
      {/* <Ejercicio5 />
      <Ejercicio6 /> */}
      {/* <Ejercicio7 /> */}
      {/* <Ejercicio8 /> */}
      {/* <Ejercicio9 /> */}
      {/* <Ejercicio10/> */}
      {/* <Ejercicio11 /> */}
      {/* <Ejercicio12 /> */}
      {/* <Ejercicio13 /> */}
      {/* <Ejercicio14 /> */}
      {/* <Ejercicio15 /> */}
      {/* <Ejercicio16 /> */}
      {/* <Ejercicio17 /> */}
      {/* <Ejercicio18 /> */}
      {/* <Ejercicio19 /> */}
      <Ejercicio20 />
    </div>
  );
};

export default App;
