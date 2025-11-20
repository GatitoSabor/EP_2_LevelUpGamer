// src/components/pages/Catalog.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductService from '../../services/ProductService'; // <-- Asegúrate de tener este servicio
import '../../styles/Catalog.css';

export default function Catalog({
  showFreeShippingOnly,
  setShowFreeShippingOnly,
  onAddToCart,
  setSelectedProduct,
  initialFilters = {},
}) {
  const [products, setProducts] = useState([]);
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    ProductService.getAll()
      .then(response => setProducts(response.data))
      .catch(() => {
        setError('No se pudieron cargar los productos');
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (typeof initialFilters.envioGratis === 'boolean') {
      setFilters(prev => ({ ...prev, envioGratis: initialFilters.envioGratis }));
    }
  }, [initialFilters.envioGratis]);

  const marcas = Array.from(new Set(products.map(p => p.marca || '')));
  const categorias = Array.from(new Set(products.map(p => p.categoria || '')));
  const juegos = Array.from(new Set(products.map(p => p.juego || '')));

  const productosFiltrados = products
    .filter(p => !filters.marca || p.marca === filters.marca)
    .filter(p => !filters.categoria || p.categoria === filters.categoria)
    .filter(p => !filters.juego || p.juego === filters.juego)
    .filter(p => !filters.soloConDescuento || p.descuento)
    .filter(p => !filters.envioGratis || p.envioGratis)
    .filter(p => p.precio >= filters.precioMin)
    .filter(p => p.precio <= filters.precioMax);

  return (
    <Container fluid className="catalog-container py-4">
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Row>
          <Col xs={12} md={3} className="filter-menu mb-4">
            <Form>
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
              <Form.Group className="mb-3" controlId="precioMin">
                <Form.Label>Precio mínimo</Form.Label>
                <Form.Control
                  type="number"
                  value={filters.precioMin}
                  onChange={e => setFilters({ ...filters, precioMin: Number(e.target.value) })}
                />
              </Form.Group>
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
              <Form.Group className="mb-3" controlId="soloConDescuento">
                <Form.Check
                  type="checkbox"
                  label="Solo con descuento"
                  checked={filters.soloConDescuento}
                  onChange={e => setFilters({ ...filters, soloConDescuento: e.target.checked })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="envioGratis">
                <Form.Check
                  type="checkbox"
                  label="Envío gratis"
                  checked={filters.envioGratis}
                  onChange={e => setFilters({ ...filters, envioGratis: e.target.checked })}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} md={9}>
            <Row>
              {productosFiltrados.map(producto => (
                <Col xs={12} md={4} key={producto.id} className="mb-4">
                  <div className="product-card">
                    <h5>{producto.nombre}</h5>
                    <p>Marca: {producto.marca}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Juego: {producto.juego}</p>
                    <p>Precio: ${producto.precio}</p>
                    {onAddToCart && (
                      <button onClick={() => onAddToCart(producto)}>
                        Agregar al carrito
                      </button>
                    )}
                    {setSelectedProduct && (
                      <button onClick={() => setSelectedProduct(producto)}>
                        Ver detalle
                      </button>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
            {productosFiltrados.length === 0 && <p>No hay productos que coincidan.</p>}
          </Col>
        </Row>
      )}
    </Container>
  );
}
