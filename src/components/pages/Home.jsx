import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import promoImage from '../../assets/promos/promo.jpg';
import promoImage2 from '../../assets/promos/promodes.jpg';
import promoVal from '../../assets/promos/valo.jpg';
import '../../styles/Home.css';

import {
  getFilteredProducts,
  getValorantProducts,
  getFreeShippingProducts,
  getDiscountProducts,
  featuredCategories,
  slides as slideData
} from '../../services/Home';

export default function Home({
  onAddToCart,
  onBuyNow,
  onShowDiscountProducts,
  onShowValorantProducts,
  onShowFreeShipping,
  onGoToRegister,
  onShowCategory
}) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); 

  useEffect(() => {
    ProductService.getAll()
      .then(response => {
        console.log('Productos cargados en Home:', response.data);
        setProducts(response.data);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handlePromoClick = () => { if (onShowDiscountProducts) onShowDiscountProducts(); };
  const handleValorantPromoClick = () => { if (onShowValorantProducts) onShowValorantProducts(); };
  const handleFreeShippingClick = () => { if (onShowFreeShipping) onShowFreeShipping(); };
  const handleGoToRegisterClick = () => { if (onGoToRegister) onGoToRegister(); };
  const handleCategoryClick = (category) => { if (onShowCategory) onShowCategory(category); };

  const slides = slideData.map(slide => ({
    key: slide.key,
    content: <img 
      src={slide.src} 
      alt={`Promo ${slide.key}`} 
      className="main-carousel-image" 
      onClick={
        slide.key === 0 ? handleValorantPromoClick :
        slide.key === 1 ? handleFreeShippingClick :
        handleGoToRegisterClick
      } 
    />
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const filteredProducts = getDiscountProducts(products);
  const valorantProducts = getValorantProducts(products);
  const freeShippingProducts = getFreeShippingProducts(products);

  if (loading) {
    return <div className="text-center my-5">Cargando productos...</div>;
  }

  return (
    <div className="home-root">
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

      {/* Sección de productos con descuento */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={4} lg={3} onClick={handlePromoClick} style={{ cursor: 'pointer' }}>
            <img src={promoImage} alt="Promoción Gamer" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
          <Col xs={12} md={8} lg={9} className="products-container">
            {filteredProducts.map(product => (
              <div 
                key={product.idProducto} 
                className="discounted-product-card" 
                style={{ cursor: 'pointer', margin: '0 3px' }} 
                onClick={() => navigate(`/producto/${product.idProducto}`)}
              >
                {product.estado && (
                  <div className={`product-label ${product.estado.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.estado}
                  </div>
                )}
                <img src={product.imagen} alt={product.nombre} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.nombre}</h3>
                <p className="discounted-product-price">
                  <span className="original-price">${product.precio.toLocaleString('es-CL')}</span>
                  <span className="discounted-price">
                    ${(product.precio * (1 - (product.descuento || 0))).toLocaleString('es-CL')}
                  </span>
                </p>
                <p className="payment-method">Transferencias</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Sección de productos Valorant */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center flex-md-row-reverse">
          <Col xs={12} md={4} lg={3} onClick={handleValorantPromoClick} style={{ cursor: 'pointer' }}>
            <img src={promoVal} alt="Promoción Valorant" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
          <Col xs={12} md={8} lg={9} className="products-container">
            {valorantProducts.map(product => (
              <div 
                key={product.idProducto} 
                className="discounted-product-card" 
                style={{ cursor: 'pointer', margin: '0 3px' }} 
                onClick={() => navigate(`/producto/${product.idProducto}`)}
              >
                {product.estado && (
                  <div className={`product-label ${product.estado.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.estado}
                  </div>
                )}
                <img src={product.imagen} alt={product.nombre} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.nombre}</h3>
                <p className="discounted-product-price">
                  <span className="discounted-price">
                    ${(product.precio * (1 - (product.descuento || 0))).toLocaleString('es-CL')}
                  </span>
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
            <Col 
              key={cat.name} 
              xs={12} sm={6} md={4} lg={3} 
              className="category-card" 
              onClick={() => handleCategoryClick(cat.filtro)} 
              style={{ cursor: 'pointer' }}
            >
              <img src={cat.image} alt={cat.name} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sección de envío gratis */}
      <Container className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} lg={9} className="products-container">
            {freeShippingProducts.map(product => (
              <div 
                key={product.idProducto} 
                className="discounted-product-card" 
                style={{ cursor: 'pointer', margin: '0 3px' }} 
                onClick={() => navigate(`/producto/${product.idProducto}`)}
              >
                {product.estado && (
                  <div className={`product-label ${product.estado.toLowerCase().replace(/\s/g, '-')}`}>
                    {product.estado}
                  </div>
                )}
                <img src={product.imagen} alt={product.nombre} className="discounted-product-image" />
                <h3 className="discounted-product-name">{product.nombre}</h3>
                <p className="discounted-product-price">
                  <span className="discounted-price">
                    ${(product.precio * (1 - (product.descuento || 0))).toLocaleString('es-CL')}
                  </span>
                </p>
                <p className="payment-method">Transferencias</p>
              </div>
            ))}
          </Col>
          <Col 
            xs={12} md={4} lg={3} 
            onClick={() => onShowFreeShipping && onShowFreeShipping()} 
            style={{ cursor: 'pointer' }}
          >
            <img src={promoImage2} alt="Promoción Envío Gratis" className="promo-image" style={{ objectFit: 'contain' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
