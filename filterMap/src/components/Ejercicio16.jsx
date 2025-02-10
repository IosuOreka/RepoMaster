// 16. Mostrar datos en tarjetas con estilos dinámicos
// Dado un array de productos, usa map para mostrarlos en tarjetas.
import { useState } from 'react';
import kratos from '../assets/kratos.jpg';
import placeholder from '../assets/placeholder.jpeg';

const Ejercicio16 = () => {
  const [productos, setProductos] = useState([
    { titulo: "God of War", precio: 50, imagen: kratos },
    { titulo: "The Last of Us", precio: 40, imagen: kratos },
    { titulo: "Uncharted 4", precio: 30, imagen: kratos },
    { titulo: "Spiderman", precio: 20, imagen: kratos },
    { titulo: "Super Mario Odyssey", precio: 10, imagen: kratos }
  ]);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)', 
      minHeight: '100vh', 
      padding: '30px',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{
          fontSize: '48px', 
          color: '#fff', 
          fontWeight: '700', 
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Productos</h1>
        <h3 style={{
          fontSize: '22px', 
          color: '#fff', 
          fontWeight: '400'
        }}>Grupo de productos mostrados por tarjetas</h3>
      </header>

      <ul style={{
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
      }}>
        {productos.map((producto, index) => (
          <li key={index} style={{
            width: '250px', 
            padding: '20px', 
            borderRadius: '12px', 
            backgroundColor: '#fff', 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#333', 
                marginBottom: '10px'
              }}>{producto.titulo}</h2>
              <p style={{
                fontSize: '18px', 
                fontWeight: '500', 
                color: '#ff6f61', 
                marginBottom: '15px'
              }}>${producto.precio.toFixed(2)}</p>
              <img 
                src={producto.imagen || placeholder} 
                alt={producto.titulo} 
                style={{
                  width: '100%', 
                  borderRadius: '10px',
                  height: 'auto', 
                  objectFit: 'cover', 
                  marginBottom: '15px'
                }} 
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio16;
