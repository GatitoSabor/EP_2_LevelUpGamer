import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation
} from 'react-router-dom';

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
import Dashboard from './components/pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [direcciones, setDirecciones] = useState(user?.direcciones || []);
  const [activeTab, setActiveTab] = useState('compras');
  const [compraSeleccionada, setCompraSeleccionada] = useState(null);
  const [categoriaFiltrada, setCategoriaFiltrada] = useState('');
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
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
      .then(response => setProducts(response.data))
      .catch(() => setProducts([]))
      .finally(() => setLoadingProducts(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('user', user ? JSON.stringify(user) : '');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('compras', JSON.stringify(compras));
  }, [compras]);

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

  // Define las funciones de filtros aquí:
  const handleShowDiscountProducts = () => {
    setShowDiscountOnly(true);
    setShowValorantOnly(false);
    setShowFreeShippingOnly(false);
    setCategoriaFiltrada('');
    setClearSearch(true);
  };

  const handleShowValorantProducts = () => {
    setShowValorantOnly(true);
    setShowDiscountOnly(false);
    setShowFreeShippingOnly(false);
    setCategoriaFiltrada('');
    setClearSearch(true);
  };

  const handleShowCategory = (categoria) => {
    setCategoriaFiltrada(categoria);
    setShowDiscountOnly(false);
    setShowValorantOnly(false);
    setShowFreeShippingOnly(false);
    setClearSearch(true);
  };

  const handleShowFreeShipping = () => {
    setShowFreeShippingOnly(true);
    setShowDiscountOnly(false);
    setShowValorantOnly(false);
    setCategoriaFiltrada('');
    setClearSearch(true);
  };

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
    // navegación vía react-router ahora, antes era setPage('home');
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

  const handleStartCheckout = async () => {
    if (cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    if (!user) {
      alert('Debes iniciar sesión para realizar una compra.');
      return;
    }

    // Enviar al backend los productos para descontar stock
    try {
      const response = await fetch('http://localhost:8080/api/v1/producto/descontar-stock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
        body: JSON.stringify(cart.map(item => ({
          idProducto: item.idProducto,
          cantidad: item.quantity
        })))
      });
      if (!response.ok) {
        alert('Ocurrió un error al intentar validar la compra o el stock.');
        return;
      }
      // Vacía el carrito y confirma compra
      setCart([]);
      alert('¡Compra realizada con éxito!');
    } catch (error) {
      alert('Error al conectar con el servidor.');
    }
  };


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
      // Aquí navega a login con router
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
    setShowCheckout(false);
  };

  const closeModal = () => setSelectedProduct(null);

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

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSignUp = async (datosUsuario) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre_completo: datosUsuario.fullName,
          rut: datosUsuario.rut,
          fecha_nacimiento: datosUsuario.birthDate,
          edad: calcularEdad(datosUsuario.birthDate),
          correo: datosUsuario.email,
          descuentoDuoc: datosUsuario.email.trim().toLowerCase().endsWith('@duoc.cl'),
          password: datosUsuario.password
        })
      });
      if (response.ok) {
        alert('Usuario registrado exitosamente. Inicia sesión.');
      } else {
        alert('Error en el registro, revisa los campos.');
      }
    } catch (error) {
      alert('No se pudo conectar con el backend.');
      console.error(error);
    }
  };

  function calcularEdad(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setSelectedProduct(null);
  };


  function useAuthNavigate() {
    const navigate = useNavigate();
    const login = async ({ username, password }) => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/usuario/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ correo: username, password: password })
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Login response:", data);
          const token = data.token || '';
          localStorage.setItem('jwt', token);
          if (data.tipo === "ADMIN") {
            setUser({ ...data.datos, role: 'ADMIN', token });
            navigate('/dashboard');
          } else if (data.tipo === "USER") {
            setUser({ ...data.usuario, role: 'USER', token });
            navigate('/miCuenta');
          }
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      } catch (error) {
        alert('No se pudo conectar con el backend.');
      }
    };
    return login;
  }

  function AppRoutes() {
    const navigate = useNavigate();
    const location = useLocation();
    const authLogin = useAuthNavigate(); // si o si arriba

    useEffect(() => {
      localStorage.setItem('lastPage', location.pathname);
    }, [location.pathname]);

    return (
      <>
        <Navbar
          user={user}
          onNavChange={path => navigate(path)}
          cartCount={totalItems}
          products={products}
          onSelectProduct={product => {
            setSelectedProduct(product);
            navigate('/catalogo');
          }}
          clearSignal={clearSearch}
          onLogout={() => {
            setUser(null);
            setCart([]);
            navigate('/');
            setSelectedProduct(null);
          }}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <Home
                onAddToCart={addToCart}
                onSelectProduct={handleSelectProduct}
                onGoToCart={() => navigate('/carrito')}
                onBuyNow={() => alert('Función comprar ahora no implementada')}
                onShowDiscountProducts={handleShowDiscountProducts}
                onShowValorantProducts={handleShowValorantProducts}
                onShowNews={() => navigate('/noticias')}
                onShowEvents={() => navigate('/eventos')}
                onShowCategory={handleShowCategory}
                onShowFreeShipping={handleShowFreeShipping}
                onGoToRegister={() => navigate('/signup')}
              />
            } />
            <Route path="/catalogo" element={
              <Catalog
                key={showDiscountOnly
                  ? 'with-discount'
                  : showValorantOnly
                  ? 'with-valorant'
                  : 'normal'}
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
            } />
            {/* --- RUTA DETALLE PRODUCTO --- */}
            <Route path="/producto/:id" element={
              <ProductDetailModal
                allProducts={products}
                onAddToCart={addToCart}
                onGoToCart={() => navigate('/carrito')}
              />
            } />
            <Route path="/miCuenta" element={
              user?.role === 'USER'
                ? <MiCuenta
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
                : <Navigate to="/" />
            } />
            <Route path="/dashboard" element={
              user?.role === 'ADMIN'
                ? <Dashboard admin={user} token={user.token} />
                : <Navigate to="/" />
            } />
            <Route path="/noticias" element={<Noticias onNavigate={navigate} />} />
            <Route path="/eventos" element={<Eventos onNavigate={navigate} />} />
            <Route path="/contacto" element={<FormularioContacto />} />
            <Route path="/terminos" element={<Terminos />} />
            {/* --- Carrito full incluido --- */}
            <Route path="/carrito" element={
              showCheckout
                ? <CheckoutStepper
                    user={user}
                    setUser={setUser}
                    cart={cart}
                    cartItems={cart}
                    direcciones={direcciones}
                    setDirecciones={setDirecciones}
                    discountPercent={discountPercent}
                    onFinishCheckout={() => handleCompleteCheckout(navigate)}
                    clienteData={clienteData}
                    setClienteData={setClienteData}
                    direccionData={direccionData}
                    setDireccionData={actualizarDirecciones}
                    pagoData={pagoData}
                    setPagoData={setPagoData}
                  />
                : (
                  <section className="cart">
                    <h2 className="mb-4">Tu Carrito</h2>
                    {cart.length === 0 ? (
                      <p className="text-center">Tu carrito está vacío.</p>
                    ) : (
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th>Producto</th>
                            <th>Imagen</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Descuento</th>
                            <th>Total</th>
                            <th>Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map(item => {
                            const precioDescuento = item.precio * (1 - (item.descuento ?? 0));
                            return (
                              <tr key={item.idProducto}>
                                <td>
                                  <div style={{ maxWidth: 180, fontWeight: 500 }}>{item.nombre}</div>
                                </td>
                                <td>
                                  <img
                                    src={item.imagen?.startsWith('http') ? item.imagen : `http://localhost:8080${item.imagen}`}
                                    alt={item.nombre}
                                    style={{ width: 67, height: 67, objectFit: "contain", borderRadius: 7, background: "#f2f2f2" }}
                                  />
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <button
                                      className="btn btn-sm btn-secondary"
                                      onClick={() => decrementQuantity(item.idProducto)}
                                      style={{ fontSize: 18, marginRight: 3 }}
                                    >-</button>
                                    <span style={{ margin: '0 7px', minWidth: 20, textAlign: 'center', display: 'inline-block' }}>{item.quantity}</span>
                                    <button
                                      className="btn btn-sm btn-secondary"
                                      onClick={() => incrementQuantity(item.idProducto)}
                                      style={{ fontSize: 18, marginLeft: 3 }}
                                    >+</button>
                                  </div>
                                </td>
                                <td>
                                  ${item.precio.toLocaleString('es-CL')}
                                </td>
                                <td>
                                  {item.descuento && item.descuento > 0
                                    ? `${(item.descuento * 100).toFixed(0)}%`
                                    : "-"}
                                </td>
                                <td>
                                  ${(precioDescuento * item.quantity).toLocaleString('es-CL')}
                                </td>
                                <td>
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => removeFromCart(item.idProducto)}
                                  >Quitar</button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}

                    {/* Apartado de cupón */}
                    {cart.length > 0 && (
                      <div className="cart-summary mt-4" style={{ maxWidth: 480 }}>
                        <hr />
                        <div className="mb-3 mt-3">
                          <h5>¿Tienes un cupón?</h5>
                          <div className="input-group">
                            <input
                              type="text"
                              value={couponCode}
                              onChange={e => setCouponCode(e.target.value)}
                              className="form-control"
                              placeholder="Código de cupón"
                            />
                            <button className="btn btn-outline-info" onClick={handleApplyCoupon} type="button">
                              Aplicar
                            </button>
                          </div>
                          {couponError && <small className="text-danger">{couponError}</small>}
                          {discountPercent > 0 && (
                            <div>
                              <span className="badge bg-success mt-2">
                                ¡Cupón aplicado! {discountPercent}% de descuento extra
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p>
                            <strong>Subtotal:</strong>
                            {" "}
                            ${cart.reduce((acc, item) =>
                              acc + item.precio * item.quantity,
                              0
                            ).toLocaleString('es-CL')}
                          </p>
                          <p>
                            <strong>Descuento productos:</strong>
                            {" "}
                            -${cart.reduce((acc, item) =>
                              acc + (item.precio * (item.descuento ?? 0)) * item.quantity,
                              0
                            ).toLocaleString('es-CL')}
                          </p>
                          {discountPercent > 0 && (
                            <p>
                              <strong>Descuento cupón:</strong>
                              {" "}
                              -${cart.reduce((acc, item) =>
                                acc + item.precio * (1 - (item.descuento ?? 0)) * item.quantity * (discountPercent / 100),
                                0
                              ).toLocaleString('es-CL')}
                            </p>
                          )}
                          <p>
                            <strong>Total a pagar:</strong>
                            {" "}
                            ${(cart.reduce((acc, item) =>
                              acc + item.precio * (1 - (item.descuento ?? 0)) * item.quantity,
                              0
                            ) * (1 - discountPercent / 100)).toLocaleString('es-CL')}
                          </p>
                          <button
                            className="btn btn-success mt-2"
                            onClick={handleStartCheckout}
                            disabled={cart.length === 0}
                          >
                            Ir a pagar
                          </button>
                        </div>
                      </div>
                    )}
                  </section>
                )
            } />
            <Route path="/login"
              element={
                !user
                  ? <AuthTabs onLogin={authLogin} onSignUp={handleSignUp} />
                  : <Navigate to="/" />
              }
            />
            <Route path="/signup"
              element={
                !user
                  ? <AuthTabs onLogin={authLogin} onSignUp={handleSignUp} />
                  : <Navigate to="/" />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer
          onNavigate={path => navigate(path)}
          setCompraSeleccionada={setCompraSeleccionada}
        />
      </>
    );
  }

  useEffect(() => {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && window.location.pathname === '/' && lastPage !== '/') {
      window.location.replace(lastPage);
    }
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

