// src/components/pages/ProductDetailModal.jsx
import React from 'react';
import '../../styles/ProductDetailModal.css';
import { 
  calcularStock, 
  obtenerPrecioDescontado, 
  obtenerPrecioTransferencia, 
  obtenerProductosRelacionados 
} from '../../services/ProductDetailModal';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onGoToCart, 
  onBuyNow, 
  onSelectProduct = () => {},
  allProducts = [] // <-- Necesitas pasar todos los productos desde el componente padre
}) {
  const stock = calcularStock(product);
  const discountedPrice = obtenerPrecioDescontado(product);
  const transferPrice = obtenerPrecioTransferencia(product);
  const relatedProducts = obtenerProductosRelacionados(product, allProducts);

  return (
    <section className="product-detail-page">
      <div className="product-detail-wrapper">
        <button className="back-btn" onClick={onClose}>← Volver</button>

        <div className="product-main-info">
          <div className="image-container">
            <img src={product.imagen} alt={product.nombre} />
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
                onClose();
                if (typeof onGoToCart === 'function') {
                  onGoToCart();
                }
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
          <h3>Descripción</h3>
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
                  onClick={() => onSelectProduct(p)}
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
