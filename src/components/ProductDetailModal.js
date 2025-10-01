import React from 'react';
import './ProductDetailModal.css';

export default function ProductDetailModal({ product, onClose, onAddToCart, onBuyNow }) {
  const stock = Math.floor(Math.random() * 20) + 1;

  const discountedPrice = product.price * (1 - (product.discount ?? 0));
  const transferPrice = discountedPrice * 0.94; // descuento adicional transferencia

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
              <button className="buy-now-btn" onClick={() => onBuyNow(product)}>Comprar ahora</button>
            </div>

            <p className="stock-info">Stock online: <span>{stock} unidades disponibles</span></p>
          </div>
        </div>

        <section className="additional-info">
          <h3>Descripción</h3>
          <p>{product.descriptionmodal}</p>

          <h3>Productos relacionados</h3>
          <p>Próximamente...</p>
        </section>
      </div>
    </section>
  );
}
