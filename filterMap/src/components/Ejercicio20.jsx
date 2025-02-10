import React, { useState } from 'react';

const Ejercicio20 = () => {
  const terms = [
    'Manzana', 'Mandarina', 'Plátano', 'Pera', 'Cereza', 'Mango', 'Melón', 'Kiwi', 'Fresa', 'Frambuesa',
    'Uva', 'Arándano', 'Piña', 'Papaya', 'Durazno', 'Aguacate', 'Sandía', 'Coco', 'Granada'
  ];

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filteredTerms = terms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredTerms); 
  };


  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); 
    setSuggestions([]); 
  };

  return (
    <div className="autocomplete-container" style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Escribe para buscar..."
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      {suggestions.length > 0 && (
        <div
          className="autocomplete-suggestions"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            border: '1px solid #ccc',
            maxHeight: '200px',
            overflowY: 'auto',
            backgroundColor: 'white',
            zIndex: 10,
            borderRadius: '4px'
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="autocomplete-suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: '#fff',
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ejercicio20;
