import React from 'react';
import '../../styles/Eventos.css';

const eventos = [
  { id: 1, titulo: 'Feria Gaming Santiago 2025', fecha: '2025-11-15', lugar: 'Centro de Convenciones', descripcion: 'Gran feria con torneos y stands de videojuegos.' },
  { id: 2, titulo: 'Junta Gamer Zona Norte', fecha: '2025-12-01', lugar: 'Café Gamers', descripcion: 'Encuentro para fans de Valorant y otros juegos.' },
  { id: 3, titulo: 'LAN Party Región Metropolitana', fecha: '2025-12-20', lugar: 'Sala de eventos', descripcion: 'Conexión en red y torneos de CS:GO.' }
];

export default function Eventos({ onNavigate }) {
  return (
    <section className="eventos">
      <h2>Eventos de Videojuegos</h2>
      <button onClick={() => onNavigate('home')}>Volver</button>
      <ul>
        {eventos.map(evento => (
          <li key={evento.id} className="evento-item">
            <h3>{evento.titulo}</h3>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
            <p>{evento.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
