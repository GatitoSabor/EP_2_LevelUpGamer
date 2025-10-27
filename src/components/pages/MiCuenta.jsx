import React, { useState, useEffect } from 'react';
import SeguimientoCompras from './SeguimientoCompras';
import { descuentos, canjearDescuento } from '../../services/MiCuenta';
import '../../styles/MiCuenta.css';

export default function MiCuenta({ compraSeleccionada, setCompraSeleccionada, user, setUser, direcciones, setDirecciones, compras, cupones, setCuponesInternos }) {
  const [activeTab, setActiveTab] = useState('compras');
  const [puntos, setPuntos] = useState(user?.puntos || 5000);
  const [historialPuntos, setHistorialPuntos] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [tipo, setTipo] = useState('Casa');

  const [editableUser, setEditableUser] = useState(user);

  const [passwordForm, setPasswordForm] = useState({ actual: '', nueva: '', repetir: '' });

  useEffect(() => {
    setEditableUser(user);
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nuevoEvento = {
        id: Date.now(),
        usuario: 'UsuarioXYZ',
        puntos: Math.floor(Math.random() * 100) + 1
      };
      setHistorialPuntos(prev => [...prev, nuevoEvento]);
      setPuntos(prev => prev + nuevoEvento.puntos);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleComprar = (desc) => {
    canjearDescuento(puntos, desc, cupones, setCuponesInternos, setPuntos);
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveUser = () => {
    setUser(editableUser);
    alert('Datos personales actualizados con éxito');
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = () => {
    if (!passwordForm.actual || !passwordForm.nueva || !passwordForm.repetir) {
      return alert('Completa todos los campos de contraseña.');
    }
    if (passwordForm.nueva !== passwordForm.repetir) {
      return alert('Las nuevas contraseñas no coinciden.');
    }
    if (passwordForm.actual !== user.password) {
      return alert('Contraseña actual incorrecta.');
    }
    setUser(prev => ({ ...prev, password: passwordForm.nueva }));
    alert('Contraseña modificada con éxito');
    setPasswordForm({ actual: '', nueva: '', repetir: '' });
  };

  const handleAddDireccion = () => {
    if (!calle.trim() || !numero.trim()) return alert('Completa calle y número');
    const nuevaDir = `${calle} ${numero} ${tipo}`;
    setDirecciones([...direcciones, nuevaDir]);
    setCalle('');
    setNumero('');
    setTipo('Casa');
  };

  const handleEditDireccion = () => {
    if (editIndex === null) return;
    if (!calle.trim() || !numero.trim()) return alert('Completa calle y número');
    const nuevaDir = `${calle} ${numero} ${tipo}`;
    const copia = [...direcciones];
    copia[editIndex] = nuevaDir;
    setDirecciones(copia);
    setCalle('');
    setNumero('');
    setTipo('Casa');
    setEditIndex(null);
  };

  const handleDeleteDireccion = () => {
    if (editIndex === null) return;
    setDirecciones(direcciones.filter((_, idx) => idx !== editIndex));
    setCalle('');
    setNumero('');
    setTipo('Casa');
    setEditIndex(null);
  };

  return (
    <div className="mi-cuenta-container">
      <nav className="sidebar">
        <button className={activeTab === 'compras' ? 'active' : ''} onClick={() => setActiveTab('compras')}>Compras</button>
        <button className={activeTab === 'cupones' ? 'active' : ''} onClick={() => setActiveTab('cupones')}>Cupones</button>
        <button className={activeTab === 'datos' ? 'active' : ''} onClick={() => setActiveTab('datos')}>Datos personales</button>
        <button className={activeTab === 'direcciones' ? 'active' : ''} onClick={() => setActiveTab('direcciones')}>Direcciones</button>
        <button className={activeTab === 'contrasena' ? 'active' : ''} onClick={() => setActiveTab('contrasena')}>Contraseña</button>
        <button className={activeTab === 'tiendaPuntos' ? 'active' : ''} onClick={() => setActiveTab('tiendaPuntos')}>Tienda Puntos Level-Up</button>
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
                  <div
                    key={index}
                    className="compra-item"
                    onClick={() => {
                      setCompraSeleccionada(producto);
                      setActiveTab('seguimiento');
                    }}
                    style={{ cursor: 'pointer' }}
                  >
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

        {activeTab === 'seguimiento' && compraSeleccionada && (
          <SeguimientoCompras compra={compraSeleccionada} onVolver={() => setActiveTab('compras')} volverClassName="btn-primary" />
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
            <input name="username" value={editableUser?.username || ''} onChange={handleChangeUser} />

            <label>Nombre completo</label>
            <input name="fullName" value={editableUser?.fullName || ''} onChange={handleChangeUser} />

            <label>RUT</label>
            <input name="rut" value={editableUser?.rut || ''} onChange={handleChangeUser} />

            <label>Fecha de nacimiento</label>
            <input name="fechaNacimiento" type="date" value={editableUser?.fechaNacimiento || ''} onChange={handleChangeUser} />

            <label>Correo electrónico</label>
            <input name="email" type="email" value={editableUser?.email || ''} onChange={handleChangeUser} />

            <button onClick={handleSaveUser} className="guardar-btn">Guardar cambios</button>
          </div>
        )}

        {activeTab === 'direcciones' && (
          <div className="direcciones-section">
            <h2>Direcciones</h2>
            <ul>
              {direcciones.map((dir, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setEditIndex(i);
                    const partes = dir.split(' ');
                    const tipoD = partes.pop();
                    const numeroD = partes.pop();
                    const calleD = partes.join(' ');
                    setCalle(calleD);
                    setNumero(numeroD);
                    setTipo(tipoD);
                  }}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: editIndex === i ? '#add8e6' : 'transparent',
                    padding: '5px',
                    marginBottom: '4px',
                    borderRadius: '4px',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  {dir}
                </li>
              ))}
            </ul>
            <input type="text" placeholder="Calle o Avenida" value={calle} onChange={e => setCalle(e.target.value)} style={{ marginRight: '10px' }} />
            <input type="text" placeholder="Número" value={numero} onChange={e => setNumero(e.target.value)} style={{ marginRight: '10px' }} />
            <select value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
            </select>

            <div style={{ marginTop: '10px' }}>
              <button onClick={handleAddDireccion} disabled={editIndex !== null}>Añadir</button>
              <button onClick={handleEditDireccion} disabled={editIndex === null} style={{ marginLeft: '10px' }}>Modificar</button>
              <button onClick={handleDeleteDireccion} disabled={editIndex === null} style={{ marginLeft: '10px' }}>Eliminar</button>
            </div>
          </div>
        )}

        {activeTab === 'contrasena' && (
          <div className="contrasena-section">
            <h2>Modificar contraseña</h2>
            <label>Contraseña actual</label>
            <input type="password" name="actual" value={passwordForm.actual} onChange={handlePasswordChange} />
            <label>Nueva contraseña</label>
            <input type="password" name="nueva" value={passwordForm.nueva} onChange={handlePasswordChange} />
            <label>Repetir nueva contraseña</label>
            <input type="password" name="repetir" value={passwordForm.repetir} onChange={handlePasswordChange} />
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

            <div className="historial-puntos">
              <h3>Historial de puntos ganados</h3>
              {historialPuntos.length === 0 ? (
                <p className="sin-eventos">No hay eventos por ahora.</p>
              ) : (
                <ul>
                  {historialPuntos.map(evt => (
                    <li key={evt.id} className="evento-puntos">
                      <span className="icono">🎉</span>
                      El usuario <strong>{evt.usuario}</strong> usó tu código referencial, ganaste <strong>{evt.puntos}</strong> puntos.
                      <span className="fecha-evento">{new Date(evt.id).toLocaleTimeString()}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
