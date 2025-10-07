import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import '../styles/Home.css';

import products from '../data/products';
import ProductDetailModal from './ProductDetailModal';
import promoImage from '../assets/promos/promo.jpg';
import promoImage2 from '../assets/promos/promodes.jpg';
import promoVal from '../assets/promos/valo.jpg';

// NUEVO: puedes agregar estas imágenes en /assets/categorias/
import imgVideo from '../assets/promos/promoComponentes.jpg';
import imgMonitor from '../assets/promos/promoMonitor.jpg';
import imgSSD from '../assets/promos/promoComponentes2.jpg';
import imgPC from '../assets/promos/promoPC.jpg';

export default function Home({ 
  onAddToCart, onBuyNow, onShowDiscountProducts, 
  onShowValorantProducts, onShowNews, onShowEvents, 
  onShowFreeShipping, onGoToRegister, onShowCategory // <-- agrega este prop
}) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productIdsToShow = ["SG003","CG002","CG004","AU002","AU003"];
  const filteredProducts = products.filter(p => productIdsToShow.includes(p.id));
  const valorantProducts = products.filter(p => p.juego === 'Valorant').slice(0, 5);
  const freeShippingProducts = products.filter(p => p.envioGratis).slice(0, 5);

  const handleValorantPromoClick = () => {
    if (onShowValorantProducts) onShowValorantProducts();
  };
  const handleFreeShippingClick = () => {
    if (onShowFreeShipping) onShowFreeShipping();
  };
  const handleGoToRegisterClick = () => {
    if (onGoToRegister) onGoToRegister();
  };
  const handlePromoClick = () => {
    if (onShowDiscountProducts) onShowDiscountProducts();
  };

  
  // NUEVO: handlers categoría
  const handleCategoryClick = (category) => {
    if (onShowCategory) onShowCategory(category);
    // O bien, puedes usar navigate("/catalogo?category=" + category) si usas React Router
  };

  const slides = [
    { key: 0, content: <img src={require('../assets/promos/2.jpg')} alt="Promo" className="main-carousel-image" onClick={handleValorantPromoClick}/> },
    { key: 1, content: <img src={require('../assets/promos/3.jpg')} alt="Promo2" className="main-carousel-image" onClick={handleFreeShippingClick}/> },
    { key: 2, content: <img src={require('../assets/promos/4.jpg')} alt="Promo3" className="main-carousel-image" onClick={handleGoToRegisterClick}/> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (selectedProduct) {
    return (
      <div>
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          onSelectProduct={setSelectedProduct}
        />
      </div>
    );
  }

  // NUEVO: array de categorías
  const featuredCategories = [
    { name: "Tarjetas de Video", image: imgVideo, filtro: "Componentes" },
    { name: "Monitores Gamer", image: imgMonitor, filtro: "Monitores" },
    { name: "SSD", image: imgSSD, filtro: "Componentes" },
    { name: "PC Escritorio", image: imgPC, filtro: "Computadoras" }
  ];

  return (
    <div className="home-root">
      <div className="main-carousel" style={{ width: '80%', height: '300px', margin: '0 auto' }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
          onGoToSlide={setGoToSlide}
          springConfig={{ mass: 1, tension: 120, friction: 20 }}
        />
      </div>

      {/* Promo normal con productos */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '40px', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{ flex: '0 0 300px', position: 'relative', cursor: 'pointer' }}
          onClick={handlePromoClick}
        >
          <img
            src={promoImage}
            alt="Promoción Gamer"
            className="promo-image"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="products-container">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="discounted-product-card"
              style={{ cursor: 'pointer', margin: '0 3px' }}
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

      {/* Bloque inverso: productos Valorant y luego promo para Valorant */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '60px', alignItems: 'center', justifyContent: 'center' }}>
        <div className="products-container">
          {valorantProducts.map(product => (
            <div
              key={product.id}
              className="discounted-product-card"
              style={{ cursor: 'pointer', margin: '0 3px' }}
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
                <span className="discounted-price">
                  ${((product.price * (1 - (product.discount || 0)))).toLocaleString('es-CL')}
                </span>
              </p>
              <p className="payment-method">Transferencias</p>
            </div>
          ))}
        </div>

        <div
          style={{ flex: '0 0 300px', position: 'relative', cursor: 'pointer' }}
          onClick={handleValorantPromoClick}
        >
          <img
            src={promoVal}
            alt="Promoción Valorant"
            className="promo-image"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* BLOQUE NUEVO: Imágenes-categorías destacadas */}
      <div className="featured-categories-container">
        {featuredCategories.map(cat => (
          <div 
            key={cat.name} 
            className="category-card"
            onClick={() => handleCategoryClick(cat.filtro)}
          >
            <img
              src={cat.image}
              alt={cat.name}
            />
          </div>
        ))}
      </div>
      
      {/* Bloque envío gratis con productos y promo al final */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '60px', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Productos con envío gratis */}
        <div className="products-container">
          {freeShippingProducts.map(product => (
            <div
              key={product.id}
              className="discounted-product-card"
              style={{ cursor: 'pointer', margin: '0 3px' }}
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
                <span className="discounted-price">
                  ${((product.price * (1 - (product.discount || 0)))).toLocaleString('es-CL')}
                </span>
              </p>
              <p className="payment-method">Transferencias</p>
            </div>
          ))}
        </div>

        {/* Imagen promo envío gratis */}
        <div
          style={{ flex: '0 0 300px', position: 'relative', cursor: 'pointer' }}
          onClick={() => onShowFreeShipping && onShowFreeShipping()}
        >
          <img
            src={promoImage2} // Cambia la ruta si es distinta
            alt="Promoción Envío Gratis"
            className="promo-image"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>



    </div>
  );
}
