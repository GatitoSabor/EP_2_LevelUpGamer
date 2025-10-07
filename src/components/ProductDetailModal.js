import React from 'react';
import '../styles/ProductDetailModal.css';
import products from '../data/products';

export default function ProductDetailModal({ product, onClose, onAddToCart, onGoToCart, onBuyNow, onSelectProduct = () => {} }) {
  const stock = Math.floor(Math.random() * 20) + 1;

  const discountedPrice = product.price * (1 - (product.discount ?? 0));
  const transferPrice = discountedPrice * 0.94;

  // Filtra productos relacionados por misma categoría, excluyendo el producto actual
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  );

  const productsToShow = relatedProducts.slice(0, 5);

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
          <div className="related-products-container" style={{ display: 'flex', gap: '10px' }}>
            {productsToShow.length === 0 ? (
              <p>No hay productos relacionados disponibles.</p>
            ) : (
              productsToShow.map(p => (
                <div
                    key={p.id}
                    className="related-product-card"
                    onClick={() => onSelectProduct(p)}  // Cambia el producto en Home
                    style={{ cursor: 'pointer', /* estilos... */ }}
                  >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }}
                  />
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '6px' }}>{p.name}</div>
                  <div style={{ color: '#5a5af3', fontWeight: '700' }}>
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
