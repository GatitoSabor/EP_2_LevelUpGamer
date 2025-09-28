import React, { useState } from 'react';

export default function Catalog({ products, onAddToCart }) {
  const [filters, setFilters] = useState({
    marca: '',
    categoria: '',
    precioMin: 0,
    precioMax: Infinity,
  });

  const marcas = [...new Set(products.map(p => p.marca))];
  const categorias = [...new Set(products.map(p => p.categoria))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name.includes('precio') ? Number(value) || 0 : value,
    }));
  };

  const filteredProducts = products.filter(p => {
    return (
      (filters.marca === '' || p.marca === filters.marca) &&
      (filters.categoria === '' || p.categoria === filters.categoria) &&
      p.price >= filters.precioMin &&
      p.price <= filters.precioMax
    );
  });

  return (
    <div className="catalog-container">
      <aside className="filter-menu">
        <h3>Filtros</h3>
        <div className="filter-group">
          <label>Marca:</label>
          <select name="marca" value={filters.marca} onChange={handleFilterChange}>
            <option value="">Todas</option>
            {marcas.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label>Categoría:</label>
          <select name="categoria" value={filters.categoria} onChange={handleFilterChange}>
            <option value="">Todas</option>
            {categorias.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label>Precio mínimo</label>
          <input type="number" name="precioMin" value={filters.precioMin} onChange={handleFilterChange} />
        </div>
        <div className="filter-group">
          <label>Precio máximo</label>
          <input type="number" name="precioMax" value={filters.precioMax === Infinity ? '' : filters.precioMax} onChange={handleFilterChange} />
        </div>
      </aside>

      <section className="products-grid">
        {filteredProducts.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="price">${product.price.toLocaleString('es-CL')}</p>
              <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
