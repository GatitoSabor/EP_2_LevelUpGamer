import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import ProductService from '../../services/ProductService';
import '../../styles/Catalog.css';

export default function Catalog({
  products: productsProp,
  showFreeShippingOnly,
  setShowFreeShippingOnly,
  onAddToCart,
  setSelectedProduct,
  initialFilters = {},
}) {
  const [products, setProducts] = useState(productsProp && productsProp.length > 0 ? productsProp : []);
  const [filters, setFilters] = useState({
    marca: '',
    categoria: '',
    precioMin: 0,
    precioMax: Infinity,
    juego: '',
    soloConDescuento: false,
    envioGratis: false,
    ...initialFilters
  });
  const [loading, setLoading] = useState(productsProp ? false : true);
  const [error, setError] = useState('');

  // Solo hace fetch si no hay products por props
  useEffect(() => {
    if (productsProp && productsProp.length > 0) {
      setProducts(productsProp);
      setLoading(false);
      return;
    }
    setLoading(true);
    ProductService.getAll()
      .then(response => setProducts(response.data))
      .catch(() => {
        setError('No se pudieron cargar los productos');
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [productsProp]);

  useEffect(() => {
    if (typeof initialFilters.envioGratis === 'boolean') {
      setFilters(prev => ({ ...prev, envioGratis: initialFilters.envioGratis }));
    }
  }, [initialFilters.envioGratis]);

  const marcas = Array.from(new Set(products.map(p => p.marca || '').filter(Boolean)));
  const categorias = Array.from(new Set(products.map(p => p.categoria || '').filter(Boolean)));
  const juegos = Array.from(new Set(products.map(p => p.juego || '').filter(Boolean)));

  const productosFiltrados = products
    .filter(p => !filters.marca || p.marca === filters.marca)
    .filter(p => !filters.categoria || p.categoria === filters.categoria)
    .filter(p => !filters.juego || p.juego === filters.juego)
    .filter(p => !filters.soloConDescuento || (p.descuento && p.descuento > 0))
    .filter(p => !filters.envioGratis || p.envioGratis)
    .filter(p => p.precio >= filters.precioMin)
    .filter(p => p.precio <= filters.precioMax);

  return (
    <Container fluid className="catalog-container py-4" style={{ display: 'flex', gap: '30px' }}>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <>
          <div className="filter-menu mb-4">
            <Form>
              {/* Marca */}
              <Form.Group className="mb-3" controlId="marca">
                <Form.Label>Marca</Form.Label>
                <Form.Select
                  value={filters.marca}
                  onChange={e => setFilters({ ...filters, marca: e.target.value })}
                >
                  <option value="">Todas</option>
                  {marcas.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              {/* Categoría */}
              <Form.Group className="mb-3" controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Select
                  value={filters.categoria}
                  onChange={e => setFilters({ ...filters, categoria: e.target.value })}
                >
                  <option value="">Todas</option>
                  {categorias.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              {/* Juego */}
              <Form.Group className="mb-3" controlId="juego">
                <Form.Label>Juego</Form.Label>
                <Form.Select
                  value={filters.juego}
                  onChange={e => setFilters({ ...filters, juego: e.target.value })}
                >
                  <option value="">Todos</option>
                  {juegos.map(j => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              {/* Precio mínimo */}
              <Form.Group className="mb-3" controlId="precioMin">
                <Form.Label>Precio mínimo</Form.Label>
                <Form.Control
                  type="number"
                  value={filters.precioMin}
                  onChange={e => setFilters({ ...filters, precioMin: Number(e.target.value) })}
                />
              </Form.Group>
              {/* Precio máximo */}
              <Form.Group className="mb-3" controlId="precioMax">
                <Form.Label>Precio máximo</Form.Label>
                <Form.Control
                  type="number"
                  value={filters.precioMax === Infinity ? '' : filters.precioMax}
                  onChange={e =>
                    setFilters({
                      ...filters,
                      precioMax: e.target.value ? Number(e.target.value) : Infinity,
                    })
                  }
                />
              </Form.Group>
              {/* Solo con descuento */}
              <Form.Group className="mb-3" controlId="soloConDescuento">
                <Form.Check
                  type="checkbox"
                  label="Solo con descuento"
                  checked={filters.soloConDescuento}
                  onChange={e => setFilters({ ...filters, soloConDescuento: e.target.checked })}
                />
              </Form.Group>
              {/* Envío gratis */}
              <Form.Group className="mb-3" controlId="envioGratis">
                <Form.Check
                  type="checkbox"
                  label="Envío gratis"
                  checked={filters.envioGratis}
                  onChange={e => setFilters({ ...filters, envioGratis: e.target.checked })}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="products-panel" style={{ flex: 1 }}>
            <div className="products-grid">
              {productosFiltrados.map(producto => (
                <div className="product-card" key={producto.idProducto}>
                  <img
                    src={
                      producto.imagen
                        ? producto.imagen.startsWith('http')
                          ? producto.imagen
                          : `http://localhost:8080${producto.imagen}`
                        : 'URL_FALLBACK_O_PLACEHOLDER'
                    }
                    alt={producto.nombre}
                  />
                  <h5>{producto.nombre}</h5>
                  <p className="text-muted">{producto.descripcion}</p>
                  <p><strong>Marca:</strong> {producto.marca}</p>
                  <p><strong>Categoría:</strong> {producto.categoria}</p>
                  {producto.juego && <p><strong>Juego:</strong> {producto.juego}</p>}
                  <p className="price">
                    <strong>Precio:</strong> ${producto.precio.toLocaleString('es-CL')}
                  </p>
                  {producto.descuento > 0 && (
                    <p className="discount text-success">
                      Descuento: {(producto.descuento * 100).toFixed(0)}%
                    </p>
                  )}
                  {producto.envioGratis && (
                    <p className="text-primary">🚚 Envío gratis</p>
                  )}
                  <p><strong>Stock:</strong> {producto.stock}</p>
                  <div className="product-actions">
                    {onAddToCart && (
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => onAddToCart(producto)}
                      >
                        Agregar al carrito
                      </button>
                    )}
                    {setSelectedProduct && (
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => setSelectedProduct(producto)}
                      >
                        Ver detalle
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {productosFiltrados.length === 0 && (
              <p className="text-center">No hay productos que coincidan con los filtros.</p>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
