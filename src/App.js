import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import AuthTabs from './components/AuthTabs';
import Footer from './components/Footer';
import './App.css';

import sillaImg from './assets/silla.jpg';
import controladorXboxImg from './assets/controlador-xbox.jpg';
import ps5Img from './assets/ps5.jpg';
import audiImage from './assets/audifonos.jpg';
import mouseImage from './assets/mouse.jpg';
import tecladoImage from './assets/teclado.jpg';
import monitorImage from './assets/monitorImage.jpg';
import pcGamerImage from './assets/pc.jpg';
import sillaAudiImage from './assets/sillaud.jpg';
import cajaPcImage from './assets/gabinete.jpg';
import switchImage from './assets/switch.jpg';
import bluetoothHeadsetImage from './assets/audib.jpg';

const products = [
  {
    id: "SG001",
    name: "Silla Gamer Secretlab Titan",
    description: "Comodidad y ergonomía para largas sesiones de juego.",
    price: 349990,
    image: sillaImg,
    marca: "Secretlab",
    categoria: "Sillas Gamer"
  },
  {
    id: "AC001",
    name: "Controlador Xbox Series X",
    description: "Control inalámbrico preciso y cómodo para Xbox y PC.",
    price: 59990,
    image: controladorXboxImg,
    marca: "Microsoft",
    categoria: "Controles"
  },
  {
    id: "CO001",
    name: "PlayStation 5",
    description: "Consola de última generación para gaming inmersivo.",
    price: 549990,
    image: ps5Img,
    marca: "Sony",
    categoria: "Consolas"
  },
  {
    id: 'AU001',
    name: 'Auriculares Gamer Audi',
    description: 'Auriculares con sonido envolvente y micrófono.',
    price: 79990,
    image: audiImage,
    marca: "Audi",
    categoria: "Audio"
  },
  {
    id: 'MO001',
    name: 'Mouse Gamer RGB',
    description: 'Mouse con iluminación RGB y alta precisión.',
    price: 39990,
    image: mouseImage,
    marca: "Corsair",
    categoria: "Periféricos"
  },
  {
    id: 'TE001',
    name: 'Teclado Mecánico',
    description: 'Teclado mecánico con retroiluminación customizable.',
    price: 99990,
    image: tecladoImage,
    marca: "Logitech",
    categoria: "Periféricos"
  },
  {
    id: 'MO002',
    name: 'Monitor Gamer 24"',
    description: 'Monitor Full HD con 144Hz y bajo tiempo de respuesta.',
    price: 159990,
    image: monitorImage,
    marca: "ASUS",
    categoria: "Monitores"
  },
  {
    id: 'PC001',
    name: 'PC Gamer Completa',
    description: 'PC con procesador Intel i7, 16GB RAM y tarjeta RTX 3060.',
    price: 1249990,
    image: pcGamerImage,
    marca: "HP",
    categoria: "Computadoras"
  },
  {
    id: 'AS001',
    name: 'Silla Ergonómica Audi',
    description: 'Silla con soporte lumbar y materiales premium.',
    price: 259990,
    image: sillaAudiImage,
    marca: "Audi",
    categoria: "Sillas Gamer"
  },
  {
    id: 'CA001',
    name: 'Gabinete de PC Gamer RGB',
    description: 'Gabinete con panel de vidrio templado y ventilación eficiente.',
    price: 69990,
    image: cajaPcImage,
    marca: "Cooler Master",
    categoria: "Componentes"
  },
  {
    id: 'CO002',
    name: 'Consola Nintendo Switch',
    description: 'Consola híbrida para juego portátil y televisión.',
    price: 299990,
    image: switchImage,
    marca: "Nintendo",
    categoria: "Consolas"
  },
  {
    id: 'AU002',
    name: 'Auriculares Bluetooth',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    price: 54990,
    image: bluetoothHeadsetImage,
    marca: "Sony",
    categoria: "Audio"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

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

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
  };

  return (
    <div className="app">
      <Navbar onNavChange={setPage} />

      {!user && (page === 'login' || page === 'signup') ? (
        <AuthTabs onLogin={handleLogin} onSignUp={handleSignUp} />
      ) : (
        <>
          {page === 'home' && <Home />}
          {page === 'catalogo' && (
            <Catalog products={products} onAddToCart={addToCart} />
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
                          <p className="price-discounted">${(item.price * 0.94).toLocaleString('es-CL')}</p>
                          <p className="price-original">${item.price.toLocaleString('es-CL')}</p>
                          <p className="payment-method">Transferencias</p>
                          <p className="subtotal">${(item.price * item.quantity * 0.94).toLocaleString('es-CL')}</p>
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

      <Footer />
    </div>
  );
}
