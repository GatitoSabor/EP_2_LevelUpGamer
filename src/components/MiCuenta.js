import React, { useState, useEffect } from 'react';
import '../styles/MiCuenta.css';

export default function MiCuenta({ user, setUser, compras, cupones, setCuponesInternos }) {
  const [activeTab, setActiveTab] = useState('compras');
  const [puntos, setPuntos] = useState(user?.puntos || 5000);
  const [direcciones, setDirecciones] = useState(user?.direcciones || []);
  const [nuevaDireccion, setNuevaDireccion] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const descuentos = [
    { id: 1, texto: "Descuento del 10% para cualquier producto", puntos: 500, descuentoPorc: 10 },
    { id: 2, texto: "20% de descuento en productos seleccionados", puntos: 1000, descuentoPorc: 20 },
    { id: 3, texto: "Canjea 500 puntos por un cupón de $5.000", puntos: 500, valorFijo: 5000 },
    { id: 4, texto: "Envío gratuito", puntos: 300 }
  ];

  // Añade estas funciones dentro del componente
  const handleAddDireccion = () => {
    if (nuevaDireccion.trim() === '') return;
    setDirecciones([...direcciones, nuevaDireccion]);
    setNuevaDireccion('');
  };

  const handleEditDireccion = (i) => {
    setNuevaDireccion(direcciones[i]);
    setEditIndex(i);
  };

  const handleSaveEdit = () => {
    if (nuevaDireccion.trim() === '') return;
    const copia = [...direcciones];
    copia[editIndex] = nuevaDireccion;
    setDirecciones(copia);
    setNuevaDireccion('');
    setEditIndex(null);
  };

  const [passwordForm, setPasswordForm] = useState({ actual: '', nueva: '' });
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = () => {
    if (passwordForm.actual === '' || passwordForm.nueva === '') {
      alert('Completa ambos campos.');
      return;
    }
    if (passwordForm.actual !== user.password) {
      alert('La contraseña actual es incorrecta.');
      return;
    }
    // Luego sí, actualizas la contraseña en el usuario
    setUser({...user, password: passwordForm.nueva});
    alert('Contraseña modificada con éxito');
    setPasswordForm({ actual: '', nueva: '' });
  };



  const handleDeleteDireccion = (i) => {
    setDirecciones(direcciones.filter((_, idx) => idx !== i));
  };

  const eliminarCupon = (codigoCupon) => {
    setCuponesInternos(cupones.filter(cup => cup.codigo !== codigoCupon));
  };


  const handleComprar = (desc) => {
    if (puntos < desc.puntos) {
      alert("No tienes suficientes puntos para esta opción.");
      return;
    }
    const confirmar = window.confirm(`¿Confirmas canjear ${desc.puntos} puntos para:\n${desc.texto}?`);
    if (confirmar) {
      const nuevoCupon = {
        codigo: `LVLUP${Date.now()}`,
        descripcion: desc.texto,
        descuento: desc.descuentoPorc || 0,
        valorFijo: desc.valorFijo || null,
        disponible: true,
      };
      setCuponesInternos([...cupones, nuevoCupon]); // actualiza el estado global
      setPuntos(puntos - desc.puntos);
      alert("Descuento canjeado y añadido a tus cupones.");
    }
  };


  // Estado para datos editables (clona user para evitar modificar estado directo)
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    setEditableUser(user);
  }, [user]);

  // Maneja cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({ ...prev, [name]: value }));
  };

  // Guarda datos editados en estado padre
  const handleSave = () => {
    setUser(editableUser);
    alert('Datos personales actualizados con éxito');
  };

  return (
    <div className="mi-cuenta-container">
      <nav className="sidebar">
        <button className={activeTab === 'compras' ? 'active' : ''} onClick={() => setActiveTab('compras')}>Compras</button>
        <button className={activeTab === 'cupones' ? 'active' : ''} onClick={() => setActiveTab('cupones')}>Cupones</button>
        <button className={activeTab === 'datos' ? 'active' : ''} onClick={() => setActiveTab('datos')}>Datos personales</button>
        <button className={activeTab === 'direcciones' ? 'active' : ''} onClick={() => setActiveTab('direcciones')}>Direcciones</button>
        <button className={activeTab === 'contrasena' ? 'active' : ''} onClick={() => setActiveTab('contrasena')}>Contraseña</button>
        <button className={activeTab === 'tiendaPuntos' ? 'active' : ''} onClick={() => setActiveTab('tiendaPuntos')}>
          Tienda Puntos Level-Up
        </button>
      </nav>

      <section className="content">
        {activeTab === 'compras' && (
          <div>
            <h2>Compras</h2>
            {compras.length === 0 ? (
              <p>No has realizado compras todavía.</p>
            ) : (
              <div className="compras-grid">
                {compras.map((producto, index) => (
                  <div key={index} className="compra-item">
                    <img src={producto.image} alt={producto.name} />
                    <div className="compra-info">
                      <p>{producto.name}</p>
                      <p>Precio: ${producto.precioConDescuento ? producto.precioConDescuento.toLocaleString('es-CL') : producto.price.toLocaleString('es-CL')}</p>
                      {producto.descuentoAplicado > 0 && (
                        <p>Descuento cupón: {producto.descuentoAplicado}% (Cód: {producto.codigoCupon})</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'cupones' && (
          <div>
            <h2>Cupones disponibles</h2>
            {cupones.length === 0 ? (
              <p>No tienes cupones disponibles.</p>
            ) : (
              <ul className="lista-cupones">
                {cupones.map((cup, index) => (
                  <li key={index} className="cupon-item">
                    <strong>{cup.codigo}</strong> - {cup.descripcion} - {cup.descuento > 0 ? <em>{cup.descuento}% de descuento</em> : cup.valorFijo ? <em>Cupón valor ${cup.valorFijo}</em> : ''}
                    
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}


        {activeTab === 'datos' && (
          <div className="datos-personales">
            <h2>Datos Personales</h2>
            <label>Usuario</label>
            <input name="username" value={editableUser.username || ''} onChange={handleChange} />

            <label>Nombre completo</label>
            <input name="nombre" value={editableUser.nombre || ''} onChange={handleChange} />

            <label>RUT</label>
            <input name="rut" value={editableUser.rut || ''} onChange={handleChange} />

            <label>Fecha de nacimiento</label>
            <input name="fechaNacimiento" type="date" value={editableUser.fechaNacimiento || ''} onChange={handleChange} />

            <label>Correo electrónico</label>
            <input name="email" type="email" value={editableUser.email || ''} onChange={handleChange} />

            <button onClick={handleSave} className="guardar-btn">Guardar cambios</button>
          </div>
        )}

        {activeTab === 'direcciones' && (
          <div className="direcciones-section">
            <h2>Direcciones</h2>
            <ul>
              {direcciones.map((dir, i) => (
                <li key={i}>
                  {dir}
                </li>
              ))}
            </ul>
            <input
              value={nuevaDireccion}
              onChange={e => setNuevaDireccion(e.target.value)}
              placeholder="Agregar/Editar dirección"
            />
            {editIndex === null ? (
              <button onClick={handleAddDireccion}>Añadir</button>
            ) : (
              <button onClick={handleSaveEdit}>Guardar cambios</button>
            )}
            <ul>
              {direcciones.map((dir, i) => (
                <li key={i}>
                  <button onClick={() => handleEditDireccion(i)}>Editar</button>
                  <button onClick={() => handleDeleteDireccion(i)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'contrasena' && (
          <div className="contrasena-section">
            <h2>Modificar contraseña</h2>
            <label>Contraseña actual</label>
            <input
              type="password"
              name="actual"
              value={passwordForm.actual}
              onChange={handlePasswordChange}
            />
            <label>Nueva contraseña</label>
            <input
              type="password"
              name="nueva"
              value={passwordForm.nueva}
              onChange={handlePasswordChange}
            />
            <button onClick={handleSavePassword}>Guardar nueva contraseña</button>
          </div>
        )}

        {activeTab === 'tiendaPuntos' && (
          <div className="tienda-puntos">
            <h2>Tienda Puntos Level-Up</h2>
            <p className="contador-puntos">Puntos disponibles: <strong>{puntos}</strong></p>
            <div className="descuentos-grid">
              {descuentos.map(desc => (
                <div key={desc.id} className="descuento-card">
                  <p>{desc.texto} por <strong>{desc.puntos} pts</strong></p>
                  <button className="btn-comprar" onClick={() => handleComprar(desc)}>Comprar</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
