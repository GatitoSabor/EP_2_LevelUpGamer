import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';
import './CheckoutStepper.css'

export default function CheckoutStepper({ cart }) {
  const [personalData, setPersonalData] = useState({ nombre: '', email: '', telefono: '' });
  const [direccionData, setDireccionData] = useState({ direccion: '', ciudad: '', codigoPostal: '' });
  const [finalizado, setFinalizado] = useState(false);

  const totalGeneral = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Stepper
      initialStep={1}
      onFinalStepCompleted={() => setFinalizado(true)}
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
            placeholder="Teléfono"
            value={personalData.telefono}
            onChange={e => setPersonalData({ ...personalData, telefono: e.target.value })}
          />
        </div>
      </Step>
      
      <Step>
        <div className="step-address-data">
          <h2>Dirección</h2>
          <input
            className="input-address"
            type="text"
            placeholder="Dirección"
            value={direccionData.direccion}
            onChange={e => setDireccionData({ ...direccionData, direccion: e.target.value })}
          />
          <input
            className="input-address"
            type="text"
            placeholder="Ciudad"
            value={direccionData.ciudad}
            onChange={e => setDireccionData({ ...direccionData, ciudad: e.target.value })}
          />
          <input
            className="input-address"
            type="text"
            placeholder="Código Postal"
            value={direccionData.codigoPostal}
            onChange={e => setDireccionData({ ...direccionData, codigoPostal: e.target.value })}
          />
        </div>
      </Step>

      <Step>
        <div className="step-summary">
          <h2>Resumen de Compra</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id} style={{ marginBottom: '1rem', listStyle: 'none' }}>
                  <img src={item.image} alt={item.name} style={{ height: '50px', marginRight: '10px' }} />
                  <strong>{item.name}</strong> - ${item.price.toLocaleString('es-CL')} x {item.quantity} = ${(item.price * item.quantity).toLocaleString('es-CL')}
                </li>
              ))}
            </ul>
          )}
          <p><strong>Total: </strong>${totalGeneral.toLocaleString('es-CL')}</p>
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
