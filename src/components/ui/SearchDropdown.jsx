import React, { useState, useEffect } from 'react';
import '../../styles/SearchDropdown.css';

export default function SearchDropdown({ products = [], onSelectProduct, clearSignal }) {
  const [query, setQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (clearSignal) {
      setQuery('');
      setFilteredCategories([]);
      setFilteredProducts([]);
    }
  }, [clearSignal]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const productsMatched = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
      );

      const categoriesMatched = [
        ...new Set(
          products
            .map(p => p.category)
            .filter(cat => cat && cat.toLowerCase().includes(value.toLowerCase()))
        )
      ];

      setFilteredProducts(productsMatched.slice(0, 10));
      setFilteredCategories(categoriesMatched.slice(0, 5));
    } else {
      setFilteredCategories([]);
      setFilteredProducts([]);
    }
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
                    setFilteredProducts(products.filter(p => p.category === cat));
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
