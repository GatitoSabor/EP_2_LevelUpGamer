import React, { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [animateFly, setAnimateFly] = useState(false);

  const handleAddToCart = () => {
    setAnimateFly(true);
    onAddToCart(product);
    setTimeout(() => setAnimateFly(false), 700);
  };

  const discountPercent = product.discount ? Math.round(product.discount * 100) : 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="price">
        {product.discount && product.discount > 0 ? (
          <>
            <span className="price-discounted">
              ${ (product.price * (1 - product.discount)).toLocaleString('es-CL') } CLP
            </span>
            <span className="price-original">
              ${ product.price.toLocaleString('es-CL') } CLP
            </span>
            <span className="discount-label">Descuento {discountPercent}%</span>
          </>
        ) : (
          <span>${ product.price.toLocaleString('es-CL') } CLP</span>
        )}
      </div>

      <button
        className={`submit-btn product-card-button ${animateFly ? 'btn-fly-to-cart' : ''}`}
        onClick={handleAddToCart}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
