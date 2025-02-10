// 12. Aplicar descuentos dinámicos
// Dado un array de productos con precios, usa map para aplicar un 10% de descuento en productos de más de $100.


import React from 'react';
import './Ejercicio12.css';

const Ejercicio12 = () => {
    const productos = [
        { nombre: "Camisa", precio: 50 },
        { nombre: "Pantalón", precio: 150 },
        { nombre: "Zapatos", precio: 200 }
    ];

    return (
        <div className="contenedor">
            <header>
                <h2>Ejercicio con Descuentos Aplicados</h2>
            </header>
            <section>
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>
                            {producto.nombre}: $
                            {producto.precio > 100
                                ? (producto.precio * 0.9).toFixed(2)
                                : producto.precio.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Ejercicio12;
