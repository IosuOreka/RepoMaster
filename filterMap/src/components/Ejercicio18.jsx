// 18. Filtrar elementos con un checkbox múltiple
// Permite seleccionar múltiples categorías con checkboxes y usa filter para mostrar los productos de esas categorías.

import  { useState } from 'react';

const Ejercicio18 = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electrónica', selected: false },
    { id: 2, name: 'Ropa', selected: false },
    { id: 3, name: 'Deportes', selected: false },
    { id: 4, name: 'Juguetes', selected: false },
  ]);

  const [products] = useState([
    { id: 1, name: 'Smartphone', category: 'Electrónica', price: 799 },
    { id: 2, name: 'Camiseta', category: 'Ropa', price: 19.99 },
    { id: 3, name: 'Bicicleta', category: 'Deportes', price: 199.99 },
    { id: 4, name: 'Muñeca', category: 'Juguetes', price: 29.99 },
    { id: 5, name: 'Laptop', category: 'Electrónica', price: 999 },
    { id: 6, name: 'Pantalones', category: 'Ropa', price: 49.99 },
  ]);

  const handleCategoryChange = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  const filteredProducts = products.filter((product) => {
    return categories.some(
      (category) =>
        category.selected && product.category === category.name
    );
  });

  return (
    <div className="app-container">
      <div className="filters">
        <h2>Filtrar por categorías</h2>
        {categories.map((category) => (
          <label key={category.id} className="checkbox-label">
            <input
              type="checkbox"
              checked={category.selected}
              onChange={() => handleCategoryChange(category.id)}
            />
            {category.name}
          </label>
        ))}
      </div>

      <div className="product-list">
        <h2>Productos disponibles</h2>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Categoria: {product.category}</p>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No hay productos para mostrar en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Ejercicio18;
