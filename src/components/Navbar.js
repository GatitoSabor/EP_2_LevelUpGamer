import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import SearchDropdown from './SearchDropdown';
import '../styles/Navbar.css';
import '../styles/GlitchText.css';
import GlitchText from './GlitchText';

export default function Navbar({ user, onNavChange, cartCount, products, onSelectProduct, clearSignal, onLogout }) {
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => onNavChange('home')}
        style={{ cursor: 'pointer' }}
      >
        <GlitchText speed={1} enableShadows={true} enableOnHover={true}>
          Level-Up Gamer
        </GlitchText>
      </div>

      <SearchDropdown 
        products={products} 
        onSelectProduct={onSelectProduct} 
        clearSignal={clearSignal} 
      />

      <ul className="navbar-links">
        {/* Comunidad primero */}
        <li 
          className="community-menu"
          onMouseEnter={() => setShowCommunityMenu(true)}
          onMouseLeave={() => setShowCommunityMenu(false)}
          style={{ position: 'relative' }}
        >
          <button className="community-button">
            Comunidad ▼
          </button>
          {showCommunityMenu && (
            <div className="community-dropdown" 
              style={{
                position: 'absolute', 
                top: '100%', 
                left: 0, 
                backgroundColor: '#222', 
                padding: '10px', 
                borderRadius: '4px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
              }}
            >
              <button 
                className="dropdown-item" 
                onClick={() => onNavChange('noticias')}
                style={{ display: 'block', width: '200px', marginBottom: '5px', color: 'white', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
              >
                <strong>Noticias</strong><br />
                <small>Últimas noticias y novedades</small>
              </button>
              <button 
                className="dropdown-item" 
                onClick={() => onNavChange('eventos')}
                style={{ display: 'block', width: '200px', color: 'white', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
              >
                <strong>Eventos</strong><br />
                <small>Próximas actividades y encuentros</small>
              </button>
            </div>
          )}
        </li>

        {/* Otros botones */}
        {user ? (
          <>
            <li><button onClick={() => onNavChange('miCuenta')}>Mi Cuenta</button></li>
            <li><button onClick={onLogout}>Cerrar sesión</button></li>
          </>
        ) : (
          <>
            <li><button onClick={() => onNavChange('login')}>Registro / Login</button></li>
          </>
        )}
        <li><button onClick={() => onNavChange('catalogo')}>Catálogo</button></li>
        <li>
          <button onClick={() => onNavChange('carrito')} className="cart-button">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="cart-badge" key={cartCount}>
                {cartCount}
              </span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
