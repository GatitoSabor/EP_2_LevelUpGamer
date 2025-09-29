import React, { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';

export default function Catalog({ products, onAddToCart, setSelectedProduct }) {
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
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="price">
                {product.discount && product.discount > 0 ? (
                  <>
                    <span className="price-discounted">
                      ${ (product.price * (1 - product.discount)).toLocaleString('es-CL') }
                    </span>{' '}
                    <span className="price-original">
                      ${ product.price.toLocaleString('es-CL') }
                    </span>
                  </>
                ) : (
                  <>${ product.price.toLocaleString('es-CL') }</>
                )}
              </p>
              {product.discount && product.discount > 0 && (
                <p className="discount-label">Descuento {Math.round(product.discount * 100)}%</p>
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
}
