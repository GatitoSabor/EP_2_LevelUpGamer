import React, { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [animateFly, setAnimateFly] = useState(false);

  const handleAddToCart = () => {
    // Inicia la animación
    setAnimateFly(true);

    // Añade el producto al carrito
    onAddToCart(product);

    // Después de la animación, quita la clase para poder reactivarla
    setTimeout(() => setAnimateFly(false), 700);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toLocaleString('es-CL')} CLP</p>
      <button
        className={`submit-btn product-card-button ${animateFly ? 'btn-fly-to-cart' : ''}`}
        onClick={handleAddToCart}
      >
        Añadir al carrito
      </button>

    </div>
  );
}
