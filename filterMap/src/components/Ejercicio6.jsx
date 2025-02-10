// 6. Filtrar elementos por categoría
// Dado un array de productos con una categoría, usa map para mostrarlos.
// Agrega un selector que permita filtrar por categoría.

import React, { useState } from 'react';

const Ejercicio6 = () => {

    const peliculas = [
        { titulo: "El señor de los anillos", categoria: "Fantasía" },
        { titulo: "Harry Potter", categoria: "Fantasía" },
        { titulo: "El Padrino", categoria: "Drama" },
        { titulo: "El lobo de Wall Street", categoria: "Drama" },
        { titulo: "El rey león", categoria: "Animación" },
        { titulo: "Toy Story", categoria: "Animación" }
    ];

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');


    const peliculasFiltradas = categoriaSeleccionada 
        ? peliculas.filter(pelicula => pelicula.categoria === categoriaSeleccionada) 
        : peliculas;

    const categorias = [...new Set(peliculas.map(pelicula => pelicula.categoria))];

    return (
        <div>
            <h2>Lista de películas</h2>
            <div>
                <h4>Filtro por categoría</h4>
                <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
                    {categorias.map((categoria, index) => (
                        <li key={index}>
                            <button onClick={() => setCategoriaSeleccionada(categoria)}>{categoria}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul>
                {peliculasFiltradas.map((pelicula, index) => (
                    <li key={index}>
                        <b>Categoría: </b> {pelicula.categoria}
                        <br />
                        <b>Título: </b> {pelicula.titulo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ejercicio6;

