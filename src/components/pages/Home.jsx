import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import ProductDetailModal from './ProductDetailModal';
import promoImage from '../../assets/promos/promo.jpg';
import promoImage2 from '../../assets/promos/promodes.jpg';
import promoVal from '../../assets/promos/valo.jpg';
import '../../styles/Home.css';  // Ruta según donde tengas tu archivo CSS


import {
  filteredProducts, valorantProducts, freeShippingProducts,
  featuredCategories, slides as slideData
} from '../../services/Home';

export default function Home({
  onAddToCart, onBuyNow, onShowDiscountProducts,
  onShowValorantProducts, onShowFreeShipping, onGoToRegister,
  onShowCategory
}) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePromoClick = () => { if(onShowDiscountProducts) onShowDiscountProducts(); };
  const handleValorantPromoClick = () => { if(onShowValorantProducts) onShowValorantProducts(); };
  const handleFreeShippingClick = () => { if(onShowFreeShipping) onShowFreeShipping(); };
  const handleGoToRegisterClick = () => { if(onGoToRegister) onGoToRegister(); };
  const handleCategoryClick = (category) => { if(onShowCategory) onShowCategory(category); };

  const slides = slideData.map(slide => ({
    key: slide.key,
    content: <img src={slide.src} alt={`Promo ${slide.key}`} className="main-carousel-image" onClick={
      slide.key === 0 ? handleValorantPromoClick :
      slide.key === 1 ? handleFreeShippingClick :
      handleGoToRegisterClick
    } />
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (selectedProduct) {
    return (
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
        onSelectProduct={setSelectedProduct}
      />
    );
  }

  return (
    <div className="home-root">

      {/* Carrusel */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="main-carousel" style={{ height: '300px' }}>
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
          </Col>
        </Row>
      </Container>

      {/* Promo con productos */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={4} lg={3} onClick={handlePromoClick} style={{ cursor: 'pointer' }}>
            <img src={promoImage} alt="Promoción Gamer" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
          <Col xs={12} md={8} lg={9} className="products-container">
            {filteredProducts.map(product => (
              <div key={product.id} className="discounted-product-card" style={{ cursor: 'pointer', margin: '0 3px' }} onClick={() => setSelectedProduct(product)}>
                {product.label && (
                  <div className={`product-label ${product.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.label}
                  </div>
                )}
                <img src={product.image} alt={product.name} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.name}</h3>
                <p className="discounted-product-price">
                  <span className="original-price">${product.price.toLocaleString('es-CL')}</span>
                  <span className="discounted-price">${(product.price * (1 - (product.discount || 0))).toLocaleString('es-CL')}</span>
                </p>
                <p className="payment-method">Transferencias</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Productos Valorant y promo */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center flex-md-row-reverse">
          <Col xs={12} md={4} lg={3} onClick={handleValorantPromoClick} style={{ cursor: 'pointer' }}>
            <img src={promoVal} alt="Promoción Valorant" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
          <Col xs={12} md={8} lg={9} className="products-container">
            {valorantProducts.map(product => (
              <div key={product.id} className="discounted-product-card" style={{ cursor: 'pointer', margin: '0 3px' }} onClick={() => setSelectedProduct(product)}>
                {product.label && (
                  <div className={`product-label ${product.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.label}
                  </div>
                )}
                <img src={product.image} alt={product.name} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.name}</h3>
                <p className="discounted-product-price">
                  <span className="discounted-price">${(product.price * (1 - (product.discount || 0))).toLocaleString('es-CL')}</span>
                </p>
                <p className="payment-method">Transferencias</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Categorías destacadas */}
      <Container className="my-5">
        <Row className="featured-categories-container justify-content-center">
          {featuredCategories.map(cat => (
            <Col key={cat.name} xs={12} sm={6} md={4} lg={3} className="category-card" onClick={() => handleCategoryClick(cat.filtro)} style={{ cursor: 'pointer' }}>
              <img src={cat.image} alt={cat.name} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Envío gratis con productos y promo */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} lg={9} className="products-container">
            {freeShippingProducts.map(product => (
              <div key={product.id} className="discounted-product-card" style={{ cursor: 'pointer', margin: '0 3px' }} onClick={() => setSelectedProduct(product)}>
                {product.label && (
                  <div className={`product-label ${product.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.label}
                  </div>
                )}
                <img src={product.image} alt={product.name} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.name}</h3>
                <p className="discounted-product-price">
                  <span className="discounted-price">${(product.price * (1 - (product.discount || 0))).toLocaleString('es-CL')}</span>
                </p>
                <p className="payment-method">Transferencias</p>
              </div>
            ))}
          </Col>
          <Col xs={12} md={4} lg={3} onClick={() => onShowFreeShipping && onShowFreeShipping()} style={{ cursor: 'pointer' }}>
            <img src={promoImage2} alt="Promoción Envío Gratis" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}
