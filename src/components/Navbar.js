import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import SearchDropdown from './SearchDropdown';
import './Navbar.css';

export default function Navbar({ user, onNavChange, cartCount, products, onSelectProduct, clearSignal, onLogout }) {
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        style={{ cursor: 'pointer' }}
        onClick={() => onNavChange('home')}
      >
        Level-Up Gamer
      </div>

      <SearchDropdown 
        products={products} 
        onSelectProduct={onSelectProduct} 
        clearSignal={clearSignal} 
      />

      <ul className="navbar-links">
        {/* Renderizado condicional: si hay usuario */}
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
