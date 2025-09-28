// src/components/Home.js
import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Home.css';


// Importar imágenes locales
import ps5Image from '../assets/ps5.jpg';
import controladorImage from '../assets/controlador-xbox.jpg';
import sillaImage from '../assets/silla.jpg';
import audiImage from '../assets/audifonos.jpg';
import mouseImage from '../assets/mouse.jpg';
import tecladoImage from '../assets/teclado.jpg';

export default function Home() {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    {
      key: 0,
      content: <img src={ps5Image} alt="PlayStation 5" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    },
    {
      key: 1,
      content: <img src={controladorImage} alt="Controlador Xbox" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    },
    {
      key: 2,
      content: <img src={sillaImage} alt="Silla Gamer" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    },
    {
      key: 3,
      content: <img src={audiImage} alt="Audifono Gamer" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    },
    {
      key: 4,
      content: <img src={mouseImage} alt="Mouse Gamer" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    },
    {
      key: 5,
      content: <img src={tecladoImage} alt="Teclado Gamer   " style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
    }
  ];

  return (
    <div style={{ padding: 20, color: '#fff', fontFamily: "'Roboto', sans-serif" }}>
      <h2>Quiénes somos</h2>
      <p>
        Level-Up Gamer es una tienda online que ofrece productos de alta calidad para gamers en todo Chile,
        con una experiencia de compra única y un compromiso con la comunidad gamer.
      </p>

      <h2 style={{ marginTop: 40 }}>Productos destacados</h2>
      <div style={{ width: '90%', margin: '0 auto', height: '350px' }}>
        <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={2}       // Aumentar para mostrar 3 imágenes a cada lado (ajusta según prefieras)
            showNavigation={true}
            animationConfig={config.gentle}
            onGoToSlide={setGoToSlide}
            autoplay={true}
            interval={3000}
            springConfig={{ mass: 1, tension: 120, friction: 20 }}  // Ajusta la suavidad
        />
      </div>
    </div>
  );
}
