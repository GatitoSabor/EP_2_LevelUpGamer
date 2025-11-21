import React, { useState, useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import ProductDetailModal from './components/pages/ProductDetailModal';
import AuthTabs from './components/forms/AuthTabs';
import MiCuenta from './components/pages/MiCuenta';
import Noticias from './components/pages/Noticias';
import CheckoutStepper from './components/pages/CheckoutStepper';
import Eventos from './components/pages/Eventos';
import Terminos from './components/pages/Terminos';
import FormularioContacto from './components/pages/FormularioContacto';
import ProductService from './services/ProductService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/pages/Dashboard';

import './App.css';

function puedeAplicarDescuento(cupon, producto) {
  if (cupon.id === 1 || cupon.id === 2) {
    return !producto.descuento && producto.precio <= 1000000;
  }
  if (cupon.id === 3 || cupon.id === 4) {
    return true;
  }
  return false;
}

export default function App() {
  const [user, setUser] = useState(null);
  const [direcciones, setDirecciones] = useState(user?.direcciones || []);
  const [activeTab, setActiveTab] = useState('compras');
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('');

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [showValorantOnly, setShowValorantOnly] = useState(false);
  const [showFreeShippingOnly, setShowFreeShippingOnly] = useState(false);
  const [clearSearch, setClearSearch] = useState(false);
  const [compras, setCompras] = useState(() => {
    const saved = localStorage.getItem('compras');
    return saved ? JSON.parse(saved) : [];
  });

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [cuponesInternos, setCuponesInternos] = useState(user ? user.cupones || [] : []);

  const [clienteData, setClienteData] = useState({ nombre: '', email: '' });
  const [direccionData, setDireccionData] = useState({ direccion: '', ciudad: '' });
  const [pagoData, setPagoData] = useState({ numeroTarjeta: '', expiracion: '' });
  const [showCheckout, setShowCheckout] = useState(false);

  const cuponesDisponibles = [
    { codigo: "DESC10", descripcion: "10% de descuento...", descuento: 10, usosRestantes: 1 },
    { codigo: "ENVIOGRATIS", descripcion: "Envío gratis...", descuento: 0, usosRestantes: 1 }
  ];

  useEffect(() => {
    setLoadingProducts(true);
    ProductService.getAll()
      .then(response => {
        console.log('Productos cargados desde backend:', response.data);
        setProducts(response.data);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setProducts([]);
      })
      .finally(() => setLoadingProducts(false));
  }, []);

  const handleFinishCheckout = (compra) => {
    if(user) {
      const usuarios = getUsuariosStorage();
      const idx = usuarios.findIndex(u => u.username === user.username);
      if(idx >= 0) {
        usuarios[idx].compras = [...usuarios[idx].compras, ...compra];
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        setUser(usuarios[idx]);
      }
      setCompras(prev => [...prev, ...compra]);
    }
    setCart([]);
    setDiscountPercent(0);
    setCouponCode('');
    setPage('home');
    setShowCheckout(false);
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setCouponError('Por favor ingresa un código');
      setDiscountPercent(0);
      return;
    }

    const cupGeneral = cuponesDisponibles.find(c => c.codigo.toUpperCase() === code);
    const cupInterno = cuponesInternos.find(c => c.codigo.toUpperCase() === code);
    const cuponActivo = cupInterno || cupGeneral;

    if (!cuponActivo) {
      setCouponError('Cupón inválido');
      setDiscountPercent(0);
      return;
    }

    if (cuponActivo.id === 4) {
      setDiscountPercent(0);
      setCouponError('');
      setShowFreeShippingOnly(true);
    } else {
      const valido = cart.every(producto => puedeAplicarDescuento(cuponActivo, producto));
      if (!valido) {
        setCouponError('No puedes aplicar este cupón a todos los productos de tu carrito.');
        setDiscountPercent(0);
        setShowFreeShippingOnly(false);
      } else {
        setDiscountPercent(cuponActivo.descuento || 0);
        setCouponError('');
        setShowFreeShippingOnly(false);
        alert(`Cupón aplicado! Tienes un descuento del ${cuponActivo.descuento}%`);
      }
    }
  };

  const handleStartCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    if (!user) {
      alert('Debes iniciar sesión para realizar una compra.');
      setPage('login');
      return;
    }
    setShowCheckout(true);
  };

  useEffect(() => {
    if (user) {
      setCuponesInternos(user.cupones || []);
      setDirecciones(user.direcciones || []);
    }
  }, [user]);

  const actualizarDirecciones = (nuevasDirecciones) => {
    setDirecciones(nuevasDirecciones);
    setUser(prev => ({ ...prev, direcciones: nuevasDirecciones }));
  };

  const handleCompleteCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    if (!user) {
      alert('Debes iniciar sesión para realizar una compra.');
      setPage('login');
      return;
    }

    if (couponCode) {
      setCuponesInternos(prevCupones =>
        prevCupones
          .map(c =>
            c.codigo.toUpperCase() === couponCode.toUpperCase()
              ? { ...c, usosRestantes: (c.usosRestantes || 1) - 1 }
              : c
          )
          .filter(c => !(c.codigo.toUpperCase() === couponCode.toUpperCase() && (c.usosRestantes || 1) <= 0))
      );

      if (user) {
        const newUser = {
          ...user,
          cupones: (user.cupones || [])
            .map(c =>
              c.codigo.toUpperCase() === couponCode.toUpperCase()
                ? { ...c, usosRestantes: (c.usosRestantes || 1) - 1 }
                : c
            )
            .filter(c => !(c.codigo.toUpperCase() === couponCode.toUpperCase() && (c.usosRestantes || 1) <= 0)),
        };
        setUser(newUser);

        const usuarios = getUsuariosStorage();
        const idx = usuarios.findIndex(u => u.username === user.username);
        if (idx > -1) {
          usuarios[idx] = newUser;
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      }
    }

    const comprasConDescuento = cart.map(item => {
      const precioFinal = item.precio * (1 - (item.descuento ?? 0)) * (1 - discountPercent / 100);
      return { ...item, precioConDescuento: precioFinal };
    });

    setCompras(prevCompras => [...prevCompras, ...comprasConDescuento]);
    setCart([]);
    setDiscountPercent(0);
    setCouponCode('');
    setCouponError('');
    alert('Compra realizada con éxito');
    setPage('home');
    setShowCheckout(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.idProducto === product.idProducto);
      if (existing) {
        return prevCart.map(item =>
          item.idProducto === product.idProducto ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const goToCart = () => setPage('carrito');

  const incrementQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.idProducto === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.idProducto === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.idProducto !== id));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * (1 - (item.descuento ?? 0)) * item.quantity,
    0
  );

  const precioConDescuento = totalPrice * (1 - discountPercent / 100);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const getUsuariosStorage = () => {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setPage('ProductDetailModal');
  };

    const handleSignUp = (datosUsuario) => {
    const usuarios = getUsuariosStorage();
    const existe = usuarios.some(u => u.username === datosUsuario.username);
    
    if (existe) {
      alert('Usuario ya existe');
      return;
    }

    const esDuoc = datosUsuario.email.toLowerCase().endsWith('@duoc.cl');
    const nuevoUsuario = {
      username: datosUsuario.username,
      password: datosUsuario.password,
      fullName: datosUsuario.fullName,
      rut: datosUsuario.rut,
      fechaNacimiento: datosUsuario.birthDate,
      email: datosUsuario.email,
      compras: [],
      cupones: esDuoc ? [{ codigo: 'DUOC20', descuento: 20, id: 2 }] : [],
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuario registrado exitosamente');
    setPage('login');
  };

  const handleLogin = ({ username, password }) => {
    const usuarios = getUsuariosStorage();
    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (username === 'admin' && password === 'admin123') {
      setUser({ username: 'admin', role: 'admin' });
      setPage('dashboard');
      return;
    }
    if (!usuario) {
      alert('Usuario o contraseña incorrectos');
      return;
    }

    setUser(usuario);
    setPage('miCuenta');
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setPage('home');
    setSelectedProduct(null);
  };

  const goToPage = (newPage) => {
    if (newPage === 'catalogo') {
      setShowDiscountOnly(false);
      setShowValorantOnly(false);
      setShowFreeShippingOnly(false);
    }
    setPage(newPage);
    setSelectedProduct(null);
    setClearSearch(true);
  };

  useEffect(() => {
    if (clearSearch) {
      setClearSearch(false);
    }
  }, [clearSearch]);

  useEffect(() => {
    if (user?.direcciones) {
      setDirecciones(user.direcciones);
    }
  }, [user]);

  useEffect(() => {
    if (page !== 'catalogo') {
      setShowDiscountOnly(false);
      setShowValorantOnly(false);
      setShowFreeShippingOnly(false);
      setCategoriaFiltrada('');
    }
  }, [page]);
  
  const handleShowCategory = (categoria) => {
    setShowDiscountOnly(false);
    setShowValorantOnly(false);
    setShowFreeShippingOnly(false);
    setCategoriaFiltrada(categoria);
    setPage('catalogo');
  };

  const handleShowDiscountProducts = () => {
    setShowDiscountOnly(true);
    setPage('catalogo');
  };

  const handleShowValorantProducts = () => {
    setShowValorantOnly(true);
    setShowDiscountOnly(false);
    setPage('catalogo');
  };

  const handleShowFreeShipping = () => {
    setShowFreeShippingOnly(true);
    setShowDiscountOnly(false);
    setShowValorantOnly(false);
    setCategoriaFiltrada('');
    setPage('catalogo');
  };

  const handleGoToRegister = () => {
    setPage('signup');
  };

  if (loadingProducts) {
    return <div className="loading-screen">Cargando productos...</div>;
  }

  return (
    <div className="app">
      <Navbar
        user={user}
        onNavChange={goToPage}
        cartCount={totalItems}
        products={products}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setPage('catalogo');
        }}
        clearSignal={clearSearch}
        onLogout={handleLogout}
      />

      <main className="main-content">
        {!user && (page === 'login' || page === 'signup') ? (
          <AuthTabs onLogin={handleLogin} onSignUp={handleSignUp} />
        ) : selectedProduct ? (
          <ProductDetailModal
            product={selectedProduct}
            onAddToCart={addToCart}
            onClose={closeModal}
            onGoToCart={goToCart}
            onBuyNow={() => alert('Función comprar ahora no implementada')}
            onSelectProduct={handleSelectProduct}
            allProducts={products}
          />
        ) : page === 'miCuenta' && user ? (
          <MiCuenta
            activeTab={activeTab}
          setActiveTab={setActiveTab}
          compraSeleccionada={compraSeleccionada}
          setCompraSeleccionada={setCompraSeleccionada}
          user={user}
          setUser={setUser}
          direcciones={direcciones}
          setDirecciones={actualizarDirecciones}
          compras={compras}
          cupones={cuponesInternos}
          setCuponesInternos={setCuponesInternos}
        />
      ) : (
        <>
          {page === 'home' && (
            <Home
              onAddToCart={addToCart}
              onSelectProduct={handleSelectProduct}
              onGoToCart={goToCart}
              onBuyNow={() => alert('Función comprar ahora no implementada')}
              onShowDiscountProducts={handleShowDiscountProducts}
              onShowValorantProducts={handleShowValorantProducts}
              onShowNews={() => goToPage('noticias')}
              onShowEvents={() => goToPage('eventos')}
              onShowCategory={handleShowCategory}
              onShowFreeShipping={handleShowFreeShipping}
              onGoToRegister={handleGoToRegister}
            />
          )}

          {page === 'catalogo' && (
            <Catalog
              key={
                showDiscountOnly
                  ? 'with-discount'
                  : showValorantOnly
                  ? 'with-valorant'
                  : 'normal'
              }
              onAddToCart={addToCart}
              setSelectedProduct={setSelectedProduct}
              showFreeShippingOnly={showFreeShippingOnly}
              setShowFreeShippingOnly={setShowFreeShippingOnly}
              initialFilters={{
                soloConDescuento: showDiscountOnly,
                juego: showValorantOnly ? 'Valorant' : '',
                envioGratis: showFreeShippingOnly,
                categoria: categoriaFiltrada,
              }}
            />
          )}

          {page === 'dashboard' && user?.role === 'admin' && (
            <Dashboard />
          )}

          {page === 'carrito' && (
            showCheckout ? (
              <CheckoutStepper
                user={user}
                setUser={setUser}
                cart={cart}
                cartItems={cart}
                direcciones={direcciones}
                setDirecciones={setDirecciones}
                discountPercent={discountPercent}
                onFinishCheckout={handleCompleteCheckout}
                clienteData={clienteData}
                setClienteData={setClienteData}
                direccionData={direccionData}
                setDireccionData={actualizarDirecciones}
                pagoData={pagoData}
                setPagoData={setPagoData}
              />
            ) : (
              <section className="cart">
                <h2>
                  Carro ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </h2>

                {discountPercent > 0 && (
                  <div className="active-discount-message">
                    Tienes un descuento activo del {discountPercent}% aplicado en tu compra.
                  </div>
                )}

                <div className="coupon-apply">
                  <input
                    type="text"
                    placeholder="Ingrese código de cupón"
                    value={couponCode}
                    onChange={e => { setCouponCode(e.target.value); setCouponError(''); }}
                  />
                  <button onClick={handleApplyCoupon}>Aplicar</button>
                </div>
                {couponError && <p className="coupon-error">{couponError}</p>}

                <div className="cart-content">
                  <div className="cart-items">
                    {cart.length === 0 ? (
                      <p>No hay productos en el carrito.</p>
                    ) : (
                      cart.map((item) => (
                        <div key={item.idProducto} className="cart-item">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="cart-item-image"
                          />
                          <div className="cart-item-info">
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                            <div className="quantity-controls">
                              <button onClick={() => decrementQuantity(item.idProducto)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => incrementQuantity(item.idProducto)}>+</button>
                            </div>
                          </div>
                          <div className="cart-item-pricing">
                            <p className="price-discounted">
                              $
                              {(
                                item.precio *
                                (1 - (item.descuento ?? 0))
                              ).toLocaleString('es-CL')}
                            </p>
                            {item.descuento && item.descuento > 0 && (
                              <>
                                <p className="price-original">
                                  {item.precio.toLocaleString('es-CL')}
                                </p>
                                <p className="discount-label">Producto con descuento</p>
                              </>
                            )}
                            <p className="payment-method">Transferencias</p>
                            <p className="subtotal">
                              $
                              {(
                                item.precio *
                                (1 - (item.descuento ?? 0)) *
                                item.quantity *
                                0.94
                              ).toLocaleString('es-CL')}
                            </p>
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.idProducto)}
                          >
                            Eliminar
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  <aside className="cart-summary">
                    <h3>Resumen ({cart.length} productos)</h3>
                    <div className="summary-row">
                      <p>Pago con transferencias</p>
                      <p className="summary-price">${(precioConDescuento * 0.94).toLocaleString('es-CL')}</p>
                      <small>Transferencia y Banco Estado</small>
                    </div>
                    <div className="summary-row">
                      <p>Otros medios de pago</p>
                      <p className="summary-price">${precioConDescuento.toLocaleString('es-CL')}</p>
                      <small>Webpay/Onepay</small>
                    </div>
                    {discountPercent > 0 && (
                      <div className="summary-row discount">
                        <p>Descuento aplicado</p>
                        <p className="summary-price">- ${Math.round(totalPrice - precioConDescuento).toLocaleString('es-CL')}</p>
                      </div>
                    )}
                    <div className="summary-total">
                      <p>TOTAL</p>
                      <p>${precioConDescuento.toLocaleString('es-CL')}</p>
                    </div>
                    <button className="checkout-btn" onClick={handleStartCheckout}>Iniciar pago</button>
                  </aside>
                </div>
              </section>
            )
          )}
          {page === 'noticias' && <Noticias onNavigate={goToPage} />}
          {page === 'eventos' && <Eventos onNavigate={goToPage} />}
          {page === 'contacto' && <FormularioContacto />}
          {page === 'terminos' && <Terminos />}
        </>
      )}
    </main>

    <Footer
      onNavigate={setPage}
      setCompraSeleccionada={setCompraSeleccionada}
    />
  </div>
  );
}
