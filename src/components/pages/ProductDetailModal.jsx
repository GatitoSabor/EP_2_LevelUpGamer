// src/components/pages/ProductDetailModal.jsx
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/ProductDetailModal.css';
import { 
  calcularStock, 
  obtenerPrecioDescontado, 
  obtenerPrecioTransferencia, 
  obtenerProductosRelacionados 
} from '../../services/ProductDetailModal';

// Supón que tienes acceso a todos los productos como prop,
// si no, podrías traerlos desde contexto o hacer un fetch por id.
export default function ProductDetailModal({ allProducts = [], onAddToCart, onGoToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el producto por ID
  const product = useMemo(() => 
    allProducts.find(p => String(p.idProducto) === id), 
    [allProducts, id]
  );

  if (!product) {
    return <section className="product-detail-page"><p>Producto no encontrado.</p></section>;
  }

  const stock = calcularStock(product);
  const discountedPrice = obtenerPrecioDescontado(product);
  const transferPrice = obtenerPrecioTransferencia(product);
  const relatedProducts = obtenerProductosRelacionados(product, allProducts);

  return (
    <section className="product-detail-page">
      <div className="product-detail-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>

        <div className="product-main-info">
          <div className="image-container">
            <img src={product.imagen
                        ? product.imagen.startsWith('http')
                          ? product.imagen
                          : `http://18.116.201.66:8080${product.imagen}`
                        : 'URL_FALLBACK_O_PLACEHOLDER'} 
                  alt={product.nombre} />
          </div>

          <div className="info-container">
            <h2>{product.nombre}</h2>

            {product.descuento && product.descuento > 0 ? (
              <>
                <p className="price-discounted">${discountedPrice.toLocaleString('es-CL')}</p>
                <p className="price-original">${product.precio.toLocaleString('es-CL')}</p>
                <p className="discount-label">
                  Producto con descuento ({(product.descuento * 100).toFixed(0)}%)
                </p>
                <p>Precio por transferencia: ${transferPrice.toLocaleString('es-CL')}</p>
                <p>Precio otros medios: ${discountedPrice.toLocaleString('es-CL')}</p>
              </>
            ) : (
              <>
                <p className="price">${product.precio.toLocaleString('es-CL')}</p>
                <p>Precio por transferencia: ${(product.precio * 0.94).toLocaleString('es-CL')}</p>
                <p>Precio otros medios: ${product.precio.toLocaleString('es-CL')}</p>
              </>
            )}

            {product.envioGratis && (
              <p className="free-shipping">🚚 Envío gratis</p>
            )}

            <div className="button-group">
              <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                Agregar al carrito
              </button>
              <button className="buy-now-btn" onClick={() => {
                onAddToCart(product);
                navigate("/carrito"); // Navega directamente al carrito
              }}>
                Comprar ahora
              </button>
            </div>

            <p className="stock-info">
              Stock online: <span>{stock} unidades disponibles</span>
            </p>
          </div>
        </div>

        <section className="additional-info">
          
          <div dangerouslySetInnerHTML={{ __html: product.descripcionModal }} />

          <h3>Productos relacionados</h3>
          <div className="related-products-container">
            {relatedProducts.length === 0 ? (
              <p>No hay productos relacionados disponibles.</p>
            ) : (
              relatedProducts.map(p => (
                <div
                  key={p.idProducto}
                  className="related-product-card"
                  onClick={() => navigate(`/producto/${p.idProducto}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="related-product-image"
                  />
                  <div className="related-product-name">{p.nombre}</div>
                  <div className="related-product-price">
                    ${obtenerPrecioDescontado(p).toLocaleString('es-CL')}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
