import React, { useState, useEffect } from 'react';
import '../../styles/SearchDropdown.css';

export default function SearchDropdown({ onSelectProduct, clearSignal }) {
  const [query, setQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (clearSignal) {
      setQuery('');
      setFilteredCategories([]);
      setFilteredProducts([]);
    }
  }, [clearSignal]);

  // --- FETCH dinámico al backend ---
  useEffect(() => {
    if (query.length > 1) {
      setLoading(true);
      fetch(`http://localhost:8080/api/v1/productos/search?query=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
          // Supón que el backend devuelve { products: [...], categories: [...] }
          setFilteredProducts(data.products.slice(0, 10));
          setFilteredCategories(data.categories.slice(0, 5));
        })
        .catch(() => {
          setFilteredProducts([]);
          setFilteredCategories([]);
        })
        .finally(() => setLoading(false));
    } else {
      setFilteredProducts([]);
      setFilteredCategories([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearInput = () => {
    setQuery('');
    setFilteredCategories([]);
    setFilteredProducts([]);
  };

  return (
    <div className="search-dropdown-container">
      <input
        type="search"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleInputChange}
        className="search-dropdown-input"
      />

      {query && (
        <button className="search-clear-btn" onClick={clearInput} aria-label="Limpiar búsqueda">
          &#10005;
        </button>
      )}

      <div style={{minHeight: 20, textAlign: "left", color: "#555", fontSize: 13}}>
        {loading && <span>Buscando...</span>}
      </div>

      {(filteredCategories.length > 0 || filteredProducts.length > 0) && (
        <div className="search-dropdown-results">
          {filteredCategories.length > 0 && (
            <div className="search-section">
              <div className="section-title">Sugerencias</div>
              {filteredCategories.map((cat, index) => (
                <div
                  key={index}
                  className="search-suggestion-item"
                  onMouseDown={() => {
                    setQuery(cat);
                    // Podrías hacer un fetch de productos por categoría aquí si lo quieres más dinámico
                    // O mostrar los productos más adelante
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
          {filteredProducts.length > 0 && (
            <div className="search-section">
              <div className="section-title">Productos</div>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="search-dropdown-item"
                  onMouseDown={() => {
                    onSelectProduct(product);
                    clearInput();
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="search-dropdown-item-image"
                  />
                  <div className="search-dropdown-item-info">
                    <div className="search-dropdown-item-name">{product.name}</div>
                    <div className="search-dropdown-item-description">{product.description}</div>
                  </div>
                  <div className="search-dropdown-item-price">
                    ${product.price.toLocaleString('es-CL')}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="search-view-all" style={{ textAlign: 'right', padding: '5px 10px', cursor: 'pointer', color: '#007bff' }}
            onMouseDown={() => {
              setQuery('');
              setFilteredCategories([]);
              setFilteredProducts([]);
              onSelectProduct(null); 
            }}
          >
            Ver todos los productos
          </div>
        </div>
      )}
    </div>
  );
}
