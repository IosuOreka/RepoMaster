// 14. Filtrar por múltiples criterios
// Dado un array de películas con un género y una calificación,
//  permite filtrar por ambos criterios al mismo tiempo.
import React, { useState } from "react";
import './Ejercicio14.css';

// Lista de películas reales con categorías y calificaciones
const peliculasReales = [
  { id: 1, title: "Mad Max: Fury Road", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/2082093/pexels-photo-2082093.jpeg" },
  { id: 2, title: "John Wick", rating: 4, category: "Acción", imageUrl: "https://images.pexels.com/photos/2073554/pexels-photo-2073554.jpeg" },
  { id: 3, title: "The Dark Knight", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/2082134/pexels-photo-2082134.jpeg" },
  { id: 4, title: "Die Hard", rating: 4, category: "Acción", imageUrl: "https://images.pexels.com/photos/2989155/pexels-photo-2989155.jpeg" },
  { id: 5, title: "Gladiator", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/3095015/pexels-photo-3095015.jpeg" },
  { id: 6, title: "The Avengers", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/1081712/pexels-photo-1081712.jpeg" },
  { id: 7, title: "Inception", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/2065680/pexels-photo-2065680.jpeg" },
  { id: 8, title: "The Matrix", rating: 5, category: "Acción", imageUrl: "https://images.pexels.com/photos/2471112/pexels-photo-2471112.jpeg" },
  { id: 9, title: "The Bourne Identity", rating: 4, category: "Acción", imageUrl: "https://images.pexels.com/photos/2084972/pexels-photo-2084972.jpeg" },
  { id: 10, title: "Fast & Furious 7", rating: 4, category: "Acción", imageUrl: "https://images.pexels.com/photos/3110549/pexels-photo-3110549.jpeg" },
  
  { id: 11, title: "Shawshank Redemption", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2087435/pexels-photo-2087435.jpeg" },
  { id: 12, title: "Forrest Gump", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2429983/pexels-photo-2429983.jpeg" },
  { id: 13, title: "The Pursuit of Happyness", rating: 4, category: "Drama", imageUrl: "https://images.pexels.com/photos/2110918/pexels-photo-2110918.jpeg" },
  { id: 14, title: "A Beautiful Mind", rating: 4, category: "Drama", imageUrl: "https://images.pexels.com/photos/2661767/pexels-photo-2661767.jpeg" },
  { id: 15, title: "Schindler's List", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2335173/pexels-photo-2335173.jpeg" },
  { id: 16, title: "The Godfather", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/1966494/pexels-photo-1966494.jpeg" },
  { id: 17, title: "Fight Club", rating: 4, category: "Drama", imageUrl: "https://images.pexels.com/photos/2295356/pexels-photo-2295356.jpeg" },
  { id: 18, title: "12 Years a Slave", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2294399/pexels-photo-2294399.jpeg" },
  { id: 19, title: "Good Will Hunting", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2083097/pexels-photo-2083097.jpeg" },
  { id: 20, title: "The Green Mile", rating: 5, category: "Drama", imageUrl: "https://images.pexels.com/photos/2989659/pexels-photo-2989659.jpeg" },

  { id: 21, title: "The Hangover", rating: 4, category: "Comedia", imageUrl: "https://images.pexels.com/photos/2098775/pexels-photo-2098775.jpeg" },
  { id: 22, title: "Superbad", rating: 4, category: "Comedia", imageUrl: "https://images.pexels.com/photos/2573568/pexels-photo-2573568.jpeg" },
  { id: 23, title: "Step Brothers", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/1681017/pexels-photo-1681017.jpeg" },
  { id: 24, title: "Ferris Bueller's Day Off", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/2983664/pexels-photo-2983664.jpeg" },
  { id: 25, title: "Anchorman: The Legend of Ron Burgundy", rating: 4, category: "Comedia", imageUrl: "https://images.pexels.com/photos/3135436/pexels-photo-3135436.jpeg" },
  { id: 26, title: "The Big Lebowski", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/2657955/pexels-photo-2657955.jpeg" },
  { id: 27, title: "21 Jump Street", rating: 4, category: "Comedia", imageUrl: "https://images.pexels.com/photos/3387137/pexels-photo-3387137.jpeg" },
  { id: 28, title: "Dumb and Dumber", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/3290876/pexels-photo-3290876.jpeg" },
  { id: 29, title: "Crazy, Stupid, Love", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/3397649/pexels-photo-3397649.jpeg" },
  { id: 30, title: "The Grand Budapest Hotel", rating: 5, category: "Comedia", imageUrl: "https://images.pexels.com/photos/2202692/pexels-photo-2202692.jpeg" },

  { id: 31, title: "Interstellar", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2206211/pexels-photo-2206211.jpeg" },
  { id: 32, title: "Blade Runner 2049", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2634030/pexels-photo-2634030.jpeg" },
  { id: 33, title: "Star Wars: A New Hope", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2552116/pexels-photo-2552116.jpeg" },
  { id: 34, title: "The Martian", rating: 4, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2197029/pexels-photo-2197029.jpeg" },
  { id: 35, title: "Jurassic Park", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/3210760/pexels-photo-3210760.jpeg" },
  { id: 36, title: "E.T. the Extra-Terrestrial", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2367008/pexels-photo-2367008.jpeg" },
  { id: 37, title: "Back to the Future", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2846930/pexels-photo-2846930.jpeg" },
  { id: 38, title: "Ready Player One", rating: 4, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/1840702/pexels-photo-1840702.jpeg" },
  { id: 39, title: "Ex Machina", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/3193316/pexels-photo-3193316.jpeg" },
  { id: 40, title: "Avatar", rating: 5, category: "Ciencia ficción", imageUrl: "https://images.pexels.com/photos/2278102/pexels-photo-2278102.jpeg" },
];

const PAGE_SIZE = 8;

const Ejercicio14 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const totalPages = Math.ceil(peliculasReales.length / PAGE_SIZE);

  const filtrarPeliculas = () => {
    return peliculasReales.filter(pelicula => 
      (!selectedCategory || pelicula.category === selectedCategory)
    ).slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  };

  return (
    <div className="container">
      <h2 className="title">Películas</h2>

      <div className="genre-buttons">
        {["Acción", "Drama", "Comedia", "Ciencia ficción"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === selectedCategory ? "" : category)}
            className={`genre-button ${category === selectedCategory ? "selected" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="movie-grid">
        {filtrarPeliculas().map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img src={pelicula.imageUrl} alt={pelicula.title} className="movie-image" />
            <h3 className="movie-title">{pelicula.title}</h3>
            <p className="movie-rating">Calificación: {pelicula.rating} ★</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Ejercicio14;

