import React from 'react';
import '../../styles/MiCuenta.css'

export default function SeguimientoCompras({ compra, onVolver }) {
  const { estado } = compra; 

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
      <button className="btn-primary"onClick={onVolver}>Volver a Compras</button>
    </div>
  );
}
