import React from 'react';
import '../../styles/ProductDetailModal.css';
import { calcularStock, obtenerPrecioDescontado, obtenerPrecioTransferencia, obtenerProductosRelacionados } from '../../services/ProductDetailModal';

export default function ProductDetailModal({ product, onClose, onAddToCart, onGoToCart, onBuyNow, onSelectProduct = () => {} }) {
  const stock = calcularStock();
  const discountedPrice = obtenerPrecioDescontado(product);
  const transferPrice = obtenerPrecioTransferencia(product);
  const relatedProducts = obtenerProductosRelacionados(product);

  return (
    <section className="product-detail-page">
      <div className="product-detail-wrapper">
        <button className="back-btn" onClick={onClose}>← Volver</button>

        <div className="product-main-info">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="info-container">
            <h2>{product.name}</h2>

            {product.discount && product.discount > 0 ? (
              <>
                <p className="price-discounted">${discountedPrice.toLocaleString('es-CL')}</p>
                <p className="price-original">${product.price.toLocaleString('es-CL')}</p>
                <p className="discount-label">Producto con descuento</p>
                <p>Precio por transferencia: ${transferPrice.toLocaleString('es-CL')}</p>
                <p>Precio otros medios: ${discountedPrice.toLocaleString('es-CL')}</p>
              </>
            ) : (
              <>
                <p className="price">${product.price.toLocaleString('es-CL')}</p>
                <p>Precio por transferencia: ${(product.price * 0.94).toLocaleString('es-CL')}</p>
                <p>Precio otros medios: ${product.price.toLocaleString('es-CL')}</p>
              </>
            )}

            <div className="button-group">
              <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
              <button className="buy-now-btn" onClick={() => {
                onAddToCart(product);
                onClose();
                if (typeof onGoToCart === 'function') {
                  onGoToCart();
                }
              }}>Comprar ahora</button>
            </div>

            <p className="stock-info">Stock online: <span>{stock} unidades disponibles</span></p>
          </div>
        </div>

        <section className="additional-info">
          <h3>Descripción</h3>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionmodal }} />

          <h3>Productos relacionados</h3>
          <div className="related-products-container">
            {relatedProducts.length === 0 ? (
              <p>No hay productos relacionados disponibles.</p>
            ) : (
              relatedProducts.map(p => (
                <div
                  key={p.id}
                  className="related-product-card"
                  onClick={() => onSelectProduct(p)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="related-product-image"
                  />
                  <div className="related-product-name">{p.name}</div>
                  <div className="related-product-price">
                    ${((p.price * (1 - (p.discount || 0)))).toLocaleString('es-CL')}
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
