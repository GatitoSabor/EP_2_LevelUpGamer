import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Home.css';

import products from '../products';
import ProductDetailModal from './ProductDetailModal';
import promoImage from '../assets/promos/promo.jpg';

export default function Home({ onAddToCart, onBuyNow }) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const slides = [
    { key: 0, content: <img src={require('../assets/promos/2.jpg')} alt="Promo" className="main-carousel-image" /> },
    { key: 1, content: <img src={require('../assets/promos/3.jpg')} alt="Promo2" className="main-carousel-image" /> },
    { key: 2, content: <img src={require('../assets/promos/4.jpg')} alt="Promo3" className="main-carousel-image" /> },
  ];

  const productIdsToShow = ["SG003","CG002","CG004","AU002","AU003"];
  const filteredProducts = products.filter(p => productIdsToShow.includes(p.id));

  if (selectedProduct) {
    return (
      <div>
        <button onClick={() => setSelectedProduct(null)} style={{ margin: '20px' }}>
          ← Volver
        </button>
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
        />
      </div>
    );
  }

  return (
    <div className="home-root">
      <h2 className="section-title">Quiénes somos</h2>
      <p className="section-description">
        Level-Up Gamer es una tienda online que ofrece productos de alta calidad para gamers en todo Chile,
        con una experiencia de compra única y un compromiso con la comunidad gamer.
      </p>

      <h2 className="section-title">Productos destacados</h2>

      <div className="main-carousel" style={{ width: '80%', height: '300px', margin: '0 auto' }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={true}
          animationConfig={config.gentle}
          onGoToSlide={setGoToSlide}
          autoplay={true}
          interval={3000}
          springConfig={{ mass: 1, tension: 120, friction: 20 }}
        />
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '40px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: '0 0 250px', position: 'relative' }}>
          <img src={promoImage} alt="Promoción Gamer" className="promo-image" />
          <div className="promo-text-box">
            <p><strong>¡Despacho Gratis!</strong></p>
            <p>En productos seleccionados</p>
            <button className="btn-ver-productos">Ver productos</button>
          </div>
        </div>

        <div style={{ flex: '1 1 auto', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="discounted-product-card"
              style={{ cursor: 'pointer', flex: '0 1 calc(20% - 15px)', margin: '0 6px' }}
              onClick={() => setSelectedProduct(product)}
            >
              {product.label && (
                <div className={`product-label ${product.label.toLowerCase().replace(/\s/g, '-')}`}>
                  {product.label}
                </div>
              )}
              <img src={product.image} alt={product.name} className="discounted-product-image" />
              <h3 className="discounted-product-name">{product.name}</h3>
              <p className="discounted-product-price">
                <span className="original-price">${product.price.toLocaleString('es-CL')}</span>
                <span className="discounted-price">
                  ${((product.price * (1 - (product.discount || 0)))).toLocaleString('es-CL')}
                </span>
              </p>
              <p className="payment-method">Transferencias</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
