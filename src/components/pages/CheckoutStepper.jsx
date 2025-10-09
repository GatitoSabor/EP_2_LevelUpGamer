import React, { useState, useEffect } from 'react';
import Stepper, { Step } from '../layout/Stepper';
import { generarDireccionCompleta, calcularPrecioConDescuentos, calcularEnvioBase, calcularSubtotal } from '../../services/CheckoutStepper';
import '../../styles/CheckoutStepper.css';

export default function CheckoutStepper({ cart, user, setUser, direcciones, setDirecciones, discountPercent, onFinishCheckout }) {
  const [personalData, setPersonalData] = useState({ nombre: '', email: '', telefono: '' });
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [tipo, setTipo] = useState('Casa');
  const [editIndex, setEditIndex] = useState(null);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    if (user) {
      setPersonalData({
        nombre: user.fullName || '',
        email: user.email || '',
        telefono: user.telefono || ''
      });
      setDirecciones(user.direcciones || []);
    }
  }, [user]);

  const sincronizarDireccionesUser = (nuevasDirecciones) => {
    setUser(prevUser => ({
      ...prevUser,
      direcciones: nuevasDirecciones
    }));
  };

  const handleAddDireccion = () => {
    if (!calle.trim() || !numero.trim()) {
      alert('Por favor completa calle y número');
      return;
    }
    const nuevasDirecciones = [...direcciones, generarDireccionCompleta(calle, numero, tipo)];
    setDirecciones(nuevasDirecciones);
    sincronizarDireccionesUser(nuevasDirecciones);
    setCalle('');
    setNumero('');
    setTipo('Casa');
  };

  const handleEditDireccion = (i) => {
    const dir = direcciones[i];
    const partes = dir.split(' ');
    const tipoDir = partes.pop();
    const numeroDir = partes.pop();
    const calleDir = partes.join(' ');
    setCalle(calleDir);
    setNumero(numeroDir);
    setTipo(tipoDir);
    setEditIndex(i);
  };

  const handleSaveEdit = () => {
    if (!calle.trim() || !numero.trim()) {
      alert('Por favor completa calle y número');
      return;
    }
    const copia = [...direcciones];
    copia[editIndex] = generarDireccionCompleta(calle, numero, tipo);
    setDirecciones(copia);
    sincronizarDireccionesUser(copia);
    setEditIndex(null);
    setCalle('');
    setNumero('');
    setTipo('Casa');
  };

  const handleDeleteDireccion = (i) => {
    const nuevasDirecciones = direcciones.filter((_, idx) => idx !== i);
    setDirecciones(nuevasDirecciones);
    sincronizarDireccionesUser(nuevasDirecciones);
  };

  const descuentoCupon = (discountPercent || 0) / 100;
  const envioBase = 3000;
  const costoEnvio = calcularEnvioBase(cart, envioBase);

  const subtotalTransferencia = calcularSubtotal(cart, descuentoCupon, 'priceTransferencia');
  const subtotalOtrosMedios = calcularSubtotal(cart, descuentoCupon, 'priceOtrosMedios');

  const totalTransferencia = subtotalTransferencia + costoEnvio;
  const totalOtrosMedios = subtotalOtrosMedios + costoEnvio;

  return (
    <Stepper
      initialStep={1}
      onFinalStepCompleted={() => { setFinalizado(true); if (onFinishCheckout) onFinishCheckout(cart); }}
      backButtonText="Anterior"
      backButtonProps={{ className: "custom-back-button" }}
      nextButtonText="Siguiente"
    >
      <Step>
        <div className="step-personal-data">
          <h2>Datos Personales</h2>
          <input
            className="input-personal"
            type="text"
            placeholder="Nombre completo"
            value={personalData.nombre}
            onChange={e => setPersonalData({ ...personalData, nombre: e.target.value })}
          />
          <input
            className="input-personal"
            type="email"
            placeholder="Email"
            value={personalData.email}
            onChange={e => setPersonalData({ ...personalData, email: e.target.value })}
          />
          <input
            className="input-personal"
            type="tel"
            placeholder="Teléfono (Opcional)"
            value={personalData.telefono}
            onChange={e => setPersonalData({ ...personalData, telefono: e.target.value })}
          />
        </div>
      </Step>
      <Step>
        <div className="step-address-data">
          <h2>Direcciones</h2>
          <ul>
            {direcciones.map((dir, i) => (
              <li
                key={i}
                onClick={() => handleEditDireccion(i)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: editIndex === i ? '#add8e6' : 'transparent',
                  padding: '5px',
                  marginBottom: '4px',
                  borderRadius: '4px'
                }}
              >
                {dir}
                <button onClick={(e) => { e.stopPropagation(); handleDeleteDireccion(i); }} style={{ marginLeft: '10px' }}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <input
            className='input-address'
            type="text"
            placeholder="Calle o Avenida"
            value={calle}
            onChange={e => setCalle(e.target.value)}
            style={{ marginRight: '10px' }}
          />
          <input
            className='input-address'
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
          {editIndex === null ? (
            <button onClick={handleAddDireccion} className="address-btn">
              Añadir Dirección
            </button>
          ) : (
            <button onClick={handleSaveEdit} className="address-btn">
              Guardar Cambios
            </button>
          )}
        </div>
      </Step>
      <Step>
        <div className="step-summary">
          <h2>Resumen de Compra</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <>
              <ul>
                {cart.map(item => {
                  const precioTransferencia = calcularPrecioConDescuentos(item.priceTransferencia ?? item.price, item.discount || 0, descuentoCupon);
                  const precioOtrosMedios = calcularPrecioConDescuentos(item.priceOtrosMedios ?? item.price, item.discount || 0, descuentoCupon);
                  return (
                    <li key={item.id} style={{ marginBottom: '1rem', listStyle: 'none' }}>
                      <img src={item.image} alt={item.name} style={{ height: '50px', marginRight: '10px' }} />
                      <strong>{item.name}</strong>
                      <div>Precio por transferencia: <strong>${precioTransferencia.toLocaleString('es-CL')}</strong></div>
                      <div>Precio otros medios: <strong>${precioOtrosMedios.toLocaleString('es-CL')}</strong></div>
                      <div>Cantidad: <strong>{item.quantity}</strong></div>
                      <div>Subtotal transferencia: <strong>${(precioTransferencia * item.quantity).toLocaleString('es-CL')}</strong></div>
                      <div>Subtotal otros medios: <strong>${(precioOtrosMedios * item.quantity).toLocaleString('es-CL')}</strong></div>
                    </li>
                  );
                })}
              </ul>
              <p><strong>Subtotal transferencia:</strong> ${subtotalTransferencia.toLocaleString('es-CL')}</p>
              <p><strong>Subtotal otros medios:</strong> ${subtotalOtrosMedios.toLocaleString('es-CL')}</p>
              <p><strong>Costo de envío:</strong> ${costoEnvio.toLocaleString('es-CL')}</p>
              <p><strong>Total transferencia:</strong> ${totalTransferencia.toLocaleString('es-CL')}</p>
              <p><strong>Total otros medios:</strong> ${totalOtrosMedios.toLocaleString('es-CL')}</p>
            </>
          )}
        </div>
      </Step>
      <Step>
        <div className="step-final-message">
          <h2>Compra Finalizada</h2>
          {finalizado ? (
            <p>¡Gracias por tu compra! Tu pedido se ha procesado correctamente.</p>
          ) : (
            <p>Confirma para completar tu compra.</p>
          )}
        </div>
      </Step>
    </Stepper>
  );
}
