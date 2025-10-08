import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { filtrarProductos, obtenerMarcas, obtenerCategorias, obtenerJuegos } from '../../services/Catalog';
import '../../styles/Catalog.css';

export default function Catalog({ products, showFreeShippingOnly, setShowFreeShippingOnly, onAddToCart, setSelectedProduct, initialFilters = {} }) {
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

  useEffect(() => {
    if (typeof initialFilters.envioGratis === 'boolean') {
      setFilters(prev => ({ ...prev, envioGratis: initialFilters.envioGratis }));
    }
  }, [initialFilters.envioGratis]);

  const marcas = obtenerMarcas(products);
  const categorias = obtenerCategorias(products);
  const juegos = obtenerJuegos(products);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name.includes('precio') ? Number(value) || 0 : value
    }));
    if (name === 'envioGratis') {
      setShowFreeShippingOnly(checked);
    }
  };

  const filteredProducts = filtrarProductos(products, filters);

  return (
    <Container fluid className="catalog-container py-4">
      <Row>
        <Col xs={12} md={3} className="filter-menu mb-4">
          <h3>Filtros</h3>
          <Form.Group className="mb-3" controlId="marcaSelect">
            <Form.Label>Marca:</Form.Label>
            <Form.Select name="marca" value={filters.marca} onChange={handleFilterChange}>
              <option value="">Todas</option>
              {marcas.map(m => <option key={m} value={m}>{m}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoriaSelect">
            <Form.Label>Categoría:</Form.Label>
            <Form.Select name="categoria" value={filters.categoria} onChange={handleFilterChange}>
              <option value="">Todas</option>
              {categorias.map(c => <option key={c} value={c}>{c}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="juegoSelect">
            <Form.Label>Colaboración:</Form.Label>
            <Form.Select name="juego" value={filters.juego} onChange={handleFilterChange}>
              <option value="">Todos</option>
              {juegos.map(j => <option key={j} value={j}>{j}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="precioMin">
            <Form.Label>Precio mínimo:</Form.Label>
            <Form.Control type="number" name="precioMin" value={filters.precioMin} onChange={handleFilterChange} min={0} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="precioMax">
            <Form.Label>Precio máximo:</Form.Label>
            <Form.Control type="number" name="precioMax" value={filters.precioMax === Infinity ? '' : filters.precioMax} onChange={handleFilterChange} min={0} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="soloConDescuento">
            <Form.Check
              type="checkbox"
              label="Solo con descuento"
              name="soloConDescuento"
              checked={filters.soloConDescuento}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="envioGratis">
            <Form.Check
              type="checkbox"
              label="Envío Gratis"
              name="envioGratis"
              checked={filters.envioGratis}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} md={9}>
          {filteredProducts.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
              {filteredProducts.map(product => (
                <Col key={product.id}>
                  <div className="product-card" onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer' }}>
                    <img src={product.image} alt={product.name} className="img-fluid" />
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
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
