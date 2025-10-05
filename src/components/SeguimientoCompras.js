// src/components/SeguimientoCompras.js
import React from 'react';

export default function SeguimientoCompras({ compra, onVolver }) {
  const { estado } = compra; // Asume que cada compra tiene un campo estado

  return (
    <div>
      <h2>Seguimiento de compra</h2>
      <p>Producto: {compra.name}</p>
      <p>Estado actual: {estado}</p>
      <div className="barra-progreso">
        <div className={`etapa ${estado === 'preparacion' ? 'activa' : ''}`}>Preparación</div>
        <div className={`etapa ${estado === 'en camino' ? 'activa' : ''}`}>En camino</div>
        <div className={`etapa ${estado === 'entregado' ? 'activa' : ''}`}>Entregado</div>
      </div>
      <button onClick={onVolver}>Volver a Compras</button>
    </div>
  );
}
