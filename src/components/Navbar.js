import React from 'react';
import './Navbar.css';

export default function Navbar({ onNavChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Level-Up Gamer</div>
      <ul className="navbar-links">
        <li><button onClick={() => onNavChange('home')}>Inicio</button></li>
        <li><button onClick={() => onNavChange('login')}>Registro / Login</button></li>
        <li><button onClick={() => onNavChange('catalogo')}>Catálogo</button></li>
        <li><button onClick={() => onNavChange('carrito')}>Carrito</button></li>
      </ul>
    </nav>
  );
}
