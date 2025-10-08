import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import SearchDropdown from '../ui/SearchDropdown';
import '../../styles/Navbar.css';
import '../../styles/GlitchText.css';
import GlitchText from '../ui/GlitchText';

import { useNavbar } from '../../services/Navbar';

export default function Navbar({ user, onNavChange, cartCount, products, onSelectProduct, clearSignal, onLogout }) {
  const {
    showCommunityMenu,
    handleCommunityEnter,
    handleCommunityLeave,
    handleNavChange,
    handleLogout
  } = useNavbar(onNavChange, onLogout);

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => handleNavChange('home')}
        style={{ cursor: 'pointer' }}
      >
        <GlitchText speed={1} enableShadows enableOnHover>
          Level-Up Gamer
        </GlitchText>
      </div>

      <SearchDropdown
        products={products}
        onSelectProduct={onSelectProduct}
        clearSignal={clearSignal}
      />

      <ul className="navbar-links">
        <li
          className="community-menu"
          onMouseEnter={handleCommunityEnter}
          onMouseLeave={handleCommunityLeave}
          style={{ position: 'relative' }}
        >
          <button className="community-button">
            Comunidad ▼
          </button>
          {showCommunityMenu && (
            <div
              className="community-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#222',
                padding: '10px',
                borderRadius: '4px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
                zIndex: 1000
              }}
            >
              <button
                className="dropdown-item"
                onClick={() => handleNavChange('noticias')}
                style={{
                  display: 'block',
                  width: '200px',
                  marginBottom: '5px',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <strong>Noticias</strong><br />
                <small>Últimas noticias y novedades</small>
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleNavChange('eventos')}
                style={{
                  display: 'block',
                  width: '200px',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <strong>Eventos</strong><br />
                <small>Próximas actividades y encuentros</small>
              </button>
            </div>
          )}
        </li>

        {user ? (
          <>
            <li><button onClick={() => handleNavChange('miCuenta')}>Mi Cuenta</button></li>
            <li><button onClick={handleLogout}>Cerrar sesión</button></li>
          </>
        ) : (
          <li><button onClick={() => handleNavChange('login')}>Registro / Login</button></li>
        )}

        <li><button onClick={() => handleNavChange('catalogo')}>Catálogo</button></li>

        <li>
          <button onClick={() => handleNavChange('carrito')} className="cart-button">
            <FaShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge" key={cartCount}>{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}
