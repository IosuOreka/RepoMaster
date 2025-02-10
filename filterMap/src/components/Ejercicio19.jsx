// 19. Paginación de elementos
// Dado un array de 100 elementos, usa map para mostrar solo 10 por página.

import React, { useState, useEffect } from 'react';
import './Ejercicio19.css'


const ITEMS_PER_PAGE = 10;

const Ejercicio19 = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const indexOfLastCountry = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  return (
    <div className="container">
      <h1>Lista de Países</h1>
      <div className="countries-list">
        {currentCountries.map((country, index) => (
           <div key={country.cca3} className="country-card">
           <h3>{country.name.common}</h3>
           <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'No disponible'}</p>
           {/* <p><strong>Región:</strong> {country.region}</p>
           <p><strong>Subregión:</strong> {country.subregion}</p>
           <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
           <p><strong>Área:</strong> {country.area} km²</p> */}
           <p><strong>Idiomas:</strong> {Object.values(country.languages || {}).join(', ')}</p>
           <p><strong>Moneda:</strong> {country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'No disponible'}</p>
           <div className="flag">
             <strong>Bandera:</strong>
             <img src={country.flags.png} alt={`Bandera de ${country.name.common}`} className="country-flag" />
           </div>
         </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ejercicio19;
