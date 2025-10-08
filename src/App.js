import React, { useState, useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Catalog from './components/pages/Catalog';
import AuthTabs from './components/forms/AuthTabs';
import Footer from './components/layout/Footer';
import ProductDetailModal from './components/pages/ProductDetailModal';
import MiCuenta from './components/pages/MiCuenta';
import products from './data/products';
import Noticias from './components/pages/Noticias';
import CheckoutStepper from './components/pages/CheckoutStepper';
import Eventos from './components/pages/Eventos';
import Terminos from './components/pages/Terminos';
import FormularioContacto from './components/pages/FormularioContacto';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function puedeAplicarDescuento(cupon, producto) {
  if (cupon.id === 1 || cupon.id === 2) {
    return !producto.discount && producto.price <= 1000000;
  }
  if (cupon.id === 3) {
    return true;
  }
  if (cupon.id === 4) {
    return true; // Envío gratis se activa aparte
  }
  return false;
}

export default function App() {
  

  
  const [user, setUser] = useState(null);
  const [direcciones, setDirecciones] = useState(user?.direcciones || []);
  const [activeTab, setActiveTab] = useState('compras');
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('');


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

  const [couponCode, setCouponCode] = useState(''); // para guardar el código ingresado
  const [discountPercent, setDiscountPercent] = useState(0); // descuento activo
  const [couponError, setCouponError] = useState(''); // mensaje de error cupón
  const [cuponesInternos, setCuponesInternos] = useState(user ? user.cupones || [] : []);

  const [clienteData, setClienteData] = useState({ nombre: '', email: '' });
  const [direccionData, setDireccionData] = useState({ direccion: '', ciudad: '' });
  const [pagoData, setPagoData] = useState({ numeroTarjeta: '', expiracion: '' });
  const [showCheckout, setShowCheckout] = useState(false);


  const cuponesDisponibles = [
    { codigo: "DESC10", descripcion: "10% de descuento...", descuento: 10, usosRestantes: 1 },
    { codigo: "ENVIOGRATIS", descripcion: "Envío gratis...", descuento: 0, usosRestantes: 1 }
  ];

  /*
  useEffect(() => {
    if (!couponCode) {
      setDiscountPercent(0);
      setCouponError('');
      setShowFreeShippingOnly(false);
      return;
    }

    const cupGeneral = cuponesDisponibles.find(c => c.codigo.toUpperCase() === couponCode.toUpperCase().trim());
    const cupInterno = cuponesInternos.find(c => c.codigo.toUpperCase() === couponCode.toUpperCase().trim());
    const cuponActivo = cupInterno || cupGeneral;

    if (!cuponActivo) {
      setDiscountPercent(0);
      setCouponError('Código de cupón inválido');
      setShowFreeShippingOnly(false);
      return;
    }

    if (cuponActivo.id === 4) {
      setDiscountPercent(0);
      setCouponError('');
      setShowFreeShippingOnly(true);
    } else {
      const valido = cart.every(producto => puedeAplicarDescuento(cuponActivo, producto));
      if (!valido) {
        setDiscountPercent(0);
        setCouponError('No puedes aplicar este cupón a todos los productos de tu carrito.');
        setShowFreeShippingOnly(false);
      } else {
        setDiscountPercent(cuponActivo.descuento || 0);
        setCouponError('');
        setShowFreeShippingOnly(false);
      }
    }
  }, [cart, couponCode, cuponesDisponibles, cuponesInternos]);*/


  const handleFinishCheckout = (compra) => {
    // Guardar compra en compras del usuario
    if(user) {
      const usuarios = getUsuariosStorage();
      const idx = usuarios.findIndex(u => u.username === user.username);
      if(idx >= 0) {
        usuarios[idx].compras = [...usuarios[idx].compras, ...compra];
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        setUser(usuarios[idx]);
      }
      setCompras(prev => [...prev, ...compra]); // Actualizar estado local compras si tienes
    }

    // Vaciar carrito y discount code
    setCart([]);
    setDiscountPercent(0);
    setCouponCode('');
    
    // Cambiar página a home
    setPage('home'); // Redirige al inicio o al carrito
    
    // Opcional: Si quieres mostrar carrito, deberías cambiar el estado para mostrar carrito
    // Por ejemplo: setShowCheckout(false); y el render muestra carrito cuando showCheckout=false
    setShowCheckout(false);
  };
// Ahora la función handleApplyCoupon solo limpia errores,
// para activarse la validación y el descuento es dinámico con useEffect
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
    // Ejemplo: activar envío gratis
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

  const handleCheckout = () => {
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

        // Actualiza localStorage también
        const usuarios = getUsuariosStorage();
        const idx = usuarios.findIndex(u => u.username === user.username);
        if (idx > -1) {
          usuarios[idx] = newUser;
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      }
    }


    // Resto del checkout...
    const comprasConDescuento = cart.map(item => {
      const precioFinal = item.price * (1 - (item.discount ?? 0)) * (1 - discountPercent / 100);
      return { ...item, precioConDescuento: precioFinal };
    });

    setCompras(prevCompras => [...prevCompras, ...comprasConDescuento]);
    setCart([]);
    setDiscountPercent(0);
    setCouponCode('');
    setCouponError('');
    alert('Compra realizada con éxito');
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

        // Actualiza localStorage también
        const usuarios = getUsuariosStorage();
        const idx = usuarios.findIndex(u => u.username === user.username);
        if (idx > -1) {
          usuarios[idx] = newUser;
          localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
      }
    }

    const comprasConDescuento = cart.map(item => {
      const precioFinal = item.price * (1 - (item.discount ?? 0)) * (1 - discountPercent / 100);
      return { ...item, precioConDescuento: precioFinal };
    });

    // Guardar compras en estado global y en user
    setCompras(prevCompras => [...prevCompras, ...comprasConDescuento]);

    // Limpiar carrito, cupones y errores
    setCart([]);
    setDiscountPercent(0);
    setCouponCode('');
    setCouponError('');

    alert('Compra realizada con éxito');

    // Redirigir y cerrar checkout
    setPage('home'); // o 'carrito' si quieres mostrar carrito
    setShowCheckout(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };


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
  const goToCart = () => {
    setPage('carrito'); // o como manejes la página del carrito
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

  const precioConDescuento = totalPrice * (1 - discountPercent / 100);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Leer usuarios de localStorage o comenzar vacio
const getUsuariosStorage = () => {
  const usuarios = localStorage.getItem('usuarios');
  return usuarios ? JSON.parse(usuarios) : [];
};

// Función para manejar selección de producto (de productos relacionados)
const handleSelectProduct = (product) => {
  setSelectedProduct(product);
  setPage('ProductDetailModal');  // o la página/modal que uses para ver producto
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
    fullName: datosUsuario.fullName,  // corresponde el nombre
    rut: datosUsuario.rut,
    fechaNacimiento: datosUsuario.birthDate,  // fecha recibida
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

  if (!usuario) {
    alert('Usuario o contraseña incorrectos');
    return;
  }

  setUser(usuario);
  setPage('miCuenta');
};

// Para agregar compras
const handleGuardarCompra = (compra) => {
  const usuarios = getUsuariosStorage();
  const index = usuarios.findIndex(u => u.username === user.username);

  if (index >= 0) {
    usuarios[index].compras = [...usuarios[index].compras, ...compra];
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    setUser(usuarios[index]); // actualizar estado usuario con compras nuevas
  }
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

  // Sincronizar direcciones del user cuando cambia user
  useEffect(() => {
    if (user?.direcciones) {
      setDirecciones(user.direcciones);
    }
  }, [user]);

  useEffect(() => {
    if (page !== 'catalogo') {
      // Al salir del catálogo, resetea todos los filtros
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
    setCategoriaFiltrada(categoria); // o "" para limpiar
    setPage('catalogo');
  };

  const handleShowDiscountProducts = () => {
    setShowDiscountOnly(true);
    setPage('catalogo');
  };

  const handleShowValorantProducts = () => {
    setShowValorantOnly(true);
    setShowDiscountOnly(false); // aseguramos que el filtro descuento no esté activo
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
          setCuponesInternos={setCuponesInternos} />
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
                onShowFreeShipping={handleShowFreeShipping} // función que definiste en el padre
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
                products={products}
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

                {/* Mensaje de descuento activo */}
                {discountPercent > 0 && (
                  <div className="active-discount-message">
                    Tienes un descuento activo del {discountPercent}% aplicado en tu compra.
                  </div>
                )}

                {/* Campo para ingresar cupón */}
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
                        <div key={item.id} className="cart-item">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image"
                          />
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
                              $
                              {(
                                item.price *
                                (1 - (item.discount ?? 0))
                              ).toLocaleString('es-CL')}
                            </p>
                            {item.discount && item.discount > 0 && (
                              <>
                                <p className="price-original">
                                  {item.price.toLocaleString('es-CL')}
                                </p>
                                <p className="discount-label">Producto con descuento</p>
                              </>
                            )}
                            <p className="payment-method">Transferencias</p>
                            <p className="subtotal">
                              $
                              {(
                                item.price *
                                (1 - (item.discount ?? 0)) *
                                item.quantity *
                                0.94
                              ).toLocaleString('es-CL')}
                            </p>
                          </div>
                          <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
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
      setCompraSeleccionada={setCompraSeleccionada}/>
    </div>
  );
}
