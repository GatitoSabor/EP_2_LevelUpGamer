import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import AuthTabs from './components/AuthTabs';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import products from './products';
import './App.css';


export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };



  const incrementQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };



  const decrementQuantity = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };



  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };



  const totalPrice = cart.reduce(
  (acc, item) => acc + item.price * (1 - (item.discount ?? 0)) * item.quantity,
  0
);


  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

const [clearSearch, setClearSearch] = useState(false);

  const handleLogin = ({ username, password }) => {
    if (username && password) {
      setUser({ username });
      setPage('home');
    } else {
      alert('Por favor completa usuario y contraseña');
    }
  };



  const handleSignUp = ({ username, password }) => {
    alert(`Usuario ${username} registrado con éxito. Por favor inicia sesión.`);
    setPage('login');
  };



  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setPage('home');
    setSelectedProduct(null);
  };



  const goToPage = (newPage) => {
    setPage(newPage);
    setSelectedProduct(null);
    setClearSearch(true);
  };

useEffect(() => {
  if (clearSearch) {
    setClearSearch(false);
  }
}, [clearSearch]);

  return (
  
    <div className="app">
      <Navbar 
        onNavChange={goToPage} 
        cartCount={totalItems} 
        products={products} 
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setPage('catalogo');
        }} 
        clearSignal={clearSearch}
      />

      <main className="main-content">
        {!user && (page === 'login' || page === 'signup') ? (
          <AuthTabs onLogin={handleLogin} onSignUp={handleSignUp} />
        ) : selectedProduct ? (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
            onBuyNow={() => alert('Función comprar ahora no implementada')}
          />
        ) : (
          <>
            {page === 'home' && <Home onAddToCart={addToCart} onBuyNow={() => alert('Función comprar ahora no implementada')} />}
            {page === 'catalogo' && (
              <Catalog products={products} onAddToCart={addToCart} setSelectedProduct={setSelectedProduct} />
            )}
            {page === 'carrito' && (
              <section className="cart">
                <h2>Carro ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
                <div className="cart-content">
                  <div className="cart-items">
                    {cart.length === 0 ? (
                      <p>No hay productos en el carrito.</p>
                    ) : (
                      cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} className="cart-item-image" />
                          <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="quantity-controls">
                              <button onClick={() => decrementQuantity(item.id)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => incrementQuantity(item.id)}>+</button>
                            </div>
                          </div>
                          <div className="cart-item-pricing">
                            <p className="price-discounted">
                              ${ (item.price * (1 - (item.discount ?? 0))).toLocaleString('es-CL') }
                            </p>
                            {item.discount && item.discount > 0 && (
                              <>
                                <p className="price-original">${item.price.toLocaleString('es-CL')}</p>
                                <p className="discount-label">Producto con descuento</p>
                              </>
                            )}
                            <p className="payment-method">Transferencias</p>
                            <p className="subtotal">
                              ${(item.price * (1 - (item.discount ?? 0)) * item.quantity * 0.94).toLocaleString('es-CL')}
                            </p>
                          </div>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                      ))
                    )}
                  </div>
                  <aside className="cart-summary">
                    <h3>Resumen ({cart.length} productos)</h3>
                    <div className="summary-row">
                      <p>Pago con transferencias</p>
                      <p className="summary-price">${(totalPrice * 0.94).toLocaleString('es-CL')}</p>
                      <small>Transferencia y Banco Estado</small>
                    </div>
                    <div className="summary-row">
                      <p>Otros medios de pago</p>
                      <p className="summary-price">${totalPrice.toLocaleString('es-CL')}</p>
                      <small>Webpay/Onepay</small>
                    </div>
                    <div className="summary-total">
                      <p>TOTAL</p><p>-</p>
                    </div>
                    <button className="checkout-btn">Iniciar pago</button>
                  </aside>
                </div>
              </section>
            )}
            {user && (
              <button onClick={handleLogout} style={{ marginTop: '10px' }}>
                Cerrar sesión
              </button>
            )}
          </>
        )}
      </main>



      <Footer />
    </div>
  );
} 