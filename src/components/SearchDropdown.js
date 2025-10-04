import React, { useState, useEffect } from 'react';
import '../styles/SearchDropdown.css';

export default function SearchDropdown({ products = [], onSelectProduct, clearSignal }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Para limpiar el input desde fuera (cuando cambias página, por ejemplo)
  useEffect(() => {
    if (clearSignal) {
      setQuery('');
      setResults([]);
    }
  }, [clearSignal]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1 && Array.isArray(products)) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 10));
    } else {
      setResults([]);
    }
  };

  const clearInput = () => {
    setQuery('');
    setResults([]);
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
      {/* Botón X para limpiar texto, visible solo si query tiene texto */}
      {query && (
        <button className="search-clear-btn" onClick={clearInput} aria-label="Limpiar búsqueda">
          &#10005;
        </button>
      )}
      {results.length > 0 && (
        <ul className="search-dropdown-results">
          {results.map(product => (
            <li
              key={product.id}
              onMouseDown={() => {
                onSelectProduct(product);
                clearInput();
              }}
              className="search-dropdown-item"
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
              <div className="search-dropdown-item-price">${product.price.toLocaleString('es-CL')}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 
