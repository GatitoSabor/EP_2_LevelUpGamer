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
  const [loading, setLoading] = useState(false);

  // ========== OBTENER DATOS DEL USUARIO DESDE EL BACKEND ==========
  useEffect(() => {
    const fetchUserDataFromBackend = async () => {
      if (!user || !user.idUsuario || !user.token) {
        console.log('No hay usuario o token disponible');
        return;
      }
      
      setLoading(true);
      try {
        const response = await fetch(`http://18.116.201.66:8080/api/v1/usuario/${user.idUsuario}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const userData = await response.json();
          console.log('Datos del backend:', userData);
          
          setEditableUser({
            ...user,
            idUsuario: userData.idUsuario,
            username: userData.correo,
            fullName: userData.nombre_completo,
            rut: userData.rut,
            fechaNacimiento: userData.fecha_nacimiento,
            email: userData.correo,
            edad: userData.edad,
            descuentoDuoc: userData.descuentoDuoc
          });
          
          setUser({
            ...user,
            idUsuario: userData.idUsuario,
            username: userData.correo,
            fullName: userData.nombre_completo,
            rut: userData.rut,
            fechaNacimiento: userData.fecha_nacimiento,
            email: userData.correo,
            edad: userData.edad,
            descuentoDuoc: userData.descuentoDuoc
          });
        } else {
          console.error('Error al obtener datos del usuario:', response.status);
        }
      } catch (error) {
        console.error('Error de conexión al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDataFromBackend();
  }, []);

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

  const handleSaveUser = async () => {
    if (!user || !user.token || !user.idUsuario) {
      alert('No se ha iniciado sesión correctamente');
      return;
    }

    setLoading(true);
    try {
      const usuarioActualizado = {
        idUsuario: user.idUsuario,
        nombre_completo: editableUser.fullName,
        rut: editableUser.rut,
        fecha_nacimiento: editableUser.fechaNacimiento,
        correo: editableUser.email,
        edad: calcularEdad(editableUser.fechaNacimiento),
        descuentoDuoc: editableUser.email?.toLowerCase().endsWith('@duoc.cl') || false,
        rol: user.rol || 'USER',
        password: user.password
      };

      const response = await fetch(`http://18.116.201.66:8080/api/v1/usuario/${user.idUsuario}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioActualizado)
      });

      if (response.ok) {
        const updatedData = await response.json();
        console.log('Datos actualizados:', updatedData);
        
        setUser({
          ...user,
          fullName: editableUser.fullName,
          rut: editableUser.rut,
          fechaNacimiento: editableUser.fechaNacimiento,
          email: editableUser.email,
          username: editableUser.email,
          edad: usuarioActualizado.edad,
          descuentoDuoc: usuarioActualizado.descuentoDuoc
        });
        
        alert('✅ Datos personales actualizados con éxito');
      } else {
        const errorText = await response.text();
        console.error('Error del servidor:', errorText);
        alert(`❌ Error al actualizar: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ No se pudo conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const calcularEdad = (fechaNacimiento) => {
    if (!fechaNacimiento) return 0;
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
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
            {loading ? (
              <p>⏳ Cargando datos desde el servidor...</p>
            ) : (
              <>
                <label>Correo electrónico (Usuario)</label>
                <input 
                  name="email" 
                  type="email"
                  value={editableUser?.email || ''} 
                  onChange={handleChangeUser}
                  disabled
                  style={{ backgroundColor: '#f0f0f0' }}
                />
                
                <label>Nombre completo</label>
                <input 
                  name="fullName" 
                  value={editableUser?.fullName || ''} 
                  onChange={handleChangeUser} 
                  placeholder="Ingresa tu nombre completo"
                />
                
                <label>RUT</label>
                <input 
                  name="rut" 
                  value={editableUser?.rut || ''} 
                  onChange={handleChangeUser} 
                  placeholder="12345678-9"
                />
                
                <label>Fecha de nacimiento</label>
                <input 
                  name="fechaNacimiento" 
                  type="date" 
                  value={editableUser?.fechaNacimiento || ''} 
                  onChange={handleChangeUser} 
                />
                
                {editableUser?.edad && (
                  <div style={{ marginTop: '10px', color: '#666' }}>
                    <small>Edad: {editableUser.edad} años</small>
                  </div>
                )}
                
                {editableUser?.descuentoDuoc && (
                  <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#d4edda', borderRadius: '5px' }}>
                    <small>✅ Tienes descuento DUOC activo</small>
                  </div>
                )}
                
                <button 
                  onClick={handleSaveUser} 
                  className="guardar-btn"
                  disabled={loading}
                >
                  {loading ? '⏳ Guardando...' : '💾 Guardar cambios'}
                </button>
              </>
            )}
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
            <input 
              type="text" 
              placeholder="Calle o Avenida" 
              value={calle} 
              onChange={e => setCalle(e.target.value)} 
              style={{ marginRight: '10px' }} 
            />
            <input 
              type="text" 
              placeholder="Número" 
              value={numero} 
              onChange={e => setNumero(e.target.value)} 
              style={{ marginRight: '10px' }} 
            />
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
